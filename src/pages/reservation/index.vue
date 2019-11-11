<template>
 <div class="reservation">
  <div class="submit-input" id="wrap"  ref="mybox">
    <div>项目：<span class="submit-title">{{property_name}}</span></div>
    <div  class="box">
     <div class="box-number">房号：</div>
      <div class="box-item" style="width:30%">
         <input type="text" class="room-input" v-model="build_num" />
         <span>栋</span>
      </div>
       <div class="box-item" style="width:35%">
          <input type="text" class="room-input" v-model="unit_num" />
          <span>单元</span>
      </div>
      <div class="box-item" style="width:30%">
          <input type="text" class="room-input" v-model="room_num" />
          <span>号</span>
      </div>
    </div>
    <div class="box-user">姓名：
      <input type="text" class="box-user-input" v-model="username" />
    </div>
     <div class="box-user">手机：
      <input type="text" class="box-user-input" v-model="mobile"/>
    </div>
  </div>
  <div style="background: #fff;padding: 5px 0;margin: 10px 0;">
   <radio-group class="radio-group" @change="radioChange">
    <div class="order-wrapper">
     <div class="order-left">
       <div class="order-address">
          <span class="order-name">预约量房：</span>
          <span class="order-number">{{feeNumber}}元</span>
       </div>
     </div>
     <p class="order-text">(量房费用下单后在总价里扣除，如果不下单，费用作为量房师傅工钱)</p>
   </div>
     <div class="order-wrapper">
     <div class="order-left">
       <div class="order-address">
          <span class="order-name">预算总价：</span>
          <span class="order-number">{{total}}元</span>
       </div>
     </div>
   </div>
   <div class="page__bd">
       <radio class="radio" v-for="item in items" :key="item" :value="item.value" :color="color">
        </radio>
    </div>
    </radio-group>   
 </div>
 <div class="adver-wrapper">
  <div class="advertising" @click="advertisingDetails(item)">
    <img :src="advertising">
  </div>
 </div>
  <div class="service" :class="{serviceArea: isIPhoneX}">
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
  <div class="curtain-wrapper" :class="{safeArea: isIPhoneX}" style="border-top:1px solid #f5f5f5">
      <div class="curtain-buttom">
        <div @click="hanldSuccess()">提交</div>
      </div>
  </div>
 </div>
</template>

<script>
export default {
  data () {
    return {
      wrap:"",
      color: "#B30000",
      price:300,//类型价格
      build_num:"",  //几栋
      unit_num: "",  //单元
      room_num: "",  //房间号
      username:"",//用户名称
      mobile:"",//手机号
      property_id:"",//小区id
      house_id:"",//户型id
      moneySub:"",//方案ids
      items: [
        { value: '1' },
        { value: '2' },
        ],
      feeNumber:"",//预约房
      type:'',//选择类型
      fabricObj:"",//小区名称
      property_name:"",
      order_id:"",//订单id
      total:"",//总价
      count:"",
      contact:"",
      content:"",//详情
      advertising:"",//广告
      advertContent:""//广告内容
    }
  },
  computed: {
		// 验证手机号
		rightMobile() {
			let res = {};
			if (!this.mobile) {
				res.status = false;
				res.msg = '请输入手机号码';
			} else if (!/^1[3456789]{1}\d{9}$/gi.test(this.mobile)) {
				res.status = false;
				res.msg = '手机号格式不正确';
			} else {
				res.status = true;
			}
			return res;
    }
  },
  onShow(){
     this.moneySub = this.$root.$mp.query.moneySub;
     this.property_id = this.$root.$mp.query.property_id;
     this.house_id = this.$root.$mp.query.house_id;
     this.fabricObj = this.$root.$mp.query.fabricObj;
     this.property_name = this.$root.$mp.query.property_name;
     this.total = this.$root.$mp.query.total;
     console.log("面料");
     console.log(this.total+"总价")
     console.log(this.fabricObj)
     console.log(this.house_id+"house_id")
     console.log(this.moneySub+"moneySub_id")
     console.log(this.property_id+"property_id")
  },
  mounted () {
    this.getShopInfo();
        this.getContact();
        this.getAdvertising()
  },
  onUnload(){
	 Object.assign(this.$data, this.$options.data());
  },
methods: {
     radioChange (e) {
      console.log('radio发生change事件，携带value值为：', e.target.value)
      this.type = e.target.value;
      if(this.type==1){
        this.count = this.feeNumber
      }else if(this.type==2){
        this.count = this.total
      }
      console.log(e)
    },
    //广告详情
    advertisingDetails(){
       console.log("查看详情");
      let content = encodeURIComponent(this.advertContent);
      console.log(content);

      const url = "../advertisingDetails/main?content=" + content;
      wx.navigateTo({ url });
    },
     //预约房价格
    getShopInfo(){
      let that = this;
      wx.request({
          method: "GET",
          url: that.$store.state.baseUrl + "/space/reservation",
          data: {       
          },
          header: {
            "token": wx.getStorageSync('token') 
          },
          success: res => {
          console.log(res);
          that.feeNumber = res.data.data.value;
          }
        });
      },
 //获取订单详情
    hanldSuccess(){
      let that = this;
         if (!this.build_num) {
			    wx.showToast({
          // 提示内容
          title: "请输入几栋",
          icon: "none",
      })
      } else if (!this.unit_num) {
        wx.showToast({
        // 提示内容
        title: "请输入单元",
        icon: "none",
      })
			} else if (!this.room_num) {
         wx.showToast({
          // 提示内容
          title: "请输入房间号",
          icon: "none",
      })
      } else if (!this.username) {
           wx.showToast({
          // 提示内容
          title: "请输入用户名",
          icon: "none",
      })
			} else if (!this.rightMobile.status) {
          wx.showToast({
          // 提示内容
          title: "请输入正确的手机号",
          icon: "none",
      })
      }else if (!this.price) {
          wx.showToast({
          // 提示内容
          title: "请选择价格",
          icon: "none",
      })
      }
      else if (this.type.length==0) {
			  wx.showToast({
          // 提示内容
          title: "请选择支付方式",
          icon: "none",
        })
      } else {
          wx.request({
              method: "POST",
              url: that.$store.state.baseUrl + "/order/order_add",
              data: {   
                price: that.count,  //类型价格
                type: that.type,  //支付类型
                build_num: that.build_num,  //几栋
                unit_num: that.unit_num,  //单元
                room_num: that.room_num,  //房间号
                username:that.username,//用户名称
                mobile:that.mobile,//手机号
                property_id:that.property_id,//小区id
                house_id:that.house_id,//户型id
                program_id:that.moneySub,//方案ids
                choose_ids:that.fabricObj//选择配置json格式
            },
              header: {
                "token": wx.getStorageSync('token') 
              },
            
              success: res => {
               if(res.data.code==0){
                this.order_id = res.data.data.order_id;
                that.hanldPaly()
              } else{
                wx.showToast({
                  title: res.data.msg,
                  icon: "none",
                  duration: 2000
                })
              }
              }
            });
    }
    },
     //订单结算
    hanldPaly() {
      let that = this;
      //  console.log(that.invoice);
      //  console.log(that.type);
      //   console.log(that.buyername);
      wx.request({
        method: "POST",
        url: that.$store.state.baseUrl + "/order/order_pay",
        data: {
          order_id: that.order_id
        },
        header: {
          token: wx.getStorageSync("token")
        },
        success: res => {
          console.log(res.data);
          wx.showToast({
            title: res.data.msg,
            icon: "none",
            duration: 2000
          });
          wx.requestPayment({
            timeStamp: res.data.data.timeStamp,
            nonceStr: res.data.data.nonceStr,
            package: res.data.data.package,
            signType: "MD5",
            paySign: res.data.data.paySign,
            success(res) {
              that.setmobile();
              const url = '../reservaSuccess/main'
              wx.navigateTo({ url })
              console.log(res+"支付接口")
            },
            fail(res) {
               const url = '../order/main'
              wx.switchTab({ url })
              console.log(res);
            }
          });
        }
      });
    },
    setmobile(){
          let that = this;
          wx.request({
              method: "POST",
              url: that.$store.state.baseUrl + "/order/pay_suc",
              data: {   
                order_id: that.order_id  
              },
              header: {
                "token": wx.getStorageSync('token') 
              },
              success: res => {
              wx.showToast({
                title: res.data.msg,
                icon: "none",
                duration: 1000
              });
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
    //广告
      getAdvertising() {
      let that = this;
      wx.request({
        method: "GET",
        url: that.$store.state.baseUrl + "/space/ad",
        data: {},
        header: {
          token: wx.getStorageSync("token")
        },
        success: res => {
          that.advertising = res.data.data[0].cover;
          that.advertContent = res.data.data[0].content;
          console.log(that.advertising)
        }
      });
    },

    //拨打电话
    hanldPhone() {
      wx.makePhoneCall({
        phoneNumber: this.contact
      });
    },
}
}
</script>

<style scoped>
.safeArea {
 padding-bottom: 34px!important;
}
.adver-wrapper{
  width: 100%;
  background-color: #fff;
  margin: auto;
}
.advertising{
  width: 340px;
  height: 191px;
  margin: auto;
padding: 20px;

}
.advertising img{
  width: 100%;
  height: 100%;
}
.serviceArea{
  bottom:100px !important;
}
.service {
  height: 42px;
  border: 1px solid #f5f5f5;
  width: 100%;
  overflow: hidden;
  text-align: center;
  line-height: 42px;
  font-size: 12px;
  background: #fff;
  padding-bottom: 100px;
}
.service-left {
  height: 42px;
  float: left;
  width: 49%;
  border-right: 1px solid #f5f5f5;
  border-bottom:  1px solid #f5f5f5;
}

.service-right {
  float: right;
  width: 50%;
  height: 42px;
    border-bottom:  1px solid #f5f5f5;
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
.reservation{
  background: #f5f5f5;
  height: 100%;
  width: 100%;
  font-size: 16px;
}
.submit-input{
  background: #fff;
  padding: 5px 20px;
}
.room-input{
  width: 62.5px;
  border: 1px solid #afafaf;
}
.box{
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  padding: 10px 0;
}
.box-item{
  position: relative;
}
.box-item span{
  position: absolute;
  right: 5px;
  top:0;
  font-weight: bold;
}
.box-number{
  width: 55px;
}
.box-build{
  padding-right: 10px;
}
.submit-title,.room-input{
    font-weight: bold;
}
.box-user{
  position: relative;
  padding: 10px 0;
}
.box-user-input{
  position: absolute;
  top:7.5px;
  border: 1px solid #afafaf;
  width: 284px;
  right: 0;
  border-radius: 5px;
}
input{
    height: 27px;
}

.order-wrapper{
  padding: 5px 10px;
  position: relative;
  margin: 10px 10px;
}
.order-left{
  color: #333333;
}

.order-address span{
  font-weight: 600;
  color: #333333;
}
.time,.success{
  color:#999999;
}
.money{
  color: #B30303;
  text-align: right;
}
.order-number{
    color: #B30303 !important;
}
.order-text{
  font-size: 12px;
  color: #999999;
}
.curtain-wrapper{
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #fff;
}
.curtain-buttom{
  height: 40px;
  background: #B30000;
  color: #fff;
  border-radius: 5px;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  margin: 10px 20px;
}
.curtain-buttom>div{
    height: 40px;
  background: #B30000;
  color: #fff;
  border-radius: 5px;
  text-align: center;
  line-height: 40px;
  margin: 0px 10px 20px 10px;
  font-size: 16px;
}
.radio-group{
  position: relative;
}
.page__bd{
  position: absolute;
  right: 15px;
  top:0;
  display: flex;
  flex-direction: column;
}
.page__bd radio:first-of-type{
  margin-bottom: 20px;
  margin-top: 2px;
}
.page__bd radio:last-of-type{
  margin-top: 35px;
}
input{
  padding-left: 2px;
}

/* 单选框 */

.radio-group label {
    display: block;
    height: 90rpx;
    line-height: 90rpx;
    font-size: 32rpx;
    border-bottom: 1rpx solid #e2e2e2;
    box-sizing: border-box;
    padding: 0 20rpx;
}

radio {
    width: 40rpx;
}

/* 单选框未选中 */
radio .wx-radio-input {
    width: 30rpx;
    height: 30rpx;
    border-radius: 50%;
}


/* 单选框选中后对勾样式 */
radio .wx-radio-input.wx-radio-input-checked::before{
    border-radius: 50%;
    width: 55rpx;
    height: 55rpx;
    line-height: 55rpx;
    text-align: center;
    font-size: 30rpx;   
    color:#fff;
    background-color: #B30000;
    border-color:#B30000;
}
.room-input{
 border-radius: 5px;
}


</style>