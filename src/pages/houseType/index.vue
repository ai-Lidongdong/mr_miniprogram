<template>
<div>
  <div class="house"  :class="{houseIPhone:isIPhoneX}">
    <div
      class="house-wrapper"
      v-for="item in buildInfo"
      :key="item.id"
    >
      <div class="content">
        <div class="horizontal-cell">{{property_name}}</div>
        <div class="horizontal-cell separator">{{item.build_name}}</div>
      </div>
      <div class="house-text">户型选择原则：例：1栋1601户型对应01户型</div>
      <div>
        <ul
          class="clear_float"
          v-if="item.house_type"
        >
          <li
            class="house-item"
            @click="hlandOption(item_child)"
            v-for="(item_child,index2) in item.house_type"
            :key="index2"
            :class="{active: moneyId == item_child.id}"
          >
            <div class="mould">{{item_child.house_name}}</div>
            <div class="number">{{item_child.lowest_floor}}{{item_child.highest_floor}}</div>
          </li>
        </ul>
        <ul
          class="clear_float"
          v-if="item.house_type==''"
        >
          <li
            class="house-item"
            style="border: 1px solid #b30000;color:#b30000;width: 60%;"
          >
            <div class="mould">01户型</div>
            <div class="number">入驻中，敬请等待</div>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="buildInfo.length==0">
      <div class="house-wrapper">
        <div class="content">
          <div class="horizontal-cell">{{property_name}}</div>
          <div class="horizontal-cell separator">此项目正在入驻中</div>
        </div>
        <div class="house-text">户型选择原则：例：1栋1601户型对应01户型</div>
        <div>
          <ul class="clear_float">
            <li
              class="house-item"
              style="border: 1px solid #b30000;color:#b30000;width: 60%;"
            >
              <div class="mould">01户型</div>
              <div class="number">入驻中，敬请等待</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
   
  </div>
   <div :class="{serviceWrapper:isIPhoneX}" class="service-wrapper">
      <div class="service" :class="{serviceIPhone:isIPhoneX}">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      buildInfo: "",
      property_id: "", //地区id
      property_name: "", //地区名称
      moneyId: 1, // 选择的户型id
      room_type: ""
    };
  },
  onUnload() {
    Object.assign(this.$data, this.$options.data());
  },
  onShow() {
    this.property_id = this.$root.$mp.query.property_id;
    this.property_name = this.$root.$mp.query.property_name;
    console.log(this.property_id + "地区id");
    console.log(this.property_name);
  },
  mounted() {
    this.getBuilding();
    this.getContact();
  },
  methods: {
    hlandOption(item_child) {
      this.moneyId = item_child.id;
      console.log(item_child.room_type + "item_child.room_type");
      const url =
        "../optionType/main?room_num=" +
        item_child.room_num +
        "&bathroom_num=" +
        item_child.bathroom_num +
        "&cloth_num=" +
        item_child.cloth_num +
        "&house_id=" +
        item_child.id +
        "&property_id=" +
        this.property_id +
        "&property_name=" +
        this.property_name +
        "&room_type=" +
        item_child.room_type;
        console.log('url', url)
      wx.navigateTo({ url });
    },
    //获取栋，户型
    getBuilding() {
      let that = this;
      wx.request({
        method: "GET",
        url: that.$store.state.baseUrl + "/region/building",
        data: {
          property_id: that.property_id
        },
        header: {
          token: wx.getStorageSync("token")
        },
        success: res => {
          that.buildInfo = res.data.data;
          if (that.buildInfo.length > 0 && that.buildInfo[0].house_type[0]) {
            that.moneyId = that.buildInfo[0].house_type[0].id;
          }
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

<style  scoped>
.service-wrapper{
background-color: #fff;
position: fixed;
bottom: 0;
height: 50px;
width: 100%;

}
.serviceWrapper {
position: fixed;
bottom: 0;
width: 100%;
background-color: #fff;
height: 91px;
}
.serviceIPhone{
  bottom: 45px  !important;
}
.houseIPhone{
  margin-bottom: 150px  !important;
}
.house {
  font-size: 18px;
  margin: 10px 20px 100px 20px;
}
.content {
  font-weight: 600;
  background: #f5f5f5;
  height: 40px;
  border: 1px solid #afafaf;
  line-height: 40px;
  border-radius: 5px;
}
.horizontal-cell {
  float: left;
  padding: 0 10px;
  text-align: center;
}
.separator {
  position: relative;
}
.separator:after {
  position: absolute;
  top: 10px;
  height: calc(100% - 20px);
  left: 0;
  content: "";
  width: 0;
  border-left: solid #979797 2px;
}
.house-text {
  font-size: 12px;
  color: #999999;
  padding: 5px 0;
}
.house-item {
  font-weight: 600;
  float: left;
  height: 40px;
  border: 1px solid #c6c6c6;
  border-radius: 5px;
  color: #333333;
  text-align: center;
  line-height: 40px;
  width: 46%;
  font-size: 12.5px;
  text-align: center;
  margin: 5px;
}
.mould {
  width: 40%;
  height: 40px;
  float: left;
  border-right: 1px solid #c6c6c6;
}
.number {
  height: 40px;
}
.active {
  font-weight: 600;
  float: left;
  height: 40px;
  border: 1px solid #b30000;
  border-radius: 5px;
  color: #b30000;
  text-align: center;
  line-height: 40px;
  width: 46%;
  font-size: 12.5px;
  text-align: center;
  margin: 5px;
}

.clear_float::after {
  /*只需要给浮动元素的父容器添加上这个类就可以了: clear_float*/
  display: block; /*把::after设置成块级元素*/
  content: ""; /*想让伪类起作用, 必须添加这个属性*/
  clear: both;
}
.house-wrapper {
  padding-bottom: 20px;
}
.service {
  position: fixed;
  bottom: 20px;
  height: 42px;
  width: 100%;
  overflow: hidden;
  text-align: center;
  line-height: 42px;
  font-size: 12px;
  background: #fff;
  border: 1px solid #f5f5f5;


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