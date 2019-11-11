require("./common/manifest.js")
require("./common/vendor.js")
global.webpackJsonpMpvue([1],{

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_js__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mpvue_weui_src_style_weui_css__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mpvue_weui_src_style_weui_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mpvue_weui_src_style_weui_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_iconfont_iconfont_css__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_iconfont_iconfont_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__static_iconfont_iconfont_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mixins__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_request_js__ = __webpack_require__(84);








__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$post = __WEBPACK_IMPORTED_MODULE_6__utils_request_js__["a" /* post */];

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_5__mixins__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = 'app';
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$store = __WEBPACK_IMPORTED_MODULE_2__store_js__["a" /* default */];

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.filter('toFixeds', function (value) {
    // if (!value) return 0;
    return 100.00;
});

//用户是否登录 未登录跳转到登录页面,登录后判断session_key(==token)是否失效，失效重新wxlogin()
var token = wx.getStorageSync('token'); //获取来自主页弹框登录的token
console.log('token:' + token);
if (!token) {
    var url = 'pages/authorize/main';
    wx.navigateTo({ url: url });
} else {}

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(77);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(76)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2a203f5b", Component.options)
  } else {
    hotAPI.reload("data-v-2a203f5b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 76:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({
  //  onLaunch: function() {
  //   const token = wx.getStorageSync('token');
  //   console.log(token)
  //   wx.login({
  //   //获取code 使用wx.login得到的登陆凭证，用于换取openid==token代替
  //   success(res) {
  //     if (res.code) {
  //       console.log(res.code+"code");
  //       //使用 wx.getSetting 获取用户当前的授权状态。
  //       wx.getSetting({
  //         success(res) {
  //           if (res.authSetting["scope.userInfo"]) {
  //              wx.switchTab({
  //             url: "../index/main",
  //           })
  //           }else {
  //           wx.redirectTo({
  //             url: "../authorize/main"
  //           })
  //           }
  //         }
  //       });
  //     }
  //   }
  // });
  //  },

  created: function created() {
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */

    var logs = void 0;
    if (global.mpvuePlatform === 'my') {
      logs = global.mpvue.getStorageSync({ key: 'logs' }).data || [];
      logs.unshift(Date.now());
      global.mpvue.setStorageSync({
        key: 'logs',
        data: logs
      });
    } else {
      logs = global.mpvue.getStorageSync('logs') || [];
      logs.unshift(Date.now());
      global.mpvue.setStorageSync('logs', logs);
    }
  },
  log: function log() {
    console.log('log at:' + Date.now());
  }
});

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(79);
// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

var store = new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
    state: {
        count: 0,
        baseUrl: "https://curtain-api.jimohu.com"
    },
    mutations: {
        increment: function increment(state) {
            var obj = state;
            obj.count += 1;
        },
        decrement: function decrement(state) {
            var obj = state;
            obj.count -= 1;
        }
    }
});

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),

/***/ 80:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 81:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__safe_area__ = __webpack_require__(83);

let MyPlugin = {};
MyPlugin.install = function (Vue) {
  // 添加全局方法或属性
  Vue.prototype.$isPage = function isPage() {
    return this.$mp && this.$mp.mpType === 'page'
  }
  // 注入组件
  Vue.mixin({
    data() {
      return {
        isIPhoneX: this.isIPhoneX,
      }
    },
    mounted() {
      if (this.$isPage()) {
        Object(__WEBPACK_IMPORTED_MODULE_0__safe_area__["a" /* default */])().then(({
          isIPhoneX,
          statusBarHeight
        }) => {
          this.isIPhoneX = isIPhoneX
        });
      }
    }
  })
}
/* harmony default export */ __webpack_exports__["a"] = (MyPlugin);

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getSafeArea;
let cache = null;
function getSafeArea() {
  return new Promise((resolve, reject) => {
    if (cache != null) {
      // 如果有缓存不行行调用
      resolve(cache);
    } else {
      // 获取系统信息
      wx.getSystemInfo({
        success: ({
          model,
          screenHeight,
          statusBarHeight
        }) => {
          const iphoneX = /iphone x/i.test(model);
          const iphoneNew = /iPhone11/i.test(model) && screenHeight === 812;
          cache = {
            isIPhoneX: iphoneX || iphoneNew,
            statusBarHeight
          };
          resolve(cache);
        },
        fail: reject
      });
    }
  });
}


/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = post;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);

var serverPath = 'https://curtain-api.jimohu.com/';
function post(request_type, url, body) {
  console.log('----her--->s');
  var promise = new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    wx.request({
      url: serverPath + url, // 拼接完整的 url
      data: body,
      method: request_type,
      header: {
        token: wx.getStorageSync("token")
      },
      success: function success(res) {
        console.log(url, res.data);
        resolve(res.data); // 把返回的数据传出去
      },
      fail: function fail(ret) {
        reject(ret); // 把错误信息传出去
      }
    });
  });
  return promise;
}

/***/ })

},[74]);