<template>
  <div class="success">
    <div class="success-img">
      <img src="../../../static/images/hourglass.png">
    </div>
    <p class="success-text">恭喜您付款成功！</p>
    <p class="success-explain">我们会在24小时内与您电话预约复尺时间等事宜～</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
   
    }
  },
  methods: {
    
  },
  onShow() {
    setTimeout(() => {
      wx.switchTab({
            url: "../index/main"
    });
    }, 3000);
  },
  onUnload: function () {
    // wx.reLaunch({
    //   url: '../index/main'
    // })
  }
}
</script>

<style>
.success{
  text-align: center;
}
.success-img{
  width: 27px;
  height: 36px;
  margin: 120px auto 40px auto;
}
.success-img img{
  width: 100%;
  height: 100%;
}
.success-text{
  font-weight: bold;
  font-size: 18px;
  color: #333333;
}
.success-explain{
  font-size: 12px;
  color: #999999;
}
</style>
