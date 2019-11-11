<script>
export default {
  //  onLaunch: function() {
  //   const token = wx.getStorageSync('token');
  //   console.log(token)
  //   wx.login({
  //   //获取code 使用wx.login得到的登陆凭证，用于换取openid==token代替
  //   success(res) {
  //     if (res.code) {
  //       console.log(res.code+"code");
  //       //使用 wx.getSetting 获取用户当前的授权状态。
  //       wx.getSetting({
  //         success(res) {
  //           if (res.authSetting["scope.userInfo"]) {
  //              wx.switchTab({
  //             url: "../index/main",
  //           })
  //           }else {
  //           wx.redirectTo({
  //             url: "../authorize/main"
  //           })
  //           }
  //         }
  //       });
  //     }
  //   }
  // });
  //  },
   
  created () {
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */

    let logs
    if (mpvuePlatform === 'my') {
      logs = mpvue.getStorageSync({key: 'logs'}).data || []
      logs.unshift(Date.now())
      mpvue.setStorageSync({
        key: 'logs',
        data: logs
      })
    } else {
      logs = mpvue.getStorageSync('logs') || []
      logs.unshift(Date.now())
      mpvue.setStorageSync('logs', logs)
    }
  },
  log () {
    console.log(`log at:${Date.now()}`)
  }
}
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
