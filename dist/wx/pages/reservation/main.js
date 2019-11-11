require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([7],{

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(277);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4919621e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(280);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(278)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4919621e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4919621e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/reservation/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4919621e", Component.options)
  } else {
    hotAPI.reload("data-v-4919621e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 278:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 279:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      wrap: "",
      color: "#B30000",
      price: 300, //类型价格
      build_num: "", //几栋
      unit_num: "", //单元
      room_num: "", //房间号
      username: "", //用户名称
      mobile: "", //手机号
      property_id: "", //小区id
      house_id: "", //户型id
      moneySub: "", //方案ids
      items: [{ value: '1' }, { value: '2' }],
      feeNumber: "", //预约房
      type: '', //选择类型
      fabricObj: "", //小区名称
      property_name: "",
      order_id: "", //订单id
      total: "", //总价
      count: "",
      contact: "",
      content: "", //详情
      advertising: "", //广告
      advertContent: "" //广告内容
    };
  },

  computed: {
    // 验证手机号
    rightMobile: function rightMobile() {
      var res = {};
      if (!this.mobile) {
        res.status = false;
        res.msg = '请输入手机号码';
      } else if (!/^1[3456789]{1}\d{9}$/gi.test(this.mobile)) {
        res.status = false;
        res.msg = '手机号格式不正确';
      } else {
        res.status = true;
      }
      return res;
    }
  },
  onShow: function onShow() {
    this.moneySub = this.$root.$mp.query.moneySub;
    this.property_id = this.$root.$mp.query.property_id;
    this.house_id = this.$root.$mp.query.house_id;
    this.fabricObj = this.$root.$mp.query.fabricObj;
    this.property_name = this.$root.$mp.query.property_name;
    this.total = this.$root.$mp.query.total;
    console.log("面料");
    console.log(this.total + "总价");
    console.log(this.fabricObj);
    console.log(this.house_id + "house_id");
    console.log(this.moneySub + "moneySub_id");
    console.log(this.property_id + "property_id");
  },
  mounted: function mounted() {
    this.getShopInfo();
    this.getContact();
    this.getAdvertising();
  },
  onUnload: function onUnload() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(this.$data, this.$options.data());
  },

  methods: {
    radioChange: function radioChange(e) {
      console.log('radio发生change事件，携带value值为：', e.target.value);
      this.type = e.target.value;
      if (this.type == 1) {
        this.count = this.feeNumber;
      } else if (this.type == 2) {
        this.count = this.total;
      }
      console.log(e);
    },

    //广告详情
    advertisingDetails: function advertisingDetails() {
      console.log("查看详情");
      var content = encodeURIComponent(this.advertContent);
      console.log(content);

      var url = "../advertisingDetails/main?content=" + content;
      wx.navigateTo({ url: url });
    },

    //预约房价格
    getShopInfo: function getShopInfo() {
      var that = this;
      wx.request({
        method: "GET",
        url: that.$store.state.baseUrl + "/space/reservation",
        data: {},
        header: {
          "token": wx.getStorageSync('token')
        },
        success: function success(res) {
          console.log(res);
          that.feeNumber = res.data.data.value;
        }
      });
    },

    //获取订单详情
    hanldSuccess: function hanldSuccess() {
      var _this = this;

      var that = this;
      if (!this.build_num) {
        wx.showToast({
          // 提示内容
          title: "请输入几栋",
          icon: "none"
        });
      } else if (!this.unit_num) {
        wx.showToast({
          // 提示内容
          title: "请输入单元",
          icon: "none"
        });
      } else if (!this.room_num) {
        wx.showToast({
          // 提示内容
          title: "请输入房间号",
          icon: "none"
        });
      } else if (!this.username) {
        wx.showToast({
          // 提示内容
          title: "请输入用户名",
          icon: "none"
        });
      } else if (!this.rightMobile.status) {
        wx.showToast({
          // 提示内容
          title: "请输入正确的手机号",
          icon: "none"
        });
      } else if (!this.price) {
        wx.showToast({
          // 提示内容
          title: "请选择价格",
          icon: "none"
        });
      } else if (this.type.length == 0) {
        wx.showToast({
          // 提示内容
          title: "请选择支付方式",
          icon: "none"
        });
      } else {
        wx.request({
          method: "POST",
          url: that.$store.state.baseUrl + "/order/order_add",
          data: {
            price: that.count, //类型价格
            type: that.type, //支付类型
            build_num: that.build_num, //几栋
            unit_num: that.unit_num, //单元
            room_num: that.room_num, //房间号
            username: that.username, //用户名称
            mobile: that.mobile, //手机号
            property_id: that.property_id, //小区id
            house_id: that.house_id, //户型id
            program_id: that.moneySub, //方案ids
            choose_ids: that.fabricObj //选择配置json格式
          },
          header: {
            "token": wx.getStorageSync('token')
          },

          success: function success(res) {
            if (res.data.code == 0) {
              _this.order_id = res.data.data.order_id;
              that.hanldPaly();
            } else {
              wx.showToast({
                title: res.data.msg,
                icon: "none",
                duration: 2000
              });
            }
          }
        });
      }
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
              that.setmobile();
              var url = '../reservaSuccess/main';
              wx.navigateTo({ url: url });
              console.log(res + "支付接口");
            },
            fail: function fail(res) {
              var url = '../order/main';
              wx.switchTab({ url: url });
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
          "token": wx.getStorageSync('token')
        },
        success: function success(res) {
          wx.showToast({
            title: res.data.msg,
            icon: "none",
            duration: 1000
          });
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

    //广告
    getAdvertising: function getAdvertising() {
      var that = this;
      wx.request({
        method: "GET",
        url: that.$store.state.baseUrl + "/space/ad",
        data: {},
        header: {
          token: wx.getStorageSync("token")
        },
        success: function success(res) {
          that.advertising = res.data.data[0].cover;
          that.advertContent = res.data.data[0].content;
          console.log(that.advertising);
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

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "reservation"
  }, [_c('div', {
    ref: "mybox",
    staticClass: "submit-input",
    attrs: {
      "id": "wrap"
    }
  }, [_c('div', [_vm._v("项目："), _c('span', {
    staticClass: "submit-title"
  }, [_vm._v(_vm._s(_vm.property_name))])]), _vm._v(" "), _c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "box-number"
  }, [_vm._v("房号：")]), _vm._v(" "), _c('div', {
    staticClass: "box-item",
    staticStyle: {
      "width": "30%"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.build_num),
      expression: "build_num"
    }],
    staticClass: "room-input",
    attrs: {
      "type": "text",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.build_num)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.build_num = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', [_vm._v("栋")])]), _vm._v(" "), _c('div', {
    staticClass: "box-item",
    staticStyle: {
      "width": "35%"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.unit_num),
      expression: "unit_num"
    }],
    staticClass: "room-input",
    attrs: {
      "type": "text",
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.unit_num)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.unit_num = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', [_vm._v("单元")])]), _vm._v(" "), _c('div', {
    staticClass: "box-item",
    staticStyle: {
      "width": "30%"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.room_num),
      expression: "room_num"
    }],
    staticClass: "room-input",
    attrs: {
      "type": "text",
      "eventid": '2'
    },
    domProps: {
      "value": (_vm.room_num)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.room_num = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', [_vm._v("号")])])]), _vm._v(" "), _c('div', {
    staticClass: "box-user"
  }, [_vm._v("姓名：\n     "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.username),
      expression: "username"
    }],
    staticClass: "box-user-input",
    attrs: {
      "type": "text",
      "eventid": '3'
    },
    domProps: {
      "value": (_vm.username)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.username = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "box-user"
  }, [_vm._v("手机：\n     "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.mobile),
      expression: "mobile"
    }],
    staticClass: "box-user-input",
    attrs: {
      "type": "text",
      "eventid": '4'
    },
    domProps: {
      "value": (_vm.mobile)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.mobile = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "background": "#fff",
      "padding": "5px 0",
      "margin": "10px 0"
    }
  }, [_c('radio-group', {
    staticClass: "radio-group",
    attrs: {
      "eventid": '5',
      "mpcomid": '0'
    },
    on: {
      "change": _vm.radioChange
    }
  }, [_c('div', {
    staticClass: "order-wrapper"
  }, [_c('div', {
    staticClass: "order-left"
  }, [_c('div', {
    staticClass: "order-address"
  }, [_c('span', {
    staticClass: "order-name"
  }, [_vm._v("预约量房：")]), _vm._v(" "), _c('span', {
    staticClass: "order-number"
  }, [_vm._v(_vm._s(_vm.feeNumber) + "元")])])]), _vm._v(" "), _c('p', {
    staticClass: "order-text"
  }, [_vm._v("(量房费用下单后在总价里扣除，如果不下单，费用作为量房师傅工钱)")])], 1), _vm._v(" "), _c('div', {
    staticClass: "order-wrapper"
  }, [_c('div', {
    staticClass: "order-left"
  }, [_c('div', {
    staticClass: "order-address"
  }, [_c('span', {
    staticClass: "order-name"
  }, [_vm._v("预算总价：")]), _vm._v(" "), _c('span', {
    staticClass: "order-number"
  }, [_vm._v(_vm._s(_vm.total) + "元")])])])]), _vm._v(" "), _c('div', {
    staticClass: "page__bd"
  }, _vm._l((_vm.items), function(item, index) {
    return _c('radio', {
      key: item,
      staticClass: "radio",
      attrs: {
        "value": item.value,
        "color": _vm.color
      }
    })
  }))])], 1), _vm._v(" "), _c('div', {
    staticClass: "adver-wrapper"
  }, [_c('div', {
    staticClass: "advertising",
    attrs: {
      "eventid": '6'
    },
    on: {
      "click": function($event) {
        _vm.advertisingDetails(_vm.item)
      }
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.advertising
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "service",
    class: {
      serviceArea: _vm.isIPhoneX
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
      "eventid": '7'
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
  }, [_vm._v("拨打电话")])])]), _vm._v(" "), _c('div', {
    staticClass: "curtain-wrapper",
    class: {
      safeArea: _vm.isIPhoneX
    },
    staticStyle: {
      "border-top": "1px solid #f5f5f5"
    }
  }, [_c('div', {
    staticClass: "curtain-buttom"
  }, [_c('div', {
    attrs: {
      "eventid": '8'
    },
    on: {
      "click": function($event) {
        _vm.hanldSuccess()
      }
    }
  }, [_vm._v("提交")])])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4919621e", esExports)
  }
}

/***/ })

},[276]);