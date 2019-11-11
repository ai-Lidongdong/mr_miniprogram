require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([9],{

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(267);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_73b22dd8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(270);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(268)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-73b22dd8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_73b22dd8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/orderDetails/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-73b22dd8", Component.options)
  } else {
    hotAPI.reload("data-v-73b22dd8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 268:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
      order_id: "", //订单id
      orderInfo: "",
      userInfo: "",
      bathroom_types: []
    };
  },
  onShow: function onShow() {
    this.order_id = this.$root.$mp.query.order_id;
  },
  mounted: function mounted() {
    this.getOrderInfo();
  },

  methods: {
    //方案查看详情
    hanldSeeInfoPro: function hanldSeeInfoPro(item) {
      console.log("查看详情");
      console.log(item);
      console.log(item.content);
      var content = encodeURIComponent(item.content);
      console.log(content);

      var url = "../optionDetails/main?content=" + content;
      wx.navigateTo({ url: url });
    },

    //查看详情
    hanldSeeInfoImg: function hanldSeeInfoImg(item) {
      console.log("查看详情");
      console.log(item);
      console.log(item.content);
      var content = encodeURIComponent(item.content);
      console.log(content);

      var url = "../seeDetails/main?content=" + content;
      wx.navigateTo({ url: url });
    },
    getFabriInit: function getFabriInit(choose) {
      // 选择房间
      if (choose.choose_room == 1) {
        // 多选 3,4
        var tmp = [];
        for (var i in this.orderInfo.room_type) {
          for (var n in this.orderInfo.choose_ids[choose.id][1]) {
            if (this.orderInfo.room_type[i].id == this.orderInfo.choose_ids[choose.id][1][n]) {
              tmp[n] = this.orderInfo.room_type[i];
            }
          }
        }
        choose["choose_rooms"] = tmp;
        var sumPrice = 0;
        if (this.orderInfo.choose_ids[choose.id][1]) {
          for (var _n in this.orderInfo.choose_ids[choose.id][1]) {
            for (var p in this.orderInfo.program) {
              if (this.orderInfo.program[p] && this.orderInfo.program[p].id == this.orderInfo.choose_ids[choose.id][1][_n]) {
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
          for (var _i in this.orderInfo.material) {
            if (choose.deploy.id == this.orderInfo.material[_i].id) {
              choose.deploy.id = this.orderInfo.material[_i];
              choose.deploy.id.material_cover = choose.deploy.id.material_cover.replace(/\\/g, "/");
            }
          }
          console.log("1 material_id");
          console.log(choose);
        } else if (choose.deploy.bathroom_type) {
          // 5
          this.bathroom_types[1] = "百叶帘";
          this.bathroom_types[2] = "贴膜";

          for (var _i2 in this.bathroom_types) {
            if (_i2 == this.orderInfo.choose_ids[choose.id][1]) {
              choose.deploy.bathroom_types = this.bathroom_types[_i2];
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
    getOrderInfo: function getOrderInfo() {
      var _this = this;

      var that = this;
      wx.request({
        method: "GET",
        url: that.$store.state.baseUrl + "/order/order_details",
        data: {
          order_id: that.order_id
        },
        header: {
          token: wx.getStorageSync("token")
        },
        success: function success(res) {
          that.orderInfo = res.data.data;
          that.userInfo = that.orderInfo.order_info;

          for (var i in that.orderInfo.choose) {
            // 初始化默认选择的数据结构
            _this.getFabriInit(that.orderInfo.choose[i]);
          }

          console.log("program");
          for (var _i3 in that.orderInfo.program) {
            if (that.orderInfo.program[_i3]) {
              for (var n in that.orderInfo.room_type) {
                if (that.orderInfo.room_type[n].id == that.orderInfo.program[_i3].room_type) {
                  that.orderInfo.program[_i3].room_types = that.orderInfo.room_type[n];
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
    hanldPaly: function hanldPaly() {
      var that = this;
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
        success: function success(res) {
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
            success: function success(res) {
              wx.navigateTo({ url: "../reservaSuccess/main" });
              that.setmobile();
              console.log(res + "支付接口");
            },
            fail: function fail(res) {
              console.log(res);
            }
          });
        }
      });
    },
    setmobile: function setmobile() {
      var that = this;
      wx.request({
        method: "POST",
        url: that.$store.state.baseUrl + "/order/pay_suc",
        data: {
          order_id: that.order_id
        },
        header: {
          token: wx.getStorageSync("token")
        },
        success: function success(res) {
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
    cancelOrder: function cancelOrder() {
      var that = this;
      wx.showModal({
        title: "温馨提示",
        content: "您确定要取消此订单吗？",
        success: function success(res) {
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
              success: function success(res) {
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
});

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    class: {
      optionArea: _vm.isIPhoneX
    },
    staticStyle: {
      "background": "#f5f5f5"
    }
  }, [_c('div', {
    staticClass: "house"
  }, [_c('div', {
    staticStyle: {
      "background": "#fff"
    }
  }, [_c('div', {
    staticClass: "house-wrapper"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "horizontal-cell"
  }, [_vm._v(_vm._s(_vm.userInfo.property_name))]), _vm._v(" "), _c('div', {
    staticClass: "horizontal-cell separator"
  }, [_vm._v(_vm._s(_vm.userInfo.build_num) + "栋-" + _vm._s(_vm.userInfo.unit_num) + "单元-" + _vm._s(_vm.userInfo.room_num) + "号")]), _vm._v(" "), (_vm.orderInfo.status == 9) ? _c('div', {
    staticClass: "horizontal-status"
  }, [_vm._v("已取消")]) : _vm._e(), _vm._v(" "), (_vm.orderInfo.status == 0) ? _c('div', {
    staticClass: "horizontal-status"
  }, [_vm._v("未付款")]) : _vm._e(), _vm._v(" "), (_vm.orderInfo.status == 1) ? _c('div', {
    staticClass: "horizontal-status"
  }, [_vm._v("已付款")]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "program-bg"
  }, [_c('div', {
    staticClass: "program-main"
  }, [_c('div', {
    staticClass: "program"
  }, [_c('p', {
    staticClass: "program-title"
  }, [_c('span', [_vm._v("所需窗帘窗宽" + _vm._s(_vm.orderInfo.house_type.cloth_num) + "米同时所需配件" + _vm._s(_vm.orderInfo.house_type.cloth_num) + "米")])])], 1), _vm._v(" "), _vm._l((_vm.orderInfo.program), function(program, index_program) {
    return (program) ? _c('div', {
      key: index_program
    }, [_c('ul', {
      staticClass: "tab-tilte clear_float"
    }, [_c('li', [_vm._v("\r\n                  " + _vm._s(program.room_types.name) + "：\r\n                  "), _vm._v(" "), _c('span', {
      staticStyle: {
        "color": "#000"
      }
    }, [_vm._v(" " + _vm._s(program.width_meter) + "M")])])], 1), _vm._v(" "), _c('div', {
      staticClass: "tab-content clear_float"
    }, [_c('div', {
      staticClass: "tab-wrapper"
    }, [_c('div', {
      staticClass: "tab-img"
    }, [_c('img', {
      attrs: {
        "src": program.cover
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "tab-multiple"
    }, [_c('span', {
      staticStyle: {
        "margin": "5px 5px 0px 5px",
        "display": "block"
      }
    }, [_vm._v("颜色选择：")]), _vm._v(" "), _c('ul', {
      staticClass: "tab-serise-ul clear_float"
    }, [_c('li', {
      staticClass: "tab-series-li",
      staticStyle: {
        "padding": "7px 15px"
      }
    }, [_c('span', [_vm._v("冷灰色")])]), _vm._v(" "), _c('li', {
      staticClass: "tab-series-li",
      staticStyle: {
        "padding": "7px 15px"
      }
    }, [_c('span', [_vm._v("冷灰色")])])], 1)], 1), _vm._v(" "), _c('div', {
      staticClass: "tab-multiple"
    }, [_c('span', {
      staticStyle: {
        "margin": "5px 5px 0px 5px",
        "display": "block"
      }
    }, [_vm._v("材质选择：")]), _vm._v(" "), _c('ul', {
      staticClass: "tab-serise-ul clear_float"
    }, [_c('li', {
      staticClass: "tab-series-li"
    }, [_c('span', [_c('img', {
      staticStyle: {
        "width": "10px",
        "height": "10px",
        "vertical-align": "middle"
      },
      attrs: {
        "src": "../../../static/images/chuang.jpg"
      }
    })]), _vm._v(" "), _c('span', {
      staticStyle: {
        "margin": "0 5px"
      }
    }, [_vm._v("高机密")])])], 1)], 1), _vm._v(" "), _c('div', {
      staticClass: "tab-text"
    }, [(_vm.moneyArrIdx[_vm.index]) ? _c('p', {
      staticClass: "tab-text-tilte"
    }, [_vm._v("全国统一价：3.12*320=998.4元")]) : _c('p', {
      staticClass: "tab-text-tilte"
    }, [_vm._v("全国统一价：3.12*320=998.4元")]), _vm._v(" "), _c('p', {
      staticClass: "tab-text-caption"
    }, [_vm._v("备注：为保证窗帘的美观，默认为两倍褶")]), _vm._v(" "), _c('span', {
      staticClass: "tab-text-details",
      attrs: {
        "eventid": '0_' + index_program
      },
      on: {
        "click": function($event) {
          _vm.hanldSeeInfoImg(_vm.moneyArr[_vm.item.id])
        }
      }
    }, [_vm._v("社区优惠价：187.2元")])], 1)])])], 1) : _vm._e()
  })], 2)])]), _vm._v(" "), _c('div', {
    staticClass: "program-bg"
  }, [_c('div', {
    staticClass: "program-main"
  }, [_c('div', {
    staticClass: "program"
  }, [_c('p', {
    staticClass: "program-title"
  }, [_vm._v("面料选择：")])], 1), _vm._v(" "), _vm._l((_vm.orderInfo.choose), function(choose, index_choose) {
    return _c('div', {
      key: index_choose
    }, [_c('ul', {
      staticClass: "tab-tilte clear_float"
    }, [_c('li', [_vm._v("\r\n                " + _vm._s(choose.choose_name) + "：\r\n                "), _c('span', {
      staticStyle: {
        "color": "#B30000"
      }
    }, [_vm._v(_vm._s(choose.deploy.deploy_name))])])], 1), _vm._v(" "), _c('div', {
      staticClass: "tab-content clear_float"
    }, [_c('div', {
      staticClass: "tab-wrapper"
    }, [_c('div', {
      staticClass: "tab-series"
    }, [(choose.choose_room == 1) ? _c('div', [_c('div', [_vm._v("\r\n                      系列选择：\r\n                      "), _c('span', {
      staticClass: "tab-series-series"
    }, [_vm._v(_vm._s(choose.deploy.deploy_name))]), _vm._v(" "), _c('span', {
      staticClass: "tab-series-meter"
    }, [_vm._v(_vm._s(choose.deploy.price) + "元/米")])]), _vm._v(" "), _vm._l((choose.choose_rooms), function(choose_rooms, choose_rooms_index) {
      return (choose_rooms) ? _c('div', {
        key: choose_rooms_index
      }, [_c('div', {
        staticClass: "tab-select"
      }, [_c('checkbox-group', {
        attrs: {
          "eventid": '1_' + index_choose + '-' + choose_rooms_index,
          "mpcomid": '0_' + index_choose + '-' + choose_rooms_index
        },
        on: {
          "change": function($event) {
            _vm.checkboxChange($event, _vm.item)
          }
        }
      }, [_c('label', {
        staticClass: "checkbox"
      }, [_c('checkbox', {
        staticStyle: {
          "padding-bottom": "5px"
        },
        attrs: {
          "value": _vm.index3,
          "checked": true,
          "color": _vm.color
        }
      }), _vm._v("\r\n                            " + _vm._s(choose_rooms.name) + "\r\n                          ")], 1)], 1)], 1)]) : _vm._e()
    })], 2) : (choose.deploy.material_id) ? _c('div', [_c('div', [_vm._v("\r\n                      系列选择：\r\n                      "), _c('span', {
      staticClass: "tab-series-series"
    }, [_vm._v(_vm._s(choose.deploy.deploy_name))]), _vm._v(" "), _c('span', {
      staticClass: "tab-series-meter"
    }, [_vm._v(_vm._s(choose.deploy.price) + "元/米")])]), _vm._v(" "), _c('div', {
      staticClass: "tab-series-main"
    }, [_c('span', [_vm._v("材质选择：")]), _vm._v(" "), _c('ul', {
      staticClass: "tab-serise-ul clear_float"
    }, [_c('li', {
      staticClass: "tab-series-li"
    }, [_c('span', [_c('img', {
      staticStyle: {
        "width": "10px",
        "height": "10px",
        "vertical-align": "middle",
        "margin": "0 6px"
      },
      attrs: {
        "src": choose.deploy.id.material_cover
      }
    })]), _vm._v(" "), _c('span', [_vm._v(_vm._s(choose.deploy.id.material_name))])])], 1)], 1)]) : (choose.deploy.bathroom_type) ? _c('div', [_c('div', [_vm._v("\r\n                      系列选择：" + _vm._s(choose.deploy.bathroom_type) + "\r\n                      "), _c('span', {
      staticClass: "tab-series-series"
    }, [_vm._v(_vm._s(choose.deploy.deploy_name))]), _vm._v(" "), _c('span', {
      staticClass: "tab-series-meter"
    }, [_vm._v(_vm._s(choose.deploy.price) + "元/米")])]), _vm._v(" "), _c('div', {
      staticClass: "tab-series-main"
    }, [_c('span', [_vm._v("材质选择：")]), _vm._v(" "), _c('ul', {
      staticClass: "tab-serise-ul clear_float"
    }, [_c('li', {
      staticClass: "tab-series-li"
    }, [_c('span'), _vm._v(" "), _c('span', [_vm._v(_vm._s(choose.deploy.bathroom_types))])])], 1)], 1)]) : _vm._e(), _vm._v(" "), (choose.choose_name == '选择配件') ? _c('div', [_c('div', [_vm._v("\r\n                      总价：\r\n                      "), _c('span', {
      staticClass: "tab-series-meter"
    }, [_vm._v(_vm._s(choose.deploy.price) + "x" + _vm._s(_vm.orderInfo.house_type.cloth_num) + "=" + _vm._s(((choose.deploy.price * (_vm.orderInfo.house_type.cloth_num)) * 100 | _vm.toFixed) / 100) + "元")]), _vm._v(" "), _c('p', {
      staticClass: "tab-text-description",
      staticStyle: {
        "padding-left": "0"
      }
    }, [_vm._v(_vm._s(choose.deploy ? choose.deploy.description : '-'))])], 1)]) : _vm._e(), _vm._v(" "), (choose.choose_name == '安装公司') ? _c('div', [_c('div', [_vm._v("\r\n                      总价：\r\n                      "), _c('span', {
      staticClass: "tab-series-meter"
    }, [_vm._v(_vm._s(choose.deploy.price) + "x" + _vm._s(_vm.orderInfo.house_type.cloth_num) + "=" + _vm._s(((choose.deploy.price * _vm.orderInfo.house_type.cloth_num) * 100 | _vm.toFixed) / 100) + "元")]), _vm._v(" "), _c('p', {
      staticClass: "tab-text-description",
      staticStyle: {
        "padding-left": "0"
      }
    }, [_vm._v(_vm._s(choose.deploy ? choose.deploy.description : '-'))])], 1)]) : _vm._e()]), _vm._v(" "), (choose.choose_room == 1) ? _c('div', {
      staticClass: "tab-text"
    }, [_c('span', {
      staticClass: "tab-text-tilte"
    }, [_vm._v("布料总价：" + _vm._s(choose.deploy.price) + "x" + _vm._s(choose.choose_rooms_price) + "=" + _vm._s(((choose.deploy.price * choose.choose_rooms_price) * 100 | _vm.toFixed) / 100) + "元")]), _vm._v(" "), _c('span', {
      staticClass: "tab-text-details",
      attrs: {
        "eventid": '2_' + index_choose
      },
      on: {
        "click": function($event) {
          _vm.hanldSeeInfoImg(choose.deploy)
        }
      }
    }, [_vm._v("查看详情")]), _vm._v(" "), _c('p', {
      staticClass: "tab-text-description",
      staticStyle: {
        "padding-left": "10px"
      }
    }, [_vm._v(_vm._s(choose.deploy ? choose.deploy.description : '-'))])], 1) : (choose.deploy.material_id) ? _c('div', {
      staticClass: "tab-text"
    }, [_c('span', {
      staticClass: "tab-text-tilte"
    }, [_vm._v("布料总价：" + _vm._s(choose.deploy.price) + "x" + _vm._s(_vm.orderInfo.house_type.cloth_num) + "=" + _vm._s(((choose.deploy.price * _vm.orderInfo.house_type.cloth_num) * 100 | _vm.toFixed) / 100) + "元")]), _vm._v(" "), _c('span', {
      staticClass: "tab-text-details",
      attrs: {
        "eventid": '3_' + index_choose
      },
      on: {
        "click": function($event) {
          _vm.hanldSeeInfoImg(choose.deploy)
        }
      }
    }, [_vm._v("查看详情")]), _vm._v(" "), _c('p', {
      staticClass: "tab-text-description",
      staticStyle: {
        "padding-left": "10px"
      }
    }, [_vm._v(_vm._s(choose.deploy ? choose.deploy.description : '-'))])], 1) : (choose.deploy.bathroom_type) ? _c('div', {
      staticClass: "tab-text"
    }, [_c('span', {
      staticClass: "tab-text-tilte"
    }, [_vm._v("配件总价：" + _vm._s(choose.deploy.price) + "x" + _vm._s(_vm.orderInfo.house_type.bathroom_num) + "=" + _vm._s(((choose.deploy.price * _vm.orderInfo.house_type.bathroom_num) * 100 | _vm.toFixed) / 100) + "元")]), _vm._v(" "), _c('span', {
      staticClass: "tab-text-details",
      attrs: {
        "eventid": '4_' + index_choose
      },
      on: {
        "click": function($event) {
          _vm.hanldSeeInfoImg(choose.deploy)
        }
      }
    }, [_vm._v("查看详情")])]) : _c('div', {
      staticClass: "tab-text"
    }, [_c('span', {
      staticClass: "tab-text-tilte"
    }, [_vm._v(_vm._s(choose.deploy.deploy_name))]), _vm._v(" "), _c('span', {
      staticClass: "tab-text-details",
      attrs: {
        "eventid": '5_' + index_choose
      },
      on: {
        "click": function($event) {
          _vm.hanldSeeInfoImg(choose.deploy)
        }
      }
    }, [_vm._v("查看详情")])])])])], 1)
  })], 2)]), _vm._v(" "), _c('div', {
    staticClass: "order-info"
  }, [_c('div', {
    staticClass: "info-wrapper"
  }, [_c('p', [_vm._v("订单信息：")]), _vm._v(" "), _c('p', [_vm._v("订单编号：" + _vm._s(_vm.orderInfo.order_no))]), _vm._v(" "), _c('p', [_vm._v("预约时间：" + _vm._s(_vm.orderInfo.created))]), _vm._v(" "), _c('p', [_vm._v("用户：" + _vm._s(_vm.userInfo.username))]), _vm._v(" "), _c('p', [_vm._v("手机：" + _vm._s(_vm.userInfo.mobile))])], 1)])])]), _vm._v(" "), (_vm.orderInfo.status == 0) ? _c('div', {
    staticClass: "curtain-wrapper",
    class: {
      safeArea: _vm.isIPhoneX
    },
    staticStyle: {
      "border-top": "1px solid #f5f5f5"
    }
  }, [_c('div', {
    staticClass: "order-buttom"
  }, [_c('div', {
    staticClass: "order-cancel",
    attrs: {
      "eventid": '6'
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.cancelOrder()
      }
    }
  }, [_vm._v("取消订单")]), _vm._v(" "), _c('div', {
    staticClass: "order-pay",
    attrs: {
      "eventid": '7'
    },
    on: {
      "click": function($event) {
        _vm.hanldPaly()
      }
    }
  }, [_vm._v("立即支付")])])]) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-73b22dd8", esExports)
  }
}

/***/ })

},[266]);