require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([10],{

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(262);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_43136060_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(265);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(263)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-43136060"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_43136060_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/order/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-43136060", Component.options)
  } else {
    hotAPI.reload("data-v-43136060", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 263:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 264:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      orderapage: 1, //当前页数
      orderatotal_page: 0, //总页数
      ordera: [],
      nodata: "" //暂无订单信息
    };
  },
  onShow: function onShow() {
    this.getOrderList();
    this.getContact();
  },
  mounted: function mounted() {},

  methods: {
    hlandOrderDetail: function hlandOrderDetail(item) {
      console.log(item.id);
      var url = "../orderDetails/main?order_id=" + item.id;
      wx.navigateTo({ url: url });
    },

    //获取订单信息
    getOrderList: function getOrderList() {
      var that = this;
      wx.request({
        method: "GET",
        url: that.$store.state.baseUrl + "/order/order_list",
        data: {
          page: that.orderapage
        },
        header: {
          token: wx.getStorageSync("token")
        },
        success: function success(res) {
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

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "margin-bottom": "100px"
    }
  }, [_vm._l((_vm.ordera), function(item, index) {
    return _c('div', {
      key: item.id,
      staticClass: "order-wrapper",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.hlandOrderDetail(item)
        }
      }
    }, [_c('div', {
      staticClass: "order-left"
    }, [_c('div', {
      staticClass: "order-address"
    }, [_c('span', {
      staticClass: "order-name"
    }, [_vm._v(_vm._s(item.property_name))]), _vm._v(" "), _c('span', {
      staticClass: "line"
    }), _vm._v(" "), _c('span', {
      staticClass: "order-store"
    }, [_vm._v(_vm._s(item.build_num) + "栋-" + _vm._s(item.unit_num) + "单元-" + _vm._s(item.room_num) + "号")])]), _vm._v(" "), _c('div', {
      staticClass: "time"
    }, [_vm._v(_vm._s(item.created))])]), _vm._v(" "), _c('div', {
      staticClass: "order-left"
    }, [_c('p', {
      staticClass: "money"
    }, [_vm._v("¥" + _vm._s(item.price))]), _vm._v(" "), (item.status == 9) ? _c('p', {
      staticClass: "success"
    }, [_vm._v("已取消")]) : _vm._e(), _vm._v(" "), (item.status == 0) ? _c('p', {
      staticClass: "success"
    }, [_vm._v("未付款")]) : _vm._e(), _vm._v(" "), (item.status == 1) ? _c('p', {
      staticClass: "success"
    }, [_vm._v("已付款")]) : _vm._e(), _vm._v(" "), _c('span', {
      staticClass: "iconfont"
    }, [_vm._v("")])], 1)])
  }), _vm._v(" "), (_vm.ordera.length == 0) ? _c('div', {
    staticClass: "nodata",
    staticStyle: {
      "padding-top": "160rpx",
      "text-align": "center",
      "color": "#999999",
      "font-size": "14px"
    }
  }, [_vm._v(_vm._s(_vm.nodata))]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "service"
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
      "eventid": '1'
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
  }, [_vm._v("拨打电话")])])])], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-43136060", esExports)
  }
}

/***/ })

},[261]);