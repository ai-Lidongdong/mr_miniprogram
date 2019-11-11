<template>
  <div class="search-body">
    <div class="dialog-container" v-if="show">
      <div class="dialog-mask"></div>
      <div class="dialog-info">
        <div class="dialog-title">登陆提示</div>
        <div class="dialog-content">为了您能有更好的体验，请点击授权😊</div>
        <div class="dialog-footer">
          <button @getuserinfo="getLogin" open-type="getUserInfo" class="dialog-btn">点击授权</button>
          <!--           <button class='dialog-btn' open-type="getUserInfo" bindgetuserinfo='bindGetUserInfo' catchtap='confirmEvent'>点击授权</button> -->
        </div>
      </div>
    </div>
    <!-- <div>token:{{token}}</div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      userinfo: {},
      token: "",
      code: "",
      show: false
    };
  },
  onShow() {
    this.token = wx.getStorageSync("token");
    this.getVxUserInfo();
  },
  onUnload() {
    Object.assign(this.$data, this.$options.data());
  },
  methods: {
    //授权
    getVxUserInfo() {
      //wx.checkSession检查登录态是否过期
      var that = this;
      wx.checkSession({
        success() {
          //session_key 未过期
          console.log("success token:" + that.token);
          if (that.token) {
            wx.switchTab({
              url: "../index/main"
            });
          } else {
            that.show = true;
          }
        },
        fail() {
          // session_key 已过期
          console.log("fail");
          that.show = true;
        }
      });
    },
    getLogin() {
      var that = this;
      wx.login({
        //获取code 使用wx.login得到的登陆凭证，用于换取openid==token代替
        success(res) {
          if (res.code) {
            that.code = res.code;
            //使用 wx.getSetting 获取用户当前的授权状态。
               wx.getSetting({
                success(res) {
                  if (res.authSetting['scope.userInfo']) {//已授权=>getUserInfo
                    wx.getUserInfo({
                      success(res) {
                        //console.log(res)
                        that.userinfo.encryptedData = res.encryptedData;
                        that.userinfo.iv = res.iv;
                        //发起网络请求
                            wx.request({
                              method: "POST",
                              url: that.$store.state.baseUrl + "/user/login",
                              data: {
                                code: that.code,
                              },
                              header: {
                                "content-type": "application/json" // 默认值
                              },
                              success: res => {
                                console.log('res', res)
                              wx.setStorageSync("token", 'mZgHOWBmUXcDk6TfpPTJ1w=='); //成功之后存入token
                              wx.setStorageSync("token", res.data.data.token); //成功之后存入token
                              that.token = res.data.data.token;
                              that.saveUserData(res);
                              wx.switchTab({
                                url: "../index/main"
                              });
                              }
                            });
                      },
                      fail(err) {
                        console.log(err)
                      }
                    })
                  }
                }
              })
          } else {
            console.log("登录失败！" + res.errMsg);
          }
        }
      });
    },
    //绑定用户数据接口
    saveUserData(res) {
      let that = this;
      console.log(that.userinfo)
      wx.request({
        method: "POST",
        url: that.$store.state.baseUrl + "/user/save",
        data: {
          iv: that.userinfo.iv,
          data: that.userinfo.encryptedData
        },
        header: {
          token: res.data.data.token
        },
        success: res => {
          console.log("res");
          console.log(res);
          wx.switchTab({
            url: "/pages/index/main"
          });
          this.getUser();
        }
      });
    },
    //获取用户信息
    getUser() {
      let that = this;
      wx.request({
        method: "GET",
        url: that.$store.state.baseUrl + "/user/info",
        data: {},
        header: {
          token: wx.getStorageSync("token")
        },
        success: res => {
          console.log(res);
        }
      });
    }
  }
};
</script>

<style  scoped>
/* 弹框 */
.dialog-mask {
   position: fixed;
   z-index: 1000;
   top: 0;
   right: 0;
   left: 0;
   bottom: 0;
   background: rgba(0, 0, 0, 0.3);
}
.dialog-info {
   position: fixed;
   z-index: 5000;
   width: 80%;
   max-width: 600rpx;
   top: 50%;
   left: 50%;
   -webkit-transform: translate(-50%, -50%);
   transform: translate(-50%, -50%);
   background-color: #ffffff;
   text-align: center;
   border-radius: 3px;
   overflow: hidden;
}
.dialog-title {
   font-size: 36rpx;
   padding: 30rpx 30rpx 10rpx;
}
.dialog-content {
   padding: 10rpx 30rpx 20rpx;
   min-height: 80rpx;
   font-size: 32rpx;
   line-height: 1.3;
   word-wrap: break-word;
   word-break: break-all;
   color: #999999;
}
.dialog-footer {
   display: flex;
   align-items: center;
   position: relative;
   line-height: 90rpx;
   font-size: 34rpx;
}
.dialog-btn {
   display: block;
   -webkit-flex: 1;
   flex: 1;
   position: relative;
   color: #3cc51f;
}
</style>