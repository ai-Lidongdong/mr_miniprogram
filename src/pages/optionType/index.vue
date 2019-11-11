<template>
  <div>
    <div class="option-main" :class="{optionArea: isIPhoneX}">
      <div class="option">
        <ul class="clear_float">
          <li>
            <sapn class="round">●</sapn>
            您的户型共有{{room_num}}处窗户需要窗帘 {{abb}}
          </li>
          <li>
            <sapn class="round">●</sapn>
            窗宽共{{cloth_num}}米（+-0.5）
          </li>
          <li>
            <sapn class="round">●</sapn>&nbsp;点击下面菜单切换窗帘方案
          </li>
        </ul>
      </div>
      <!-- 栏目 -->
      <div class="program-bg" v-for="(item,index) in program" :key="index" :index="father_index">
        <div class="program-main" >
          <div class="program">
            <p class="program-title" >
              {{item.room_name}}
              <span
                style="font-size:12px; font-weight: normal;"
              >{{item.width_meter}} M</span>
            </p>
          </div>
          <div class="tab-content clear_float">
            <div class="tab-wrapper">
                <div class="tab-img" v-if="item.info">
                <img :src="item.info.cover" @click="hanldSelect">
              </div>
              <div class="tab-multiple">
                <span style="margin: 5px 5px 0px 5px;display: block;">颜色选择：</span>
                <ul class="tab-serise-ul clear_float">
                  <li
                    class="tab-series-li"
                    style="padding: 7px 15px;"
                    v-for="(color,color_index) in item.color_list"
                    :key="color_index"
                     @click="hanldTabColor(color.id, item.check_material_id, index)"
                    :class="{tab_active:item.check_color_id == color.id}"
                   
                  >
                    <!-- 颜色选择 -->
                    <span>{{color.name}}</span>
                  </li>
                </ul>
              </div>
              <div class="tab-multiple">
                <span style="margin: 5px 5px 0px 5px;display: block;">材质选择：</span>
                <ul class="tab-serise-ul clear_float">
                  <li
                    class="tab-series-li"
                    v-for="(material,material_index) in item.material"
                    :key="material_index"
                    :class="{tab_active:item.check_material_id == material.id}"
                    @click="hanldTabMaterial(material.id, item.check_color_id, index)"
                  >
                    <span>
                      <img
                        :src="material.material_cover"
                        style="width:10px;height:10px;vertical-align: middle;"
                      >
                    </span>
                    <!-- 材质选择 -->
                    <span style="margin:0 5px">{{material.material_name}}</span>
                  </li>
                </ul>
              </div>
              <div class="tab-text">
                <p
                  class="tab-text-tilte"
                  v-if="item.info"
                >全国统一价：{{item.info.offer_price}}*{{item.width_meter}}={{item.info.offer_price * item.width_meter}}元</p>
                <p class="tab-text-caption">备注：{{item.description}}</p>
                <span
                  class="tab-text-details"
                  @click="hanldSeeInfoImg(moneyArr[item.id])"
                >社区优惠价：{{item.width_meter}}元</span>
              </div>
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
      <div class="curtain-buttom" @click="hanldToFabric()">下一步</div>
      <div class="service" :class="{serviceIPhone:isIPhoneX}">
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
  </div>
</template>

<script>
import { log } from "util";
export default {
  data() {
    return {
      abb: "",
      moneyId: 0, //默认选中第一个tab
      moneyArr: [], // 栏目 => 方案id
      moneyArrIdx: [], // 栏目 => 当前栏目索引
      num: 2,
      room_num: "", //窗帘
      bathroom_num: "", //卫生间
      cloth_num: "", //布料/米
      house_id: "", //户型id
      info: "",
      program: "",
      description: "",
      moneySub: "", //方案id
      property_id: "", //地区id
      moneyJoin: "",
      property_name: "", //小区名称
      room_type: ""
    };
  },
  onShow() {
    console.log("root", this.$root);
    this.room_num = this.$root.$mp.query.room_num;
    this.bathroom_num = this.$root.$mp.query.bathroom_num;
    this.cloth_num = this.$root.$mp.query.cloth_num;
    this.house_id = this.$root.$mp.query.house_id;
    this.property_id = this.$root.$mp.query.property_id;
    this.property_name = this.$root.$mp.query.property_name;
    this.room_type = this.$root.$mp.query.room_type;
  },
  mounted() {
    this.getProgram();
    this.getContact();
  },
  computed: {},
  methods: {
    //获取方案
    async getProgram() {
      let res = await this.$post("GET", "region/program", {
        house_id: this.house_id
      });
      let house_json = res.data;
      let { room_type, color_type, material } = house_json;
      let program = [];
      for (let i = 0; i < room_type.length; i++) {
        program.push({});
        program[i] = house_json.program[room_type[i].id];
        program[i].room_name = room_type[i].name;
        program[i].width_meter =
          house_json.program[room_type[i].id].width_meter;
        program[i].color_list = color_type;
        program[i].material = material;
        program[i].info = house_json.program[room_type[i].id].program_info[0];
        program[i].check_color_id = color_type[0].id;
        console.log("material", material);
        program[i].check_material_id = material[0].id;
      }
      console.log('program', program)
      this.program = program
    },
    //选择颜色
    hanldTabColor(color_id, material_id, father_index) {
      console.log('check_color_id', color_id)
      console.log('material_id', material_id)
      console.log('father_index', father_index)
      let program = this.program
      let program_info = program[father_index].program_info

      for(let i = 0;i<program_info.length; i++) {
        if(color_id == program_info[i].color_id && material_id == program_info[i].material_id) {
          program[father_index].info = program_info[i]
          program[father_index].check_color_id = program_info[i].color_id
        }
      }
    },
    //选择材质
    hanldTabMaterial(material_id, color_id, father_index) {
      console.log('material_id', material_id)
      console.log('check_color_id', color_id)
      console.log('father_index', father_index)
      let program = this.program
      let program_info = program[father_index].program_info

      for(let i = 0;i<program_info.length; i++) {
        if(color_id == program_info[i].color_id && material_id == program_info[i].material_id) {
          console.log('----xunzh')
          program[father_index].info = program_info[i]
          program[father_index].check_material_id = program_info[i].material_id
        }
      }
      console.log('program', program)
      // console.log(
      //   "item_id " + item.room_type + " " + color_id + " " + material_id
      // );

      // // 数据交集
      // let program_info;
      // for (let program_info_index in item.program_info) {
      //   program_info = item.program_info[program_info_index];
      //   if (
      //     program_info.color_id == color_id &&
      //     program_info.material_id == material_id
      //   ) {
      //     program_info.sumPrice = (
      //       program_info.offer_price * item.width_meter
      //     ).toFixed(2);
      //     this.$set(this.moneyArr, item.room_type, program_info);
      //   }
      // }
      // console.log(this.moneyArr);
      // // material.cover = material.material_cover;
      // this.hanldSelect(material);
    },
    //查看详细
    hanldSeeInfoImg(item) {
      console.log("查看详情");
      console.log(item);
      console.log(item.content);
      let content = encodeURIComponent(item.content);
      console.log(content);

      const url = "../optionDetails/main?content=" + content;
      wx.navigateTo({ url });
    },
    //放大图片
    hanldSelect(item) {
      // wx.previewImage({
      //   urls: [item.cover] // 需要预览的图片http链接列表
      // });
    },
    hanldStatusColumn(item, item_plan) {
      this.$set(this.moneyArr, item.id, item_plan);
      console.log("选中方案" + item.id);
    },
    hanldToFabric() {
      console.log("选中的 moneyArr:");

      let optionCount = 0;
      for (let moneyArr_index in this.moneyArr) {
        optionCount += parseFloat(this.moneyArr[moneyArr_index].sumPrice);
      }

      console.log(this.moneyArr);
      console.log("optionCount: " + optionCount.toFixed(2));
      // return;

      console.log(this.program);
      // return;

      const url =
        "../fabricType/main?room_num=" +
        this.room_num +
        "&bathroom_num=" +
        this.bathroom_num +
        "&cloth_num=" +
        this.cloth_num +
        "&moneyArr=" +
        JSON.stringify(this.moneyArr) +
        "&property_id=" +
        this.property_id +
        "&house_id=" +
        this.house_id +
        "&property_name=" +
        this.property_name +
        "&room_type=" +
        JSON.stringify(this.program);
      wx.navigateTo({ url });
    },
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
.tab-serise-ul {
  text-align: center;
  padding: 0 0 5px 0;
  display: table;
  margin: auto;
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

.tab-series-price {
  color: #666666;
  position: absolute;
  right: 5px;
  top: 8px;
  font-size: 12px;
}
/*iphone x*/
.safeArea {
  padding-bottom: 34px !important;
}
.serviceIPhone {
  bottom: 95px !important;
}
.optionArea {
  margin-bottom: 300px !important;
}
.tab_tilte_active {
  display: inherit !important;
}
.tab-text-details {
  position: absolute;
  right: 0px;
  border-radius: 5px;
  font-size: 12px;
  padding: 2.5px 10px;

  top: 8px;
  font-weight: bold;
}

.tab-tilte {
  text-align: center;
  padding: 5px 0;
  display: table;
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
  margin: 2.5px 5px;
  font-weight: 600;
  padding: 0 10px;
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

.tab-text {
  position: relative;
  padding: 5px 0;
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
.tab-multiple {
  width: 100%;
  border-bottom: 1px solid #afafaf;
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