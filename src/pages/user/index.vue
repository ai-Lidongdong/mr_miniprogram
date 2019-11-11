<template>
  <div  style="margin-bottom:100px">
   <div class="order-wrapper"  @click="hlandMap(item)" v-for="item in shop" :key="item.id">
     <div class="order-left">
       <div class="order-address">
          <span class="order-name">{{item.name}}</span>
          <span class="order-store" @click.stop="toFixInfoPage(item)">门店详情</span>
       </div>
       <div class="time"><span class="iconfont">&#xe651;</span>{{item.address}}</div>
     </div>
      <div class="order-right">
       <p class="money"><span class="iconfont">&#xe6a3;</span></p>
       <span></span>
     </div>
   </div>
     <div class="service">
      <div class="service-left">
        <button
          open-type="contact"
          class="online"
        >
          <img
            src="../../../static/images/kefu_no.png"
            class="service-img"
          />
          <span style="margin:0 5px">在线客服</span>
        </button>
      </div>
      <div
        class="service-right"
        @click="hanldPhone()"
      >
        <img
          src="../../../static/images/pohao_no.png"
          class="service-img"
        />
        <span style="margin:0 5px">拨打电话</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      latitude:"",//纬度
      longitude:"",//经度
      shop:""
    }
  },
   onUnload() {
    Object.assign(this.$data, this.$options.data());
  },
  onShow(){
    this.getShopInfo();
    this.getContact()
  },
  methods: {
    toFixInfoPage(item){
        let content = encodeURIComponent(item.content)
        const url = '../storeDetails/main?content=' +content;
        wx.navigateTo({ url })
    },
    hlandMap(item){
      console.log(item);
      let lat = parseFloat(item.lat);
      let lon = parseFloat(item.lon);
      console.log(lat);
      wx.openLocation({  
      latitude: lat,  
      longitude:lon,  
      scale: 18,  
      name: item.address
      // address:'民易科技'  
    })
    },
    //获取店铺信息
    getShopInfo(){
      let that = this;
      wx.request({
          method: "GET",
          url: that.$store.state.baseUrl + "/region/store",
          data: {       
          },
          header: {
            "token": wx.getStorageSync('token') 
          },
          success: res => {
          console.log(res);
          that.shop = res.data.data;
          }
        });
      },
       //联系客服
    getContact() {
      let that = this;
      wx.request({
        method: "GET",
        url: that.$store.state.baseUrl + "/space/contact",
        data: {},
        header: {
          token: wx.getStorageSync("token")
        },
        success: res => {
          that.contact = res.data.data.value;
          console.log(that.contact + "客服");
        }
      });
    },
    //拨打电话
    hanldPhone() {
      wx.makePhoneCall({
        phoneNumber: this.contact
      });
    }
  }
}
</script>

<style scoped>
.order-wrapper{
  margin: 9px 10px;
  font-size: 16px;
  position: relative;
  height: 50px;
  border-bottom: 1px solid #F5f5f5;
}
.order-left{
  float: left;
  width: 95.4%;
}
.order-address{
    text-overflow: ellipsis;
    white-space: nowrap;
}
.order-right{
  float: right;
}
.order-address span{
  font-weight: 600;
  color: #333333;
}
.time,.success{
  color:#999999;
  font-size: 12px;
}
.money{
  color: #A7A7A7;
  text-align: right;
  font-size: 23px;
}
.order-store{
  border: 1px solid #B30303;
  margin: 0 5px;
  border-radius: 5px;
  padding: 2px 10px;
  font-size: 12px;
  color: #B30303 !important;
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
</style>
