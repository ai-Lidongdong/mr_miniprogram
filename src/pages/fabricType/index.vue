<template>
  <div>
    <div class="option-main" :class="{optionArea: isIPhoneX}">
      <div class="option">
        <!-- 方案基础信息： -->
        <span style="font-weight:600">所需窗帘窗宽{{cloth_num}}米同时所需配件{{cloth_num}}米</span>
      </div>
      <div class="program-bg" v-for="(item,index) in fabri.choose" :key="index">
        <div class="program-main">
          <div class="program">
            <!-- 栏目标题 -->
            <p class="program-title">{{item.choose_name}}</p>
          </div>
          <ul class="tab-tilte clear_float">
            <!-- 有属性 -->
            <li
              v-for="(ind,Lmid) in item.deploy"
              :key="Lmid"
              :class="{active: ind.id == fabriInit[item.id][0]}"
              v-on:click="getA(ind,item.id,item)"
            >
              <!-- 类别名称 -->
              {{ind.deploy_name}}
            </li>
          </ul>
          <div
            class="tab-content clear_float"
            v-for="(w,index2) in item.deploy"
            v-if="indexs == index2"
            :key="w"
          >
            <div class="tab-wrapper" v-if="namePrice[item.id] && namePrice[item.id].price != 0">
              <div class="tab-series">
                <div v-if="index == 0">
                  <span>配件总价：</span>
                  <!-- <span
                    class="tab-series-series"
                  >{{namePrice[item.id]?namePrice[item.id].deploy_name:'-'}}</span>-->
                  <span class="tab-series-meter">
                    {{namePrice[item.id].price}} *
                    {{cloth_num}}=
                    {{((namePrice[item.id].price*cloth_num)*100|toFixed)/100}}
                    元
                  </span>
                </div>

                <div class="tab-select" v-else-if="item.choose_room == 1">
                  <div style="margin-bottom: 16px;">
                    <span>系列选择：</span>
                    <span class="tab-series-series">{{namePrice[item.id].deploy_name}}</span>
                    <span class="tab-series-meter">{{namePrice[item.id].price}}元</span>
                  </div>

                  <checkbox-group @change="checkboxChange($event, item)">
                    <label class="checkbox" v-for="(room,index3) in fabri.room_type" :key="index3">
                      <checkbox
                        :value="index3"
                        :checked="false"
                        :color="color"
                        style="padding-bottom: 5px;"
                      />
                      {{room.room_name}}
                    </label>
                  </checkbox-group>
                </div>

                <div v-else>
                  <span>总价：</span>
                  <!-- <span
                    class="tab-series-series"
                  >{{namePrice[item.id]?namePrice[item.id].deploy_name:'-'}}</span>-->
                  <span
                    class="tab-series-meter"
                  >{{namePrice[item.id].price}}*{{cloth_num}}={{((namePrice[item.id].price*cloth_num)*100|toFixed)/100}}元</span>
                </div>
                <!-- end第二栏 -->
              </div>
              <!-- 第三栏 -->
              <div class="tab-text" v-if="item.choose_name == '选择配件'&&item.choose_room == 1">
                <span class="tab-text-tilte">{{namePrice[item.id].deploy_name}}</span>
                <span class="tab-text-details" @click="hanldSeeInfoImg(namePrice[item.id])">查看详情</span>
                <p
                  class="tab-text-description"
                  style="padding-left:10px"
                >{{namePrice[item.id].description}}</p>
              </div>
                <div class="tab-text" v-else-if="item.choose_room == 2">
                  <span>
                  <span class="tab-text-tilte" v-if="index == 0">{{namePrice[item.id].deploy_name}}</span>
                  <span class="tab-text-tilte" v-else>专业窗帘安装</span>
                  <span class="tab-text-details" @click="hanldSeeInfoImg(namePrice[item.id])">查看详情</span>
                  <p class="tab-text-description" style="padding-left:10px">{{namePrice[item.id].description}}</p>
                </span>
              </div>
              <div class="tab-text" v-else>
                 <span class="tab-text-tilte">
                  布料总价：{{namePrice[item.id].price}} x {{RoomPrice[item.id]?RoomPrice[item.id]:0}} =
                  {{((namePrice[item.id].price*(RoomPrice[item.id]?RoomPrice[item.id]:0))*100|toFixed)/100}}元
                </span>
                <span class="tab-text-details" @click="hanldSeeInfoImg(namePrice[item.id])">查看详情</span>
                <p class="tab-text-description" style="padding-left:10px">{{namePrice[item.id].description}}</p>
              </div>
              <!-- 第三栏end -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="curtain-wrapper"
      :class="{safeArea: isIPhoneX}"
      style="border-top:1px solid #f5f5f5"
    >
      <div class="curtain-buttom" @click="hanldToreServa()">下一步</div>
      <div class="service" :class="{serviceIPhone:isIPhoneX}">
        <div class="service-left">
          <button open-type="contact" class="online">
            <img src="../../../static/images/kefu_no.png" class="service-img" />
            <span style="margin:0 5px">在线客服</span>
          </button>
        </div>
        <div class="service-right" @click="hanldPhone()">
          <img src="../../../static/images/pohao_no.png" class="service-img" />
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
      color: "#B30000",
      moneyArrIdx: [], // 栏目 => 当前栏目索引
      indexs: 0,
      checked: false,
      fabri: [],
      fabriInit: [], // 布料初始化
      materials: [], // 布料初始化/点击初始化
      namePrice: [], // 名称显示 价格公式
      sumPrice: [], // 栏目总价
      room_num: "", //窗帘
      bathroom_num: "", //卫生间
      cloth_num: "", //布料/米
      content: "", //查看详情
      RoomPrice: [], // 房间价格
      isActive: true,
      moneySub: "", //方案ids
      property_id: "", //地区id
      house_id: "", //户型id
      fabricObj: {}, //整个数据
      property_name: "", //小区
      room_type: ""
    };
  },
  onShow() {
    this.room_num = this.$root.$mp.query.room_num;
    this.bathroom_num = this.$root.$mp.query.bathroom_num;
    this.cloth_num =
      this.$root.$mp.query.cloth_num > 0 ? this.$root.$mp.query.cloth_num : 100;
    this.moneySub = decodeURIComponent(this.$root.$mp.query.moneyArr);
    this.house_id = this.$root.$mp.query.house_id;
    this.property_id = this.$root.$mp.query.property_id;
    this.property_name = this.$root.$mp.query.property_name;
    this.room_type = this.$root.$mp.query.room_type;
    console.log("卫生间");
    console.log(this.bathroom_num);
    console.log("方案ids");
    // console.log(this.room_type + "room_num");
    this.moneySub = JSON.parse(this.moneySub);
    this.room_type = JSON.parse(this.room_type);
    console.log(this.moneySub);
  },
  onUnload() {
    Object.assign(this.$data, this.$options.data());
  },
  mounted() {
    this.getFabric();
    this.getContact();
  },
  computed: {},
  methods: {
    getType(data) {
      if (typeof data[1] == "object") {
        return true;
      }
      return true;
    },
    // 字符串转数组
    getSplit(str) {
      let arr = str.split(",");
      return arr;
    },
    /**
     * 获取要循环的数据
     * 处理 字符串 匹配 二维数组
     */
    getAutoData(data) {
      // 选择材质
      if (data.material_id) {
        var a = this.getSplit(data.material_id);
        // 二唯数组过滤
        let arr = this.fabri.material.filter(e => {
          // 一唯数组匹配二维数组
          for (let i in a) {
            if (a[i] == e.id) {
              // 处理 \ 转 /
              e.material_cover = e.material_cover.replace(/\\/g, "/");
              return e;
            }
          }
          return false;
        });
        // 赋值处理好的数据
        data.material_id = arr;
      }
      // 百叶帘or贴膜
      if (data.bathroom_type) {
        let arr = [];
        var b = this.getSplit(data.bathroom_type);
        for (let n in this.fabri.bathroom_type) {
          // 一唯数组匹配二维数组
          for (let i in b) {
            if (b[i] == n && this.fabri.bathroom_type[n]) {
              arr[n] = this.fabri.bathroom_type[n];
            }
          }
        }
        // 赋值处理好的数据
        data.bathroom_type = arr;
      }
      return data;
    },

    /**
     * choose 每次大栏目数据
     * choose_room == 1 需要多选 arr push 其他的覆盖
     */
    getFabriInit(choose) {
      // console.log(choose);

      // 选择房间
      if (choose.choose_room == 1) {
        // 多选 3,4
        this.fabriInit[choose.id] = [
          choose.deploy[0] ? choose.deploy[0].id : 0,
          []
        ];
        // console.log("3-4");
        console.log(choose);
      } else {
        // 单选
        if (choose.deploy[0].material_id) {
          // 1
          this.fabriInit[choose.id] = [
            choose.deploy[0] ? choose.deploy[0].id : 0,
            choose.deploy[0].material_id[0]
              ? choose.deploy[0].material_id[0].id
              : 0
          ];
          // 布料初始化
          this.materials = choose.deploy[0].material_id;
        } else if (choose.deploy[0].bathroom_type) {
          // 5
          this.fabriInit[choose.id] = [
            choose.deploy[0] ? choose.deploy[0].id : 0,
            choose.deploy[0].bathroom_type[1] ? 1 : 0
          ];
        } else {
          // 2,6
          this.fabriInit[choose.id] = this.fabriInit[choose.id] = [
            choose.deploy[0] ? choose.deploy[0].id : 0,
            0
          ];
        }
      }
      // 名称,价格
      this.namePrice[choose.id] = choose.deploy[0];
    },
    hanldToreServa() {
      console.log(this.fabriInit);
      // return;

      this.fabriInit.forEach((item, index) => {
        this.fabricObj[index] = item;
      });

      // 结构关系
      // if (choose.choose_room == 1) {
      //   // 多选 3,4
      // } else {
      //   // 单选
      //   if (choose.deploy[0].material_id) {
      //     // 1
      //   } else if (choose.deploy[0].bathroom_type) {
      //     // 5
      //   } else {
      //     // 2,6
      //   }
      // }

      // 计算总价
      console.log("fabri");
      // console.log(this.fabri.choose);
      console.log(this.fabriInit);
      console.log(this.RoomPrice);
      console.log(this.namePrice);

      // return;

      var total = 0;
      let choose;
      let i = 1;
      for (i in this.fabri.choose) {
        choose = this.fabri.choose[i];
        console.log(choose);

        if (choose.choose_room == 1) {
          // 多选 3,4
          let len = this.fabriInit[choose.id][1].length;
          if (len > 0) {
            total += parseFloat(
              this.RoomPrice[choose.id] * this.namePrice[choose.id].price
            );
          }
        } else {
          // 配件和安装公司
          console.log(this.namePrice[choose.id].price+"name钱");
          console.log(this.cloth_num+"this.cloth_num钱");
          console.log(total+"total钱");

          total += parseFloat(this.namePrice[choose.id].price * this.cloth_num);
        }
        // console.log(choose);
      }
      console.log(this.namePrice);

      // console.log("total = " + total);
      total = parseInt(total * 100) / 100;
      console.log("total = " + total);
      // return;
      console.log(JSON.stringify(this.fabricObj));

      // 格式方案数据
      let moneySub = "";
      for (let m in this.moneySub) {
        if (this.moneySub[m] && this.moneySub[m].id) {
          moneySub += this.moneySub[m].id + ",";
        }
      }
      moneySub = moneySub.substr(0, moneySub.length - 1); // 去最后一个,
      console.log("moneySub = " + moneySub);
      // return;

      const url =
        "../reservation/main?moneySub=" +
        moneySub +
        "&property_id=" +
        this.property_id +
        "&house_id=" +
        this.house_id +
        "&fabricObj=" +
        JSON.stringify(this.fabricObj) +
        "&property_name=" +
        this.property_name +
        "&total=" +
        total;
      wx.navigateTo({ url });
    },
    /**
     * 选择一级
     * item 系列数据
     * index 栏目id
     * index2
     */
    getA(item, index, choose, index2, Lmid) {
      console.log("getA");
      console.log(item);
      console.log(choose);
      // 多选房间
      if (choose.choose_room == 1) {
        console.log("多选择");
        this.$set(this.fabriInit, choose.id, [item.id, 0]);
        this.$set(this.RoomPrice, choose.id, 0);
      } else {
        // 1
        if (item.material_id) {
          this.$set(this.fabriInit, choose.id, [
            item.id,
            item.material_id[0] ? item.material_id[0].id : 0
          ]);
          // 布料点击初始化
          this.materials = item.material_id;
        } else if (item.bathroom_type) {
          // 5
          this.$set(this.fabriInit, choose.id, [item.id, 1]);
        } else {
          this.$set(this.fabriInit, choose.id, [item.id, 0]);
        }
      }
      // 名称价格
      this.namePrice[choose.id] = item;
      console.log("fabriInit:");
      console.log(this.fabriInit);
      console.log(this.namePrice);
    },
    //查看详细
    hanldSeeInfoImg(item) {
      console.log("查看详情");
      console.log(item);
      console.log(item.content);
      let content = encodeURIComponent(item.content);
      console.log(content);

      const url = "../seeDetails/main?content=" + content;
      wx.navigateTo({ url });
    },
    /**
     * 选择二级
     * 多选房间
     */
    checkboxChange(e, param) {
      console.log("选中房间");
      console.log(e.target.value);
      let value = [];
      for (let i in e.target.value) {
        value.push(this.fabri.room_type[e.target.value[i]].id);
      }

      let fabriInit = this.fabriInit[param.id];
      this.$set(this.fabriInit, param.id, [fabriInit[0], value]);
      console.log(this.fabriInit);
      this.RoomPrice[param.id] = this.getRoomPrice(e.target.value, param.id);
    },
    // 计算选中房间价格
    getRoomPrice(value, item_id) {
      let price = 0;

      // let idx = 0;
      // for (let i in value) {
      //   idx = Number(value[i]) + 1;
      //   if (this.moneySub[idx] && this.moneySub[idx].width_meter) {
      //     price += parseFloat(this.moneySub[idx].width_meter);
      //   }
      // }

      for (let i in value) {
        price += parseFloat(this.room_type[value[i]].width_meter);
      }

      console.log("price=" + price.toFixed(2));

      return price.toFixed(2);
    },
    previewImg(item_picture) {
      wx.previewImage({
        urls: [item_picture] // 需要预览的图片http链接列表
      });
    },
    // 选择材质
    hanldSelect(item, index, itemId) {
      console.log("选择材质");
      let fabriInit = this.fabriInit[itemId];
      this.$set(this.fabriInit, itemId, [fabriInit[0], index]);
      console.log(this.fabriInit);
      wx.previewImage({
        urls: [item.material_cover] // 需要预览的图片http链接列表
      });
    },
    //获取面料
    getFabric() {
      let that = this;
      wx.request({
        method: "GET",
        url: that.$store.state.baseUrl + "/region/choose",
        data: {},
        header: {
          token: wx.getStorageSync("token")
        },
        success: res => {
          that.fabri = res.data.data;

          // console.log(that.fabri); // 原始数据
          // 组装数据
          for (let i in that.fabri.choose) {
            for (let c in that.fabri.choose[i].deploy) {
              that.fabri.choose[i].deploy[c] = this.getAutoData(
                that.fabri.choose[i].deploy[c]
              );
            }

            // 初始化默认选择的数据结构
            this.getFabriInit(that.fabri.choose[i]);
          }

          var stringResult = that.room_type;
          let namestr = [];

          console.log("ppppp");
          console.log(that.fabri.room_type);
          console.log(stringResult);

          // that.fabri.room_type.forEach(item => {
          //   stringResult.forEach(item2 => {
          //     if (item.id == item2) {
          //       console.log(item.name); //可获取对应的name
          //       namestr.push({ id: item.id, name: item.name });
          //     }
          //   });
          // });

          console.log("room_type"); //苹果1,苹果2,苹果3
          console.log(that.fabri.room_type);

          console.log("namestr 房间:");
          console.log(namestr);
          that.fabri.room_type = stringResult;

          console.log(that.fabri); // 处理后数据

          // 已初始化数据
          console.log("fabriInit");
          console.log(this.fabriInit);
          // 名称,价格
          console.log("namePrice");
          console.log(this.namePrice);
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
/*iphone x*/
.safeArea {
  padding-bottom: 34px !important;
}
.optionArea {
  margin-bottom: 300px !important;
}
.serviceIPhone {
  bottom: 95px !important;
}
#app {
  width: 600px;
  height: 400px;
  margin: 0 auto;
  border: 1px solid #ccc;
}
.tab-tilte {
  text-align: center;
}
.tab-tilte li {
  float: left;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background-color: #fff;
  border: 1px solid #c6c6c6;
  cursor: pointer;
  border-radius: 5px;
  margin: 0 5px;
  font-weight: 600;
  padding: 0 10px;
}
/* 点击对应的标题添加对应的背景颜色 */
.active {
  color: #b30000;
  border: 1px solid #b30000;
}
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

.option-main {
  background: #f5f5f5;
  height: 100%;
  width: 100%;
  margin-bottom: 100px;
}
.option {
  font-size: 12px;
  background: #fff;
  padding: 10px;
  margin: 10px 0;
}
.round {
  color: #d8d8d8;
  padding: 0 10px;
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
}
.program-main {
  padding: 10px;
  margin-bottom: 10px;
}
.program-title {
  font-size: 18px;
  font-weight: 600;
  margin: 5px 0;
}

.clear_float::after {
  /*只需要给浮动元素的父容器添加上这个类就可以了: clear_float*/
  display: block; /*把::after设置成块级元素*/
  content: ""; /*想让伪类起作用, 必须添加这个属性*/
  clear: both;
}
.tab-content {
  font-size: 14px;
}
.tab-wrapper {
  border: 1px solid #afafaf;
  border-radius: 5px;
  margin: 10px 5px;
}
.tab-series {
  margin: 8px;
  padding: 5px 0;
  position: relative;
}

.tab-text {
  border-top: 1px solid #afafaf;
  position: relative;
  padding: 10px 0;
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
.tab-serise-ul {
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

.tab_active {
  border: 1px solid #b30000;
  color: #b30000;
}
.tab-text-details {
  position: absolute;
  right: 5px;
  border: 1px solid #afafaf;
  border-radius: 5px;
  font-size: 12px;
  padding: 2.5px 10px;
  color: #666666;
  background: #f5f5f5;
}
.tab-series-price {
  color: #666666;
  position: absolute;
  right: 5px;
  top: 8px;
  font-size: 12px;
}
.tab-select {
  margin: 10px 0px 10px 10px;
}
.tab-series-explain {
  font-size: 12px;
  color: #999999;
  padding: 0 5px;
}
.tab-text-description {
  font-size: 12px;
  color: #999999;
  padding-left: 5px;
}

.service {
  position: fixed;
  bottom: 60px;
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