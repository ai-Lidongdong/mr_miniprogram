require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([15],{

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(215);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2361790c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(218);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(216)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2361790c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2361790c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/houseType/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2361790c", Component.options)
  } else {
    hotAPI.reload("data-v-2361790c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 216:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 217:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      buildInfo: "",
      property_id: "", //地区id
      property_name: "", //地区名称
      moneyId: 1, // 选择的户型id
      room_type: ""
    };
  },
  onUnload: function onUnload() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(this.$data, this.$options.data());
  },
  onShow: function onShow() {
    this.property_id = this.$root.$mp.query.property_id;
    this.property_name = this.$root.$mp.query.property_name;
    console.log(this.property_id + "地区id");
    console.log(this.property_name);
  },
  mounted: function mounted() {
    this.getBuilding();
    this.getContact();
  },

  methods: {
    hlandOption: function hlandOption(item_child) {
      this.moneyId = item_child.id;
      console.log(item_child.room_type + "item_child.room_type");
      var url = "../optionType/main?room_num=" + item_child.room_num + "&bathroom_num=" + item_child.bathroom_num + "&cloth_num=" + item_child.cloth_num + "&house_id=" + item_child.id + "&property_id=" + this.property_id + "&property_name=" + this.property_name + "&room_type=" + item_child.room_type;
      console.log('url', url);
      wx.navigateTo({ url: url });
    },

    //获取栋，户型
    getBuilding: function getBuilding() {
      var that = this;
      wx.request({
        method: "GET",
        url: that.$store.state.baseUrl + "/region/building",
        data: {
          property_id: that.property_id
        },
        header: {
          token: wx.getStorageSync("token")
        },
        success: function success(res) {
          that.buildInfo = res.data.data;
          if (that.buildInfo.length > 0 && that.buildInfo[0].house_type[0]) {
            that.moneyId = that.buildInfo[0].house_type[0].id;
          }
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

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "house",
    class: {
      houseIPhone: _vm.isIPhoneX
    }
  }, [_vm._l((_vm.buildInfo), function(item, index) {
    return _c('div', {
      key: item.id,
      staticClass: "house-wrapper"
    }, [_c('div', {
      staticClass: "content"
    }, [_c('div', {
      staticClass: "horizontal-cell"
    }, [_vm._v(_vm._s(_vm.property_name))]), _vm._v(" "), _c('div', {
      staticClass: "horizontal-cell separator"
    }, [_vm._v(_vm._s(item.build_name))])]), _vm._v(" "), _c('div', {
      staticClass: "house-text"
    }, [_vm._v("户型选择原则：例：1栋1601户型对应01户型")]), _vm._v(" "), _c('div', [(item.house_type) ? _c('ul', {
      staticClass: "clear_float"
    }, _vm._l((item.house_type), function(item_child, index2) {
      return _c('li', {
        key: index2,
        staticClass: "house-item",
        class: {
          active: _vm.moneyId == item_child.id
        },
        attrs: {
          "eventid": '0_' + index + '-' + index2
        },
        on: {
          "click": function($event) {
            _vm.hlandOption(item_child)
          }
        }
      }, [_c('div', {
        staticClass: "mould"
      }, [_vm._v(_vm._s(item_child.house_name))]), _vm._v(" "), _c('div', {
        staticClass: "number"
      }, [_vm._v(_vm._s(item_child.lowest_floor) + _vm._s(item_child.highest_floor))])])
    })) : _vm._e(), _vm._v(" "), (item.house_type == '') ? _c('ul', {
      staticClass: "clear_float"
    }, [_c('li', {
      staticClass: "house-item",
      staticStyle: {
        "border": "1px solid #b30000",
        "color": "#b30000",
        "width": "60%"
      }
    }, [_c('div', {
      staticClass: "mould"
    }, [_vm._v("01户型")]), _vm._v(" "), _c('div', {
      staticClass: "number"
    }, [_vm._v("入驻中，敬请等待")])])], 1) : _vm._e()], 1)])
  }), _vm._v(" "), (_vm.buildInfo.length == 0) ? _c('div', [_c('div', {
    staticClass: "house-wrapper"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "horizontal-cell"
  }, [_vm._v(_vm._s(_vm.property_name))]), _vm._v(" "), _c('div', {
    staticClass: "horizontal-cell separator"
  }, [_vm._v("此项目正在入驻中")])]), _vm._v(" "), _c('div', {
    staticClass: "house-text"
  }, [_vm._v("户型选择原则：例：1栋1601户型对应01户型")]), _vm._v(" "), _c('div', [_c('ul', {
    staticClass: "clear_float"
  }, [_c('li', {
    staticClass: "house-item",
    staticStyle: {
      "border": "1px solid #b30000",
      "color": "#b30000",
      "width": "60%"
    }
  }, [_c('div', {
    staticClass: "mould"
  }, [_vm._v("01户型")]), _vm._v(" "), _c('div', {
    staticClass: "number"
  }, [_vm._v("入驻中，敬请等待")])])], 1)], 1)])]) : _vm._e()], 2), _vm._v(" "), _c('div', {
    staticClass: "service-wrapper",
    class: {
      serviceWrapper: _vm.isIPhoneX
    }
  }, [_c('div', {
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
  }, [_vm._v("拨打电话")])])])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2361790c", esExports)
  }
}

/***/ })

},[214]);