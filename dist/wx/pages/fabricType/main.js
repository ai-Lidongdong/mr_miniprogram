require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([16],{

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(196);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_16bc50c3_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(213);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(197)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-16bc50c3"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_16bc50c3_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/fabricType/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-16bc50c3", Component.options)
  } else {
    hotAPI.reload("data-v-16bc50c3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 197:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
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
  onShow: function onShow() {
    this.room_num = this.$root.$mp.query.room_num;
    this.bathroom_num = this.$root.$mp.query.bathroom_num;
    this.cloth_num = this.$root.$mp.query.cloth_num > 0 ? this.$root.$mp.query.cloth_num : 100;
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
  onUnload: function onUnload() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()(this.$data, this.$options.data());
  },
  mounted: function mounted() {
    this.getFabric();
    this.getContact();
  },

  computed: {},
  methods: {
    getType: function getType(data) {
      if (__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(data[1]) == "object") {
        return true;
      }
      return true;
    },

    // 字符串转数组
    getSplit: function getSplit(str) {
      var arr = str.split(",");
      return arr;
    },

    /**
     * 获取要循环的数据
     * 处理 字符串 匹配 二维数组
     */
    getAutoData: function getAutoData(data) {
      // 选择材质
      if (data.material_id) {
        var a = this.getSplit(data.material_id);
        // 二唯数组过滤
        var arr = this.fabri.material.filter(function (e) {
          // 一唯数组匹配二维数组
          for (var i in a) {
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
        var _arr = [];
        var b = this.getSplit(data.bathroom_type);
        for (var n in this.fabri.bathroom_type) {
          // 一唯数组匹配二维数组
          for (var i in b) {
            if (b[i] == n && this.fabri.bathroom_type[n]) {
              _arr[n] = this.fabri.bathroom_type[n];
            }
          }
        }
        // 赋值处理好的数据
        data.bathroom_type = _arr;
      }
      return data;
    },


    /**
     * choose 每次大栏目数据
     * choose_room == 1 需要多选 arr push 其他的覆盖
     */
    getFabriInit: function getFabriInit(choose) {
      // console.log(choose);

      // 选择房间
      if (choose.choose_room == 1) {
        // 多选 3,4
        this.fabriInit[choose.id] = [choose.deploy[0] ? choose.deploy[0].id : 0, []];
        // console.log("3-4");
        console.log(choose);
      } else {
        // 单选
        if (choose.deploy[0].material_id) {
          // 1
          this.fabriInit[choose.id] = [choose.deploy[0] ? choose.deploy[0].id : 0, choose.deploy[0].material_id[0] ? choose.deploy[0].material_id[0].id : 0];
          // 布料初始化
          this.materials = choose.deploy[0].material_id;
        } else if (choose.deploy[0].bathroom_type) {
          // 5
          this.fabriInit[choose.id] = [choose.deploy[0] ? choose.deploy[0].id : 0, choose.deploy[0].bathroom_type[1] ? 1 : 0];
        } else {
          // 2,6
          this.fabriInit[choose.id] = this.fabriInit[choose.id] = [choose.deploy[0] ? choose.deploy[0].id : 0, 0];
        }
      }
      // 名称,价格
      this.namePrice[choose.id] = choose.deploy[0];
    },
    hanldToreServa: function hanldToreServa() {
      var _this = this;

      console.log(this.fabriInit);
      // return;

      this.fabriInit.forEach(function (item, index) {
        _this.fabricObj[index] = item;
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
      var choose = void 0;
      var i = 1;
      for (i in this.fabri.choose) {
        choose = this.fabri.choose[i];
        console.log(choose);

        if (choose.choose_room == 1) {
          // 多选 3,4
          var len = this.fabriInit[choose.id][1].length;
          if (len > 0) {
            total += parseFloat(this.RoomPrice[choose.id] * this.namePrice[choose.id].price);
          }
        } else {
          // 配件和安装公司
          console.log(this.namePrice[choose.id].price + "name钱");
          console.log(this.cloth_num + "this.cloth_num钱");
          console.log(total + "total钱");

          total += parseFloat(this.namePrice[choose.id].price * this.cloth_num);
        }
        // console.log(choose);
      }
      console.log(this.namePrice);

      // console.log("total = " + total);
      total = parseInt(total * 100) / 100;
      console.log("total = " + total);
      // return;
      console.log(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(this.fabricObj));

      // 格式方案数据
      var moneySub = "";
      for (var m in this.moneySub) {
        if (this.moneySub[m] && this.moneySub[m].id) {
          moneySub += this.moneySub[m].id + ",";
        }
      }
      moneySub = moneySub.substr(0, moneySub.length - 1); // 去最后一个,
      console.log("moneySub = " + moneySub);
      // return;

      var url = "../reservation/main?moneySub=" + moneySub + "&property_id=" + this.property_id + "&house_id=" + this.house_id + "&fabricObj=" + __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(this.fabricObj) + "&property_name=" + this.property_name + "&total=" + total;
      wx.navigateTo({ url: url });
    },

    /**
     * 选择一级
     * item 系列数据
     * index 栏目id
     * index2
     */
    getA: function getA(item, index, choose, index2, Lmid) {
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
          this.$set(this.fabriInit, choose.id, [item.id, item.material_id[0] ? item.material_id[0].id : 0]);
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
    hanldSeeInfoImg: function hanldSeeInfoImg(item) {
      console.log("查看详情");
      console.log(item);
      console.log(item.content);
      var content = encodeURIComponent(item.content);
      console.log(content);

      var url = "../seeDetails/main?content=" + content;
      wx.navigateTo({ url: url });
    },

    /**
     * 选择二级
     * 多选房间
     */
    checkboxChange: function checkboxChange(e, param) {
      console.log("选中房间");
      console.log(e.target.value);
      var value = [];
      for (var i in e.target.value) {
        value.push(this.fabri.room_type[e.target.value[i]].id);
      }

      var fabriInit = this.fabriInit[param.id];
      this.$set(this.fabriInit, param.id, [fabriInit[0], value]);
      console.log(this.fabriInit);
      this.RoomPrice[param.id] = this.getRoomPrice(e.target.value, param.id);
    },

    // 计算选中房间价格
    getRoomPrice: function getRoomPrice(value, item_id) {
      var price = 0;

      // let idx = 0;
      // for (let i in value) {
      //   idx = Number(value[i]) + 1;
      //   if (this.moneySub[idx] && this.moneySub[idx].width_meter) {
      //     price += parseFloat(this.moneySub[idx].width_meter);
      //   }
      // }

      for (var i in value) {
        price += parseFloat(this.room_type[value[i]].width_meter);
      }

      console.log("price=" + price.toFixed(2));

      return price.toFixed(2);
    },
    previewImg: function previewImg(item_picture) {
      wx.previewImage({
        urls: [item_picture] // 需要预览的图片http链接列表
      });
    },

    // 选择材质
    hanldSelect: function hanldSelect(item, index, itemId) {
      console.log("选择材质");
      var fabriInit = this.fabriInit[itemId];
      this.$set(this.fabriInit, itemId, [fabriInit[0], index]);
      console.log(this.fabriInit);
      wx.previewImage({
        urls: [item.material_cover] // 需要预览的图片http链接列表
      });
    },

    //获取面料
    getFabric: function getFabric() {
      var _this2 = this;

      var that = this;
      wx.request({
        method: "GET",
        url: that.$store.state.baseUrl + "/region/choose",
        data: {},
        header: {
          token: wx.getStorageSync("token")
        },
        success: function success(res) {
          that.fabri = res.data.data;

          // console.log(that.fabri); // 原始数据
          // 组装数据
          for (var i in that.fabri.choose) {
            for (var c in that.fabri.choose[i].deploy) {
              that.fabri.choose[i].deploy[c] = _this2.getAutoData(that.fabri.choose[i].deploy[c]);
            }

            // 初始化默认选择的数据结构
            _this2.getFabriInit(that.fabri.choose[i]);
          }

          var stringResult = that.room_type;
          var namestr = [];

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
          console.log(_this2.fabriInit);
          // 名称,价格
          console.log("namePrice");
          console.log(_this2.namePrice);
        }
      });
    },

    //联系客服
    getContact: function getContact() {
      var that = this;
      wx.request({
        method: "GET",
        url: that.$store.state.baseUrl + "/space/contact",
        data: {},
        header: {
          token: wx.getStorageSync("token")
        },
        success: function success(res) {
          that.contact = res.data.data.value;
          console.log(that.contact + "客服");
        }
      });
    },

    //拨打电话
    hanldPhone: function hanldPhone() {
      wx.makePhoneCall({
        phoneNumber: this.contact
      });
    }
  }
});

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "option-main",
    class: {
      optionArea: _vm.isIPhoneX
    }
  }, [_c('div', {
    staticClass: "option"
  }, [_c('span', {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("所需窗帘窗宽" + _vm._s(_vm.cloth_num) + "米同时所需配件" + _vm._s(_vm.cloth_num) + "米")])]), _vm._v(" "), _vm._l((_vm.fabri.choose), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "program-bg"
    }, [_c('div', {
      staticClass: "program-main"
    }, [_c('div', {
      staticClass: "program"
    }, [_c('p', {
      staticClass: "program-title"
    }, [_vm._v(_vm._s(item.choose_name))])], 1), _vm._v(" "), _c('ul', {
      staticClass: "tab-tilte clear_float"
    }, _vm._l((item.deploy), function(ind, Lmid) {
      return _c('li', {
        key: Lmid,
        class: {
          active: ind.id == _vm.fabriInit[item.id][0]
        },
        attrs: {
          "eventid": '0_' + index + '-' + Lmid
        },
        on: {
          "click": function($event) {
            _vm.getA(ind, item.id, item)
          }
        }
      }, [_vm._v("\n            " + _vm._s(ind.deploy_name) + "\n          ")])
    })), _vm._v(" "), _vm._l((item.deploy), function(w, index2) {
      return (_vm.indexs == index2) ? _c('div', {
        key: w,
        staticClass: "tab-content clear_float"
      }, [(_vm.namePrice[item.id] && _vm.namePrice[item.id].price != 0) ? _c('div', {
        staticClass: "tab-wrapper"
      }, [_c('div', {
        staticClass: "tab-series"
      }, [(index == 0) ? _c('div', [_c('span', [_vm._v("配件总价：")]), _vm._v(" "), _c('span', {
        staticClass: "tab-series-meter"
      }, [_vm._v("\n                  " + _vm._s(_vm.namePrice[item.id].price) + " *\n                  " + _vm._s(_vm.cloth_num) + "=\n                  " + _vm._s(((_vm.namePrice[item.id].price * _vm.cloth_num) * 100 | _vm.toFixed) / 100) + "\n                  元\n                ")])]) : (item.choose_room == 1) ? _c('div', {
        staticClass: "tab-select"
      }, [_c('div', {
        staticStyle: {
          "margin-bottom": "16px"
        }
      }, [_c('span', [_vm._v("系列选择：")]), _vm._v(" "), _c('span', {
        staticClass: "tab-series-series"
      }, [_vm._v(_vm._s(_vm.namePrice[item.id].deploy_name))]), _vm._v(" "), _c('span', {
        staticClass: "tab-series-meter"
      }, [_vm._v(_vm._s(_vm.namePrice[item.id].price) + "元")])]), _vm._v(" "), _c('checkbox-group', {
        attrs: {
          "eventid": '1_' + index + '-' + index2,
          "mpcomid": '0_' + index + '-' + index2
        },
        on: {
          "change": function($event) {
            _vm.checkboxChange($event, item)
          }
        }
      }, _vm._l((_vm.fabri.room_type), function(room, index3) {
        return _c('label', {
          key: index3,
          staticClass: "checkbox"
        }, [_c('checkbox', {
          staticStyle: {
            "padding-bottom": "5px"
          },
          attrs: {
            "value": index3,
            "checked": false,
            "color": _vm.color
          }
        }), _vm._v("\n                    " + _vm._s(room.room_name) + "\n                  ")], 1)
      }))], 1) : _c('div', [_c('span', [_vm._v("总价：")]), _vm._v(" "), _c('span', {
        staticClass: "tab-series-meter"
      }, [_vm._v(_vm._s(_vm.namePrice[item.id].price) + "*" + _vm._s(_vm.cloth_num) + "=" + _vm._s(((_vm.namePrice[item.id].price * _vm.cloth_num) * 100 | _vm.toFixed) / 100) + "元")])])]), _vm._v(" "), (item.choose_name == '选择配件' && item.choose_room == 1) ? _c('div', {
        staticClass: "tab-text"
      }, [_c('span', {
        staticClass: "tab-text-tilte"
      }, [_vm._v(_vm._s(_vm.namePrice[item.id].deploy_name))]), _vm._v(" "), _c('span', {
        staticClass: "tab-text-details",
        attrs: {
          "eventid": '2_' + index + '-' + index2
        },
        on: {
          "click": function($event) {
            _vm.hanldSeeInfoImg(_vm.namePrice[item.id])
          }
        }
      }, [_vm._v("查看详情")]), _vm._v(" "), _c('p', {
        staticClass: "tab-text-description",
        staticStyle: {
          "padding-left": "10px"
        }
      }, [_vm._v(_vm._s(_vm.namePrice[item.id].description))])], 1) : (item.choose_room == 2) ? _c('div', {
        staticClass: "tab-text"
      }, [_c('span', [(index == 0) ? _c('span', {
        staticClass: "tab-text-tilte"
      }, [_vm._v(_vm._s(_vm.namePrice[item.id].deploy_name))]) : _c('span', {
        staticClass: "tab-text-tilte"
      }, [_vm._v("专业窗帘安装")]), _vm._v(" "), _c('span', {
        staticClass: "tab-text-details",
        attrs: {
          "eventid": '3_' + index + '-' + index2
        },
        on: {
          "click": function($event) {
            _vm.hanldSeeInfoImg(_vm.namePrice[item.id])
          }
        }
      }, [_vm._v("查看详情")]), _vm._v(" "), _c('p', {
        staticClass: "tab-text-description",
        staticStyle: {
          "padding-left": "10px"
        }
      }, [_vm._v(_vm._s(_vm.namePrice[item.id].description))])], 1)]) : _c('div', {
        staticClass: "tab-text"
      }, [_c('span', {
        staticClass: "tab-text-tilte"
      }, [_vm._v("\n                布料总价：" + _vm._s(_vm.namePrice[item.id].price) + " x " + _vm._s(_vm.RoomPrice[item.id] ? _vm.RoomPrice[item.id] : 0) + " =\n                " + _vm._s(((_vm.namePrice[item.id].price * (_vm.RoomPrice[item.id] ? _vm.RoomPrice[item.id] : 0)) * 100 | _vm.toFixed) / 100) + "元\n              ")]), _vm._v(" "), _c('span', {
        staticClass: "tab-text-details",
        attrs: {
          "eventid": '4_' + index + '-' + index2
        },
        on: {
          "click": function($event) {
            _vm.hanldSeeInfoImg(_vm.namePrice[item.id])
          }
        }
      }, [_vm._v("查看详情")]), _vm._v(" "), _c('p', {
        staticClass: "tab-text-description",
        staticStyle: {
          "padding-left": "10px"
        }
      }, [_vm._v(_vm._s(_vm.namePrice[item.id].description))])], 1)]) : _vm._e()]) : _vm._e()
    })], 2)])
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "curtain-wrapper",
    class: {
      safeArea: _vm.isIPhoneX
    },
    staticStyle: {
      "border-top": "1px solid #f5f5f5"
    }
  }, [_c('div', {
    staticClass: "curtain-buttom",
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": function($event) {
        _vm.hanldToreServa()
      }
    }
  }, [_vm._v("下一步")]), _vm._v(" "), _c('div', {
    staticClass: "service",
    class: {
      serviceIPhone: _vm.isIPhoneX
    }
  }, [_c('div', {
    staticClass: "service-left"
  }, [_c('button', {
    staticClass: "online",
    attrs: {
      "open-type": "contact"
    }
  }, [_c('img', {
    staticClass: "service-img",
    attrs: {
      "src": "../../../static/images/kefu_no.png"
    }
  }), _vm._v(" "), _c('span', {
    staticStyle: {
      "margin": "0 5px"
    }
  }, [_vm._v("在线客服")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "service-right",
    attrs: {
      "eventid": '6'
    },
    on: {
      "click": function($event) {
        _vm.hanldPhone()
      }
    }
  }, [_c('img', {
    staticClass: "service-img",
    attrs: {
      "src": "../../../static/images/pohao_no.png"
    }
  }), _vm._v(" "), _c('span', {
    staticStyle: {
      "margin": "0 5px"
    }
  }, [_vm._v("拨打电话")])])])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-16bc50c3", esExports)
  }
}

/***/ })

},[195]);