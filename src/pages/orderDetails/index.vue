<template>
<div>
  <div style="background: #f5f5f5;" :class="{optionArea: isIPhoneX}">
    <div class="house">
      <div style="background: #fff;">
        <div class="house-wrapper">
          <div class="content">
            <div class="horizontal-cell">{{userInfo.property_name}}</div>
            <!-- <span class="line"></span> -->
            <div
              class="horizontal-cell separator"
            >{{userInfo.build_num}}栋-{{userInfo.unit_num}}单元-{{userInfo.room_num}}号</div>
            <div class="horizontal-status" v-if="orderInfo.status==9">已取消</div>
            <div class="horizontal-status" v-if="orderInfo.status==0">未付款</div>
            <div class="horizontal-status" v-if="orderInfo.status==1">已付款</div>
          </div>
        </div>
        <div class="program-bg">
          <div class="program-main">
            <div class="program">
              <p class="program-title">
                <!-- 方案信息： -->
                <span>所需窗帘窗宽{{orderInfo.house_type.cloth_num}}米同时所需配件{{orderInfo.house_type.cloth_num}}米</span>
              </p>
            </div>

            <div
              v-for="(program,index_program) in orderInfo.program"
              :key="index_program"
              v-if="program"
            >
              <ul class="tab-tilte clear_float">
                <li>
                  {{program.room_types.name}}：
                  <!-- <span style="color:#B30000">{{program.program_name}}</span> -->
                  <span style="color:#000;">&nbsp;{{program.width_meter}}M</span>
                </li>
              </ul>
              <div class="tab-content clear_float">
                <div class="tab-wrapper">
                  <div class="tab-img">
                    <img :src="program.cover" />
                  </div>
                    <div class="tab-multiple">
                <span style="margin: 5px 5px 0px 5px;display: block;">颜色选择：</span>
                <ul class="tab-serise-ul clear_float" >
                  <li class="tab-series-li" style="padding: 7px 15px;">
                    <!-- 材质名称 -->
                    <span>冷灰色</span>
                  </li>
                  <li class="tab-series-li" style="padding: 7px 15px;">
                    <!-- 材质名称 -->
                    <span>冷灰色</span>
                  </li>
                </ul>
              </div>
              <div class="tab-multiple">
                <span style="margin: 5px 5px 0px 5px;display: block;">材质选择：</span>
                <ul class="tab-serise-ul clear_float">
                  <li class="tab-series-li">
                    <span>
                      <img
                        src="../../../static/images/chuang.jpg"
                        style="width:10px;height:10px;vertical-align: middle;"
                      />
                    </span>
                    <!-- 材质名称 -->
                    <span style="margin:0 5px">高机密</span>
                  </li>
                </ul>
              </div>
                  <div class="tab-text">
                <p
                  class="tab-text-tilte"
                  v-if="moneyArrIdx[index]"
                >全国统一价：3.12*320=998.4元</p>
                <p
                  class="tab-text-tilte"
                  v-else
                >全国统一价：3.12*320=998.4元</p>
                <p class="tab-text-caption">备注：为保证窗帘的美观，默认为两倍褶</p>
                <span
                  class="tab-text-details"
                  @click="hanldSeeInfoImg(moneyArr[item.id])"
                >社区优惠价：187.2元</span>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="program-bg">
        <div class="program-main">
          <div class="program">
            <p class="program-title">面料选择：</p>
          </div>
          <div v-for="(choose,index_choose) in orderInfo.choose" :key="index_choose">
            <ul class="tab-tilte clear_float">
              <li>
                {{choose.choose_name}}：
                <span style="color:#B30000">{{choose.deploy.deploy_name}}</span>
              </li>
            </ul>

            <div class="tab-content clear_float">
              <div class="tab-wrapper">
                <div class="tab-series">
                  <div v-if="choose.choose_room == 1">
                    <div>
                      系列选择：
                      <span class="tab-series-series">{{choose.deploy.deploy_name}}</span>
                      <span class="tab-series-meter">{{choose.deploy.price}}元/米</span>
                    </div>
                    <div
                      v-for="(choose_rooms,choose_rooms_index) in choose.choose_rooms"
                      :key="choose_rooms_index"
                      v-if="choose_rooms"
                    >
                      <div class="tab-select">
                        <checkbox-group @change="checkboxChange($event, item)">
                          <label class="checkbox">
                            <checkbox
                              :value="index3"
                              :checked="true"
                              :color="color"
                              style="padding-bottom: 5px;"
                            />
                            {{choose_rooms.name}}
                          </label>
                        </checkbox-group>
                      </div>
                    </div>
                  </div>

                  <div v-else-if="choose.deploy.material_id">
                    <div>
                      系列选择：
                      <span class="tab-series-series">{{choose.deploy.deploy_name}}</span>
                      <span class="tab-series-meter">{{choose.deploy.price}}元/米</span>
                    </div>
                    <div class="tab-series-main">
                      <span>材质选择：</span>
                      <ul class="tab-serise-ul clear_float">
                        <li class="tab-series-li">
                          <span>
                            <img
                              :src="choose.deploy.id.material_cover"
                              style="width:10px;height:10px;vertical-align: middle;margin:0 6px"
                            />
                          </span>
                          <span>{{choose.deploy.id.material_name}}</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div v-else-if="choose.deploy.bathroom_type">
                    <div>
                      系列选择：{{choose.deploy.bathroom_type}}
                      <span class="tab-series-series">{{choose.deploy.deploy_name}}</span>
                      <span class="tab-series-meter">{{choose.deploy.price}}元/米</span>
                    </div>
                    <div class="tab-series-main">
                      <span>材质选择：</span>
                      <ul class="tab-serise-ul clear_float">
                        <li class="tab-series-li">
                          <span></span>
                          <span>{{choose.deploy.bathroom_types}}</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div v-if="choose.choose_name=='选择配件'">
                    <div>
                      总价：
                      <span
                        class="tab-series-meter"
                      >{{choose.deploy.price}}x{{orderInfo.house_type.cloth_num}}={{((choose.deploy.price*(orderInfo.house_type.cloth_num))*100|toFixed)/100}}元</span>
                         <p
                  class="tab-text-description"
                  style="padding-left:0"
                >{{choose.deploy?choose.deploy.description:'-'}}</p>
                    </div>
                  </div>
                   <div  v-if="choose.choose_name=='安装公司'">
                    <div>
                      总价：
                      <span
                        class="tab-series-meter"
                      >{{choose.deploy.price}}x{{orderInfo.house_type.cloth_num}}={{((choose.deploy.price*orderInfo.house_type.cloth_num)*100|toFixed)/100}}元</span>
                      <p
                  class="tab-text-description"
                  style="padding-left:0"
                >{{choose.deploy?choose.deploy.description:'-'}}</p>
                    </div>
                  </div>
                </div>

                <div class="tab-text" v-if="choose.choose_room == 1">
                  <span
                    class="tab-text-tilte"
                  >布料总价：{{choose.deploy.price}}x{{choose.choose_rooms_price}}={{((choose.deploy.price*choose.choose_rooms_price)*100|toFixed)/100}}元</span>
                  <span class="tab-text-details" @click="hanldSeeInfoImg(choose.deploy)">查看详情</span>
                        <p
                    class="tab-text-description"
                    style="padding-left:10px"
                  >{{choose.deploy?choose.deploy.description:'-'}}</p>
                </div>
                <div class="tab-text" v-else-if="choose.deploy.material_id">
                  <span
                    class="tab-text-tilte"
                  >布料总价：{{choose.deploy.price}}x{{orderInfo.house_type.cloth_num}}={{((choose.deploy.price*orderInfo.house_type.cloth_num)*100|toFixed)/100}}元</span>
                  <span class="tab-text-details" @click="hanldSeeInfoImg(choose.deploy)">查看详情</span>
                   <p
                    class="tab-text-description"
                    style="padding-left:10px"
                  >{{choose.deploy?choose.deploy.description:'-'}}</p>
                </div>
                <div class="tab-text" v-else-if="choose.deploy.bathroom_type">
                  <span
                    class="tab-text-tilte"
                  >配件总价：{{choose.deploy.price}}x{{orderInfo.house_type.bathroom_num}}={{((choose.deploy.price*orderInfo.house_type.bathroom_num)*100|toFixed)/100}}元</span>
                  <span class="tab-text-details" @click="hanldSeeInfoImg(choose.deploy)">查看详情</span>
                </div>

                <div class="tab-text" v-else>
                  <span class="tab-text-tilte">{{choose.deploy.deploy_name}}</span>
                  <span class="tab-text-details" @click="hanldSeeInfoImg(choose.deploy)">查看详情</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="order-info">
        <div class="info-wrapper">
          <p>订单信息：</p>
          <p>订单编号：{{orderInfo.order_no}}</p>
          <p>预约时间：{{orderInfo.created}}</p>
          <p>用户：{{userInfo.username}}</p>
          <p>手机：{{userInfo.mobile}}</p>
        </div>
      </div>
    </div>
  </div>
   <div class="curtain-wrapper" v-if="orderInfo.status==0" :class="{safeArea: isIPhoneX}" style="border-top:1px solid #f5f5f5">
        <div class="order-buttom">
          <div class="order-cancel" @click.stop="cancelOrder()">取消订单</div>
          <div class="order-pay" @click="hanldPaly()">立即支付</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: "#B30000",
      order_id: "", //订单id
      orderInfo: "",
      userInfo: "",
      bathroom_types: []
    };
  },
  onShow() {
    this.order_id = this.$root.$mp.query.order_id;
  },
  mounted() {
    this.getOrderInfo();
  },
  methods: {
    //方案查看详情
    hanldSeeInfoPro(item){
  console.log("查看详情");
      console.log(item);
      console.log(item.content);
      let content = encodeURIComponent(item.content);
      console.log(content);

      const url = "../optionDetails/main?content=" + content;
      wx.navigateTo({ url });
    },
    //查看详情
    hanldSeeInfoImg(item) {
      console.log("查看详情");
      console.log(item);
      console.log(item.content);
      let content = encodeURIComponent(item.content);
      console.log(content);

      const url = "../seeDetails/main?content=" + content;
      wx.navigateTo({ url });
    },
    getFabriInit(choose) {
      // 选择房间
      if (choose.choose_room == 1) {
        // 多选 3,4
        var tmp = [];
        for (let i in this.orderInfo.room_type) {
          for (let n in this.orderInfo.choose_ids[choose.id][1]) {
            if (
              this.orderInfo.room_type[i].id ==
              this.orderInfo.choose_ids[choose.id][1][n]
            ) {
              tmp[n] = this.orderInfo.room_type[i];
            }
          }
        }
        choose["choose_rooms"] = tmp;
        let sumPrice = 0;
        if (this.orderInfo.choose_ids[choose.id][1]) {
          for (let n in this.orderInfo.choose_ids[choose.id][1]) {
            for (let p in this.orderInfo.program) {
              if (
                this.orderInfo.program[p] &&
                this.orderInfo.program[p].id ==
                  this.orderInfo.choose_ids[choose.id][1][n]
              ) {
                sumPrice += parseFloat(this.orderInfo.program[p].width_meter);
              }
            }
          }
        }

        choose["choose_rooms_price"] = sumPrice;
        console.log(choose);
      } else {
        // 单选
        if (choose.deploy.material_id) {
          // 1
          for (let i in this.orderInfo.material) {
            if (choose.deploy.id == this.orderInfo.material[i].id) {
              choose.deploy.id = this.orderInfo.material[i];
              choose.deploy.id.material_cover = choose.deploy.id.material_cover.replace(/\\/g, "/")
            }
          }
          console.log("1 material_id");
          console.log(choose);
        } else if (choose.deploy.bathroom_type) {
          // 5
          this.bathroom_types[1] = "百叶帘";
          this.bathroom_types[2] = "贴膜";

          for (let i in this.bathroom_types) {
            if (i == this.orderInfo.choose_ids[choose.id][1]) {
              choose.deploy.bathroom_types = this.bathroom_types[i];
            }
          }
          console.log("5");
          console.log(choose);
        } else {
          // 2,6
        }
      }
      console.log("choose");
      console.log(choose);
    },
    //获取详情
    getOrderInfo() {
      let that = this;
      wx.request({
        method: "GET",
        url: that.$store.state.baseUrl + "/order/order_details",
        data: {
          order_id: that.order_id 
        },
        header: {
          token: wx.getStorageSync("token")
        },
        success: res => {
          that.orderInfo = res.data.data;
          that.userInfo = that.orderInfo.order_info;

          for (let i in that.orderInfo.choose) {
            // 初始化默认选择的数据结构
            this.getFabriInit(that.orderInfo.choose[i]);
          }

          console.log("program");
          for (let i in that.orderInfo.program) {
            if (that.orderInfo.program[i]) {
              for (let n in that.orderInfo.room_type) {
                if (
                  that.orderInfo.room_type[n].id ==
                  that.orderInfo.program[i].room_type
                ) {
                  that.orderInfo.program[i].room_types =
                    that.orderInfo.room_type[n];
                  break;
                }
              }
            }
          }

          console.log(that.orderInfo.program);

          console.log("orderInfo");
          console.log(that.orderInfo);
          console.log(that.userInfo);
        }
      });
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
              wx.navigateTo({ url: "../reservaSuccess/main" });
              that.setmobile();
              console.log(res + "支付接口");
            },
            fail(res) {
              console.log(res);
            }
          });
        }
      });
    },
    setmobile() {
      let that = this;
      wx.request({
        method: "POST",
        url: that.$store.state.baseUrl + "/order/pay_suc",
        data: {
          order_id: that.order_id
        },
        header: {
          token: wx.getStorageSync("token")
        },
        success: res => {
          //console.log(res)
          that.getOrderInfo();
          wx.showToast({
            title: res.data.msg,
            icon: "none",
            duration: 1000
          });
        }
      });
    },

    //取消订单
    cancelOrder() {
      let that = this;
      wx.showModal({
        title: "温馨提示",
        content: "您确定要取消此订单吗？",
        success(res) {
          if (res.confirm) {
            wx.request({
              method: "POST",
              url: that.$store.state.baseUrl + "/order/order_cancel",
              data: {
                order_id: that.order_id
              },
              header: {
                token: wx.getStorageSync("token")
              },
              success: res => {
                console.log(res);
                wx.showToast({
                  title: res.data.msg,
                  icon: "none",
                  duration: 2000
                });
                wx.navigateBack({
                  delta: 2
                });
              }
            });
          } else if (res.cancel) {
            //console.log('用户点击取消')
          }
        }
      });
    }
  }
};
</script>

<style  scoped>
.safeArea {
  padding-bottom: 34px !important;
}
.optionArea {
  margin-bottom: 300px !important;
}
.house {
  font-size: 18px;
  height: 100%;
  margin-bottom: 50px;
}
.content {
  font-weight: 600;
  background: #f5f5f5;
  height: 40px;
  border: 1px solid #afafaf;
  line-height: 40px;
  border-radius: 5px;
  padding: 0 10px;
}
.horizontal-cell {
  float: left;
  text-align: center;
}
.separator {
  position: relative;
  font-weight: normal;
  font-size: 14px;
  left: 10px;
}
.horizontal-status {
  position: absolute;
  right: 40px;
  font-size: 14px;
  color: #b30000;
  font-weight: normal;
}

.tab-tilte {
  width: 100%;
}
.tab-tilte li {
  float: left;
  height: 30px;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
}
/* 点击对应的标题添加对应的背景颜色 */
.tab-tilte .active {
  /* 地址是背景图标 */
  color: #b30000;
  border: 1px solid #b30000;
}
.tab-tilte .active1 {
  color: #b30000;
  border: 1px solid #b30000;
}

.tab-tilte .active2 {
  color: #b30000;
  border: 1px solid #b30000;
}

.clear_float::after {
  /*只需要给浮动元素的父容器添加上这个类就可以了: clear_float*/
  display: block; /*把::after设置成块级元素*/
  content: ""; /*想让伪类起作用, 必须添加这个属性*/
  clear: both;
}

.nav {
  width: 100%;
  height: 100rpx;
  display: flex;
  flex-direction: row;
  background-color: #fff;
}
.default {
  line-height: 100rpx;
  text-align: center;
  flex: 1;
  border-right: 1px solid gainsboro;
  color: #000;
  font-weight: bold;
  font-size: 28rpx;
}
.red {
  line-height: 100rpx;
  text-align: center;
  color: #f28045;
  flex: 1;
  border-right: 1px solid gainsboro;
  font-weight: bold;
  font-size: 28rpx;
}
.show {
  display: block;
  text-align: center;
  line-height: 200rpx;
}
.hidden {
  display: none;
  text-align: center;
  line-height: 200px;
}
.program-bg {
  background-color: #fff;
  font-size: 14px;
  margin-bottom: 10px;
  padding: 0 10px;
}
.program-main {
  padding: 10px 0;
  margin-bottom: 10px;
}
.program-title {
  font-size: 16px;
  font-weight: 600;
  margin: 5px 0;
}

.clear_float::after {
  /*只需要给浮动元素的父容器添加上这个类就可以了: clear_float*/
  display: block; /*把::after设置成块级元素*/
  content: ""; /*想让伪类起作用, 必须添加这个属性*/
  clear: both;
}

.tab-wrapper {
  border: 1px solid #afafaf;
  border-radius: 5px;
  margin: 10px 5px;
}
.tab-img {
  margin: 4px auto 4px auto;
  width: 320px;
  height: 160px;
}
.tab-img img {
  width: 100%;
  height: 100%;
}

.tab-text-tilte {
  margin: 5px 10px 0 10px;
  color: #333333;
  font-size: 13px;
  font-weight: 600;
}
.tab-text-caption {
  margin: 0px 10px;
  font-size: 12px;
  color: #999999;
}
.curtain-buttom {
  height: 40px;
  background: #b30000;
  color: #fff;
  border-radius: 5px;
  text-align: center;
  line-height: 40px;
  margin: 5px 10px 20px 10px;
  font-size: 16px;
}

.tab-series {
  margin: 8px;
  padding: 5px 0;
  position: relative;
}

.tab-text {
  border-top: 1px solid #afafaf;
  position: relative;
  padding: 5px 0;
}
.tab-text-tilte {
  margin: 5px 10px 0 10px;
  color: #333333;
  font-weight: 600;
}
.tab-text-caption {
  margin: 0px 10px;
  font-size: 12px;
  color: #999999;
}
.curtain-buttom {
  height: 40px;
  background: #b30000;
  color: #fff;
  border-radius: 5px;
  text-align: center;
  line-height: 40px;
  margin: 5px 10px 20px 10px;
  font-size: 16px;
}
.tab-series-meter {
  font-weight: bold;
  margin: 0 5px;
}
.tab-series-series {
  color: #b30000;
}
.tab-item {
  display: block;
  height: 20px;
  border-radius: 5px;
  border: 1px solid #afafaf;
  width: 80px;
}
.tab-series-main {
  position: relative;
  margin: 10px 0 0 0;
}
.tab-multiple {
  width: 100%;
  border-top: 1px solid #afafaf;
}

.tab-serise-ul {
  text-align: center;
  padding: 0 0 5px 0;
  display: table;
  margin:auto;
}
.tab-series-li {
  float: left;
  border: 1px solid #c6c6c6;
  border-radius: 5px;
  color: #333333;
  text-align: center;
  line-height: 10px;
  padding: 6px 5px;
  font-size: 12px;
  font-weight: bold;
  margin: 5px;
}
.tab-text-details {
  position: absolute;
  right: 0px;
  border-radius: 5px;
  font-size: 12px;
padding: 5rpx 10px 0 0rpx;
  top: 8px;
  font-weight: bold;
}

.tab-series-price {
  color: #666666;
  position: absolute;
  right: 5px;
  top: 8px;
  font-size: 12px;
}
.tab-select {
  margin: 0 10px;
}
.tab-series-explain {
  font-size: 12px;
  color: #999999;
  padding: 0 5px;
}
.order-info {
  background: #fff;
  font-size: 14px;
  padding: 0 20px;
}
.info-wrapper {
  padding: 20px 0;
}

.info-wrapper p:first-of-type {
  font-size: 16px;
  font-weight: bold;
  margin: 0;
}
.info-wrapper p {
  margin: 5px 0;
}
.order-buttom {
  font-size: 14px;
  text-align: center;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  background: #fff;
  padding: 0 20px;
  margin: 10px 20px;
}
.order-cancel {
  border: 1px solid #b30000;
  background: #fff;
  color: #b30000;
  border-radius: 5px;
  width: 29%;
  height: 33px;
  line-height: 33px;
  margin: 0 5px;
}
.order-pay {
  border-radius: 5px;
  background: #b30000;
  color: #fff;
  width: 30%;
  height: 35px;
  line-height: 35px;
}

.house-wrapper {
  padding: 0 10px;
  position: relative;
}
.line {
  display: inline-block;
  box-sizing: border-box;
  width: 1px;
  height: 14px;
  background-color: #979797;
  margin: 0 5px;
  position: absolute;
  left: 137.5px;
  top: 15px;
}

.curtain-wrapper {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #fff;
}
.curtain-buttom {
  height: 40px;
  background: #b30000;
  color: #fff;
  border-radius: 5px;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  margin: 10px 20px;
}
.tab-text-description {
  font-size: 12px;
  color: #999999;
  padding-left: 5px;
}
</style>