require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([19],{

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(181);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7c8587bb_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(184);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(182)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7c8587bb"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7c8587bb_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/authorize/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7c8587bb", Component.options)
  } else {
    hotAPI.reload("data-v-7c8587bb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 182:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 183:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      userinfo: {},
      token: "",
      code: "",
      show: false
    };
  },
  onShow: function onShow() {
    this.token = wx.getStorageSync("token");
    this.getVxUserInfo();
  },
  onUnload: function onUnload() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(this.$data, this.$options.data());
  },

  methods: {
    //授权
    getVxUserInfo: function getVxUserInfo() {
      //wx.checkSession检查登录态是否过期
      var that = this;
      wx.checkSession({
        success: function success() {
          //session_key 未过期
          console.log("success token:" + that.token);
          if (that.token) {
            wx.switchTab({
              url: "../index/main"
            });
          } else {
            that.show = true;
          }
        },
        fail: function fail() {
          // session_key 已过期
          console.log("fail");
          that.show = true;
        }
      });
    },
    getLogin: function getLogin() {
      var that = this;
      wx.login({
        //获取code 使用wx.login得到的登陆凭证，用于换取openid==token代替
        success: function success(res) {
          if (res.code) {
            that.code = res.code;
            //使用 wx.getSetting 获取用户当前的授权状态。
            wx.getSetting({
              success: function success(res) {
                if (res.authSetting['scope.userInfo']) {
                  //已授权=>getUserInfo
                  wx.getUserInfo({
                    success: function success(res) {
                      //console.log(res)
                      that.userinfo.encryptedData = res.encryptedData;
                      that.userinfo.iv = res.iv;
                      //发起网络请求
                      wx.request({
                        method: "POST",
                        url: that.$store.state.baseUrl + "/user/login",
                        data: {
                          code: that.code
                        },
                        header: {
                          "content-type": "application/json" // 默认值
                        },
                        success: function success(res) {
                          console.log('res', res);
                          wx.setStorageSync("token", 'mZgHOWBmUXcDk6TfpPTJ1w=='); //成功之后存入token
                          wx.setStorageSync("token", res.data.data.token); //成功之后存入token
                          that.token = res.data.data.token;
                          that.saveUserData(res);
                          wx.switchTab({
                            url: "../index/main"
                          });
                        }
                      });
                    },
                    fail: function fail(err) {
                      console.log(err);
                    }
                  });
                }
              }
            });
          } else {
            console.log("登录失败！" + res.errMsg);
          }
        }
      });
    },

    //绑定用户数据接口
    saveUserData: function saveUserData(res) {
      var _this = this;

      var that = this;
      console.log(that.userinfo);
      wx.request({
        method: "POST",
        url: that.$store.state.baseUrl + "/user/save",
        data: {
          iv: that.userinfo.iv,
          data: that.userinfo.encryptedData
        },
        header: {
          token: res.data.data.token
        },
        success: function success(res) {
          console.log("res");
          console.log(res);
          wx.switchTab({
            url: "/pages/index/main"
          });
          _this.getUser();
        }
      });
    },

    //获取用户信息
    getUser: function getUser() {
      var that = this;
      wx.request({
        method: "GET",
        url: that.$store.state.baseUrl + "/user/info",
        data: {},
        header: {
          token: wx.getStorageSync("token")
        },
        success: function success(res) {
          console.log(res);
        }
      });
    }
  }
});

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "search-body"
  }, [(_vm.show) ? _c('div', {
    staticClass: "dialog-container"
  }, [_c('div', {
    staticClass: "dialog-mask"
  }), _vm._v(" "), _c('div', {
    staticClass: "dialog-info"
  }, [_c('div', {
    staticClass: "dialog-title"
  }, [_vm._v("登陆提示")]), _vm._v(" "), _c('div', {
    staticClass: "dialog-content"
  }, [_vm._v("为了您能有更好的体验，请点击授权😊")]), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer"
  }, [_c('button', {
    staticClass: "dialog-btn",
    attrs: {
      "open-type": "getUserInfo",
      "eventid": '0'
    },
    on: {
      "getuserinfo": _vm.getLogin
    }
  }, [_vm._v("点击授权")])], 1)])]) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7c8587bb", esExports)
  }
}

/***/ })

},[180]);