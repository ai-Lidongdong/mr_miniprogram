require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([14],{

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(220);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1dd3ece4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(242);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(221)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1dd3ece4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1dd3ece4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1dd3ece4", Component.options)
  } else {
    hotAPI.reload("data-v-1dd3ece4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 221:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      address: "",
      userinfo: {},
      token: "",
      code: "",
      keyWord: "",
      list: [],
      tiemr: null,
      info: "",
      hostCities: [],
      letter: "",
      moneyId: 1, // 选择的区域id
      contact: "", //客服
      selectArea: false, //选择地区
      categoryNoData: false, //品类暂无匹配到数据
      category: true //品类
    };
  },
  onShow: function onShow() {
    console.log('2.9', 2.9.toFixed());
    this.selectArea = true;
    this.category = true;
  },
  mounted: function mounted() {
    this.token = wx.getStorageSync("token");
    console.log(this.token + "indexToken");
    this.getFloorInfo();
    this.getContact();
  },
  onUnload: function onUnload() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()(this.$data, this.$options.data());
  },

  methods: {
    //品类跳转显示页面
    hanldCategory: function hanldCategory() {
      this.selectArea = true;
      this.category = false;
    },


    //拨打电话
    hanldPhone: function hanldPhone() {
      wx.makePhoneCall({
        phoneNumber: this.contact
      });
    },

    //跳转页面
    hanldToHouse: function hanldToHouse(item) {
      this.moneyId = item.id;
      var url = "../houseType/main?property_name=" + item.property_name + "&property_id=" + item.id;
      wx.navigateTo({ url: url });
      this.keyWord = "";
    },

    //授权
    getVxUserInfo: function getVxUserInfo() {
      var that = this;
      //用户登录
      wx.login({
        //获取code 使用wx.login得到的登陆凭证，用于换取openid==token代替
        success: function success(res) {
          if (res.code) {
            console.log(res.code);
            console.log("----》");
            that.code = res.code;
            //使用 wx.getSetting 获取用户当前的授权状态。
            wx.getSetting({
              success: function success(res) {
                if (res.authSetting["scope.userInfo"]) {
                  // 如果已经授权，直接调用 getUserInfo 获取用户信息
                  wx.getUserInfo({
                    success: function success(res) {
                      //成功之后，将获取到的用户信息赋值给userinfo
                      console.log(that.userinfo);
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
                          //console.log(res.data.data.token);
                          wx.setStorageSync("tokesn", res.data.data.token); //成功之后存入token
                          that.token = res.data.data.token;
                          that.saveUserData(res);
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
          //console.log(res);
          _this.getUser();
        }
      });
    },

    //获取用户信息
    getUser: function getUser() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this2.$post("GET", "user/info", {});

              case 2:
                res = _context.sent;

                console.log('获取用户信息-》', res);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }))();
    },

    //获取区域，楼盘信息
    getFloorInfo: function getFloorInfo() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this3.$post("GET", "region/region", {});

              case 2:
                res = _context2.sent;

                _this3.address = res.data;
                console.log('---');
                console.log(_this3.address);
                if (res.data.data[0].property[0].id) {
                  _this3.moneyId = res.data[0].property[0].id;
                }

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this3);
      }))();
    },


    //联系客服
    getContact: function getContact() {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this4.$post("GET", "space/contact", {});

              case 2:
                res = _context3.sent;

                _this4.contact = res.data.value;
                console.log('hhh');

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, _this4);
      }))();
    }
  },
  watch: {
    keyWord: function keyWord() {
      var _this5 = this;

      if (this.tiemr) {
        clearTimeout(this.timer);
      }
      if (!this.keyWord) {
        this.list = [];
        return;
      }
      this.tiemr = setTimeout(function () {
        var result = [];
        for (var i in _this5.address) {
          _this5.address[i].property.forEach(function (value) {
            if (value.property_name.indexOf(_this5.keyWord) > -1) {
              result.push(value);
            }
          });
        }
        _this5.list = result;
      }, 10); //当keyWord发生改变,箭头函数就会执行
    }
  },
  computed: {
    hasNoData: function hasNoData() {
      return !this.list.lenght;
    },
    seachNoData: function seachNoData() {
      if (!this.keyWord) {
        return this.seachNoData = true;
      } else {
        return this.seachNoData = false;
      }
    }
  }
});

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "search-body"
  }, [(_vm.selectArea) ? _c('div', [_c('div', {
    staticClass: "search"
  }, [_c('img', {
    staticClass: "search-img",
    attrs: {
      "src": "../../../static/images/seach.png"
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.keyWord),
      expression: "keyWord"
    }],
    staticClass: "search-input",
    attrs: {
      "type": "text",
      "placeholder": "请搜索关键字",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.keyWord)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.keyWord = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "recommend-wrapper"
  }, _vm._l((_vm.address), function(goods, index) {
    return _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.seachNoData),
        expression: "seachNoData"
      }],
      key: index,
      staticClass: "recommend"
    }, [_c('p', [_c('span', {
      staticClass: "iconfont"
    }, [_vm._v(_vm._s(goods.name))])]), _vm._v(" "), _c('ul', {
      staticClass: "clear_float"
    }, _vm._l((goods.property), function(item, index2) {
      return _c('li', {
        key: index2,
        staticClass: "recommend-item",
        class: {
          active: _vm.moneyId == item.id
        },
        attrs: {
          "eventid": '1_' + index + '-' + index2
        },
        on: {
          "click": function($event) {
            _vm.hanldToHouse(item)
          }
        }
      }, [_vm._v(_vm._s(item.property_name))])
    }))], 1)
  })), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.keyWord),
      expression: "keyWord"
    }],
    ref: "search",
    staticClass: "search-content"
  }, [_c('ul', {
    staticClass: "goods clear_float"
  }, [_vm._l((_vm.list), function(item, index) {
    return _c('li', {
      key: item.id,
      staticClass: "search-item border-bottom",
      class: {
        active: _vm.moneyId == item.id
      },
      attrs: {
        "eventid": '2_' + index
      },
      on: {
        "click": function($event) {
          _vm.hanldToHouse(item)
        }
      }
    }, [_vm._v(_vm._s(item.property_name))])
  }), _vm._v(" "), _c('li', {
    staticClass: "search-item border-bottom"
  }, [_vm._v("没有找到匹配数据")])], 2)], 1)]) : _vm._e(), _vm._v(" "), (_vm.category) ? _c('div', [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "recommend-wrapper"
  }, [_c('div', {
    staticClass: "recommend"
  }, [_c('p', [_c('span', {
    staticClass: "iconfont"
  }, [_vm._v("选择品类")])]), _vm._v(" "), _c('ul', {
    staticClass: "clear_float"
  }, [_c('li', {
    staticClass: "recommend-item recommend_active",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.hanldCategory()
      }
    }
  }, [_vm._v("窗帘")]), _vm._v(" "), _c('li', {
    staticClass: "recommend-item"
  }, [_vm._v("暂无开放")])], 1)], 1)]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.categoryNoData),
      expression: "categoryNoData"
    }],
    staticClass: "search-content"
  }, [_c('ul', {
    staticClass: "goods clear_float"
  }, [_c('li', {
    staticClass: "search-item border-bottom"
  }), _vm._v(" "), _c('li', {
    staticClass: "search-item border-bottom"
  }, [_vm._v("没有找到匹配数据")])], 1)], 1)]) : _vm._e(), _vm._v(" "), _c('div', {
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
      "eventid": '4'
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
  }, [_vm._v("拨打电话")])])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "search"
  }, [_c('img', {
    staticClass: "search-img",
    attrs: {
      "src": "../../../static/images/seach.png"
    }
  }), _vm._v(" "), _c('input', {
    staticClass: "search-input",
    attrs: {
      "type": "text",
      "placeholder": "请搜索关键字"
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1dd3ece4", esExports)
  }
}

/***/ })

},[219]);