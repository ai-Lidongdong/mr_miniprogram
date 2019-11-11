<template>
  <div style="margin-bottom:100px">
    <div
      class="order-wrapper"
      @click="hlandOrderDetail(item)"
      v-for="item in ordera"
      :key="item.id"
    >
      <div class="order-left">
        <div class="order-address">
          <span class="order-name">{{item.property_name}}</span>
          <span class="line"></span>
          <span class="order-store">{{item.build_num}}栋-{{item.unit_num}}单元-{{item.room_num}}号</span>
        </div>
        <div class="time">{{item.created}}</div>
      </div>
      <div class="order-left">
        <p class="money">¥{{item.price}}</p>
        <p
          class="success"
          v-if="item.status==9"
        >已取消</p>
        <p
          class="success"
          v-if="item.status==0"
        >未付款</p>
        <p
          class="success"
          v-if="item.status==1"
        >已付款</p>
        <span class="iconfont">&#xe6a3;</span>
      </div>
    </div>
    <div
      class="nodata"
      v-if="ordera.length == 0"
      style="padding-top: 160rpx; text-align: center;color: #999999;font-size: 14px;"
    >{{nodata}}</div>
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
  data() {
    return {
      orderapage: 1, //当前页数
      orderatotal_page: 0, //总页数
      ordera: [],
      nodata: "" //暂无订单信息
    };
  },
  onShow() {
    this.getOrderList();
    this.getContact();
  },
  mounted() {},
  methods: {
    hlandOrderDetail(item) {
      console.log(item.id);
      const url = "../orderDetails/main?order_id=" + item.id;
      wx.navigateTo({ url });
    },
    //获取订单信息
    getOrderList() {
      let that = this;
      wx.request({
        method: "GET",
        url: that.$store.state.baseUrl + "/order/order_list",
        data: {
          page: that.orderapage
        },
        header: {
          token: wx.getStorageSync("token")
        },
        success: res => {
          if (that.orderapage > 1) {
            that.ordera = that.ordera.concat(res.data.data.data);
          } else {
            that.ordera = res.data.data.data;
          }
          if (that.ordera.length == 0) {
            that.nodata = "您好，暂无订单";
          }
          //console.log(that.ordera);
          that.orderatotal_page = res.data.data.last_page;
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
};
</script>

<style scoped>
.order-wrapper {
  margin: 9px 10px;
  font-size: 16px;
  position: relative;
  height: 50px;
  border-bottom: 1px solid #afafaf;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.order-left {
  flex-grow: 1;
  padding-right: 20px;
}
.order-address span {
  font-weight: 600;
  color: #333333;
}
.time,
.success {
  color: #999999;
  font-size: 12px;
}
.success {
  text-align: right;
}
.money {
  color: #b30303;
  text-align: right;
}
.order-store {
  font-size: 14px;
  font-weight: normal !important;
}
.iconfont {
  position: absolute;
  right: 0;
  top: 10px;
  font-size: 16px;
  color: #afafaf;
}
.line {
  display: inline-block;
  box-sizing: border-box;
  width: 1px;
  height: 14px;
  background-color: #979797;
  margin: 0 5px;
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
