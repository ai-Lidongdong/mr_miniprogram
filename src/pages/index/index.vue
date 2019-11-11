<template>
  <div class="search-body">
    <div v-if="selectArea">
      <div class="search">
        <img src="../../../static/images/seach.png" class="search-img">
        <input class="search-input" type="text" placeholder="请搜索关键字" v-model="keyWord">
      </div>
      <div class="recommend-wrapper">
        <div class="recommend" v-for="(goods,index) in address" :key="index" v-show="seachNoData">
          <p>
            <span class="iconfont">{{goods.name}}</span>
          </p>
          <ul class="clear_float">
            <li
              v-for="(item, index2) in goods.property"
              :key="index2"
              class="recommend-item"
              :class="{active: moneyId == item.id}"
              @click="hanldToHouse(item)"
            >{{item.property_name}}</li>
          </ul>
        </div>
      </div>
      <div class="search-content" ref="search" v-show="keyWord">
        <ul class="goods clear_float">
          <li
            class="search-item border-bottom"
            v-for="item of list"
            :key="item.id"
            :class="{active: moneyId == item.id}"
            @click="hanldToHouse(item)"
          >{{item.property_name}}</li>
          <li class="search-item border-bottom">没有找到匹配数据</li>
        </ul>
      </div>
    </div>
    <div v-if="category">
      <div class="search">
        <img src="../../../static/images/seach.png" class="search-img">
        <input class="search-input" type="text" placeholder="请搜索关键字">
      </div>
      <div class="recommend-wrapper">
        <div class="recommend">
          <p>
            <span class="iconfont">选择品类</span>
          </p>
          <ul class="clear_float">
            <li class="recommend-item recommend_active" @click="hanldCategory()">窗帘</li>
            <li class="recommend-item">暂无开放</li>
          </ul>
        </div>
      </div>
      <div class="search-content" v-show="categoryNoData">
        <ul class="goods clear_float">
          <li class="search-item border-bottom"></li>
          <li class="search-item border-bottom">没有找到匹配数据</li>
        </ul>
      </div>
    </div>
    <div class="service">
      <div class="service-left">
        <button open-type="contact" class="online">
          <img src="../../../static/images/kefu_no.png" class="service-img">
          <span style="margin:0 5px">在线客服</span>
        </button>
      </div>
      <div class="service-right" @click="hanldPhone()">
        <img src="../../../static/images/pohao_no.png" class="service-img">
        <span style="margin:0 5px">拨打电话</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      address: "",
      userinfo: {},
      token: "",
      code: "",
      keyWord: "",
      list: [],
      tiemr: null,
      info: "",
      hostCities: [],
      letter: "",
      moneyId: 1, // 选择的区域id
      contact: "", //客服
      selectArea: false, //选择地区
      categoryNoData: false, //品类暂无匹配到数据
      category: true //品类
    };
  },
  onShow() {
    console.log('2.9', 2.9.toFixed())
    this.selectArea = true;
    this.category = true;
  },
  mounted() {
    this.token = wx.getStorageSync("token");
    console.log(this.token + "indexToken");
    this.getFloorInfo();
    this.getContact();
  },
  onUnload() {
    Object.assign(this.$data, this.$options.data());
  },
  methods: {
    //品类跳转显示页面
    hanldCategory() {
      this.selectArea = true;
      this.category = false;
    },

    //拨打电话
    hanldPhone() {
      wx.makePhoneCall({
        phoneNumber: this.contact
      });
    },
    //跳转页面
    hanldToHouse(item) {
      this.moneyId = item.id;
      const url =
        "../houseType/main?property_name=" +
        item.property_name +
        "&property_id=" +
        item.id;
      wx.navigateTo({ url });
      this.keyWord = "";
    },
    //授权
    getVxUserInfo() {
      var that = this;
      //用户登录
      wx.login({
        //获取code 使用wx.login得到的登陆凭证，用于换取openid==token代替
        success(res) {
          if (res.code) {
            console.log(res.code);
            console.log("----》");
            that.code = res.code;
            //使用 wx.getSetting 获取用户当前的授权状态。
            wx.getSetting({
              success(res) {
                if (res.authSetting["scope.userInfo"]) {
                  // 如果已经授权，直接调用 getUserInfo 获取用户信息
                  wx.getUserInfo({
                    success(res) {
                      //成功之后，将获取到的用户信息赋值给userinfo
                      console.log(that.userinfo);
                      that.userinfo.encryptedData = res.encryptedData;
                      that.userinfo.iv = res.iv;
                      //发起网络请求
                      wx.request({
                        method: "POST",
                        url: that.$store.state.baseUrl + "/user/login",
                        data: {
                          code: that.code
                        },
                        header: {
                          "content-type": "application/json" // 默认值
                        },
                        success: res => {
                          //console.log(res.data.data.token);
                          wx.setStorageSync("tokesn", res.data.data.token); //成功之后存入token
                          that.token = res.data.data.token;
                          that.saveUserData(res);
                        }
                      });
                    },
                    fail(err) {
                      console.log(err);
                    }
                  });
                }
              }
            });
          } else {
            console.log("登录失败！" + res.errMsg);
          }
        }
      });
    },
    //绑定用户数据接口
    saveUserData(res) {
      let that = this;
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
          //console.log(res);
          this.getUser();
        }
      });
    },
    //获取用户信息
    async getUser() {
      let res = await this.$post("GET", "user/info", {});
      console.log('获取用户信息-》', res)
    },
    //获取区域，楼盘信息
    async getFloorInfo() {
      let res = await this.$post("GET", "region/region", {});
        this.address = res.data
        console.log('---')
        console.log(this.address)
      if (res.data.data[0].property[0].id) {
        this.moneyId = res.data[0].property[0].id
      }
    },
    
    //联系客服
    async getContact() {
      let res = await this.$post("GET", "space/contact", {});
      this.contact = res.data.value
      console.log('hhh')
    },
  },
  watch: {
    keyWord() {
      if (this.tiemr) {
        clearTimeout(this.timer);
      }
      if (!this.keyWord) {
        this.list = [];
        return;
      }
      this.tiemr = setTimeout(() => {
        const result = [];
        for (let i in this.address) {
          this.address[i].property.forEach(value => {
            if (value.property_name.indexOf(this.keyWord) > -1) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 10); //当keyWord发生改变,箭头函数就会执行
    }
  },
  computed: {
    hasNoData() {
      return !this.list.lenght;
    },
    seachNoData() {
      if (!this.keyWord) {
        return (this.seachNoData = true);
      } else {
        return (this.seachNoData = false);
      }
    }
  }
};
</script>

<style  scoped>
.recommend_active {
  border: 1px solid #b30000 !important;
  color: #b30000 !important;
}
/*iphone 6 plus*/
@media only screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) {
  .pet-img {
    margin-top: 6%;
  }
}
/*iphone x*/
@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
  .pet >>> .mu-carousel-button.mu-icon-button {
    top: 15.5% !important;
  }
}
.search-body {
  height: 100%;
  width: 100%;
  background: #fff;
  color: #333333;
}
.search {
  position: fixed;
  width: 100%;
  background: #fff;
  z-index: 999;
  top: 0;
}
.search .search-input {
  box-sizing: border-box;
  height: 35px;
  line-height: 15px;
  text-align: left;
  border-radius: 50px;
  color: #333333;
  font-size: 12px;
  margin: 0 10px;
  background: #f5f5f5;
  border-radius: 50px;
  padding-left: 30px;
}

.search-content.search-item {
  line-height: 10px;
  padding-left: 10px;
  color: #333333;
  background: #fff;
}

.search-item {
  float: left;
  height: 10px;
  border: 2rpx solid #c6c6c6;
  border-radius: 5px;
  color: #333333;
  text-align: center;
  line-height: 10px;
  margin: 5px;
  padding: 12px 1px;
  font-size: 12px;
  width: 150px;
}

.search-text {
  text-align: left;
  margin: 5px 0;
  font-size: 12px;
  font-weight: normal;
  max-height: 40px;
  overflow: hidden;
}
.search-price {
  text-align: left;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.search-img {
  height: 30px;
}
.search-img img {
  height: 100%;
  width: 100%;
}
.search-price p {
  color: #f97271;
  font-size: 8px;
}
.search-buttom {
  display: inline-block;
  width: 68px;
  height: 26px;
  line-height: 26px;
  text-align: center;
  color: #fff;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(rgba(246, 217, 137, 1)),
    to(rgba(223, 178, 16, 1))
  );
  background: linear-gradient(
    90deg,
    rgba(246, 217, 137, 1) 0%,
    rgba(223, 178, 16, 1) 100%
  );
  -webkit-box-shadow: 0px 2px 4px 0px rgba(251, 220, 141, 1);
  box-shadow: 0px 2px 4px 0px rgba(251, 220, 141, 1);
  border-radius: 13px;
}
.goods {
  padding: 2%;
}
.recommend-item {
  float: left;
  height: 20rpx;
  border: 2rpx solid #c6c6c6;
  border-radius: 10rpx;
  color: #333333;
  text-align: center;
  line-height: 20rpx;
  margin: 10rpx;
  padding: 24rpx 2rpx;
  font-size: 24rpx;
  width: 300rpx;
}

.active {
  float: left;
  height: 20rpx;
  border: 2rpx solid #b30000;
  border-radius: 10rpx;
  color: #b30000;
  text-align: center;
  line-height: 20rpx;
  margin: 10rpx;
  padding: 24rpx 2rpx;
  font-size: 24rpx;
  width: 300rpx;
}

.recommend {
  padding: 0 10px;
}
.recommend ul {
  overflow: hidden;
}
.recommend p {
  margin: 10px 0;
  font-size: 18px;
  font-weight: 600;
}
.service {
  position: fixed;
  bottom: 0px;
  height: 42px;
  border-top: 1px solid #f5f5f5;
  width: 100%;
  overflow: hidden;
  text-align: center;
  line-height: 42px;
  font-size: 12px;
  background: #fff;
  border-bottom: 1px solid #f5f5f5;
}
.service-left {
  height: 42px;
  float: left;
  width: 49%;
  border-right: 1px solid #f5f5f5;
}

.service-right {
  float: right;
  width: 50%;
  height: 42px;
}
.recommend-wrapper {
  position: relative;
  margin: 0px 0 50px 0;
  top: 50px;
}

.service-img {
  width: 23px;
  height: 20px;
  vertical-align: middle;
}
.search-img {
  width: 16px;
  height: 17px;
  position: absolute;
  left: 20px;
  top: 10px;
}

.online {
  display: inline-block;
  border: none;
  background: none;
  padding: 0;
  overflow: inherit;
  font-size: 12px;
  width: 100%;
}
button::after {
  border: none;
  font-size: 12px;
}

.clear_float::after {
  /*只需要给浮动元素的父容器添加上这个类就可以了: clear_float*/
  display: block; /*把::after设置成块级元素*/
  content: ""; /*想让伪类起作用, 必须添加这个属性*/
  clear: both;
}

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