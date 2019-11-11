require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([2],{

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(305);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_19a7cacf_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(308);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(306)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-19a7cacf"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_19a7cacf_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/user/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-19a7cacf", Component.options)
  } else {
    hotAPI.reload("data-v-19a7cacf", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 306:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      latitude: "", //纬度
      longitude: "", //经度
      shop: ""
    };
  },
  onUnload: function onUnload() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(this.$data, this.$options.data());
  },
  onShow: function onShow() {
    this.getShopInfo();
    this.getContact();
  },

  methods: {
    toFixInfoPage: function toFixInfoPage(item) {
      var content = encodeURIComponent(item.content);
      var url = '../storeDetails/main?content=' + content;
      wx.navigateTo({ url: url });
    },
    hlandMap: function hlandMap(item) {
      console.log(item);
      var lat = parseFloat(item.lat);
      var lon = parseFloat(item.lon);
      console.log(lat);
      wx.openLocation({
        latitude: lat,
        longitude: lon,
        scale: 18,
        name: item.address
        // address:'民易科技'  
      });
    },

    //获取店铺信息
    getShopInfo: function getShopInfo() {
      var that = this;
      wx.request({
        method: "GET",
        url: that.$store.state.baseUrl + "/region/store",
        data: {},
        header: {
          "token": wx.getStorageSync('token')
        },
        success: function success(res) {
          console.log(res);
          that.shop = res.data.data;
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

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "margin-bottom": "100px"
    }
  }, [_vm._l((_vm.shop), function(item, index) {
    return _c('div', {
      key: item.id,
      staticClass: "order-wrapper",
      attrs: {
        "eventid": '1_' + index
      },
      on: {
        "click": function($event) {
          _vm.hlandMap(item)
        }
      }
    }, [_c('div', {
      staticClass: "order-left"
    }, [_c('div', {
      staticClass: "order-address"
    }, [_c('span', {
      staticClass: "order-name"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('span', {
      staticClass: "order-store",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.toFixInfoPage(item)
        }
      }
    }, [_vm._v("门店详情")])]), _vm._v(" "), _c('div', {
      staticClass: "time"
    }, [_c('span', {
      staticClass: "iconfont"
    }, [_vm._v("")]), _vm._v(_vm._s(item.address))])]), _vm._v(" "), _c('div', {
      staticClass: "order-right"
    }, [_c('p', {
      staticClass: "money"
    }, [_c('span', {
      staticClass: "iconfont"
    }, [_vm._v("")])]), _vm._v(" "), _c('span')], 1)])
  }), _vm._v(" "), _c('div', {
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
      "eventid": '2'
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
     require("vue-hot-reload-api").rerender("data-v-19a7cacf", esExports)
  }
}

/***/ })

},[304]);