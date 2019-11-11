require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([11],{

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(254);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6a8a7093_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(260);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(255)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6a8a7093"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6a8a7093_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/optionType/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6a8a7093", Component.options)
  } else {
    hotAPI.reload("data-v-6a8a7093", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 255:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_util__);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  onShow: function onShow() {
    console.log("root", this.$root);
    this.room_num = this.$root.$mp.query.room_num;
    this.bathroom_num = this.$root.$mp.query.bathroom_num;
    this.cloth_num = this.$root.$mp.query.cloth_num;
    this.house_id = this.$root.$mp.query.house_id;
    this.property_id = this.$root.$mp.query.property_id;
    this.property_name = this.$root.$mp.query.property_name;
    this.room_type = this.$root.$mp.query.room_type;
  },
  mounted: function mounted() {
    this.getProgram();
    this.getContact();
  },

  computed: {},
  methods: {
    //获取方案
    getProgram: function getProgram() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res, house_json, room_type, color_type, material, program, i;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$post("GET", "region/program", {
                  house_id: _this.house_id
                });

              case 2:
                res = _context.sent;
                house_json = res.data;
                room_type = house_json.room_type, color_type = house_json.color_type, material = house_json.material;
                program = [];

                for (i = 0; i < room_type.length; i++) {
                  program.push({});
                  program[i] = house_json.program[room_type[i].id];
                  program[i].room_name = room_type[i].name;
                  program[i].width_meter = house_json.program[room_type[i].id].width_meter;
                  program[i].color_list = color_type;
                  program[i].material = material;
                  program[i].info = house_json.program[room_type[i].id].program_info[0];
                  program[i].check_color_id = color_type[0].id;
                  console.log("material", material);
                  program[i].check_material_id = material[0].id;
                }
                console.log('program', program);
                _this.program = program;

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },

    //选择颜色
    hanldTabColor: function hanldTabColor(color_id, material_id, father_index) {
      console.log('check_color_id', color_id);
      console.log('material_id', material_id);
      console.log('father_index', father_index);
      var program = this.program;
      var program_info = program[father_index].program_info;

      for (var i = 0; i < program_info.length; i++) {
        if (color_id == program_info[i].color_id && material_id == program_info[i].material_id) {
          program[father_index].info = program_info[i];
          program[father_index].check_color_id = program_info[i].color_id;
        }
      }
    },

    //选择材质
    hanldTabMaterial: function hanldTabMaterial(material_id, color_id, father_index) {
      console.log('material_id', material_id);
      console.log('check_color_id', color_id);
      console.log('father_index', father_index);
      var program = this.program;
      var program_info = program[father_index].program_info;

      for (var i = 0; i < program_info.length; i++) {
        if (color_id == program_info[i].color_id && material_id == program_info[i].material_id) {
          console.log('----xunzh');
          program[father_index].info = program_info[i];
          program[father_index].check_material_id = program_info[i].material_id;
        }
      }
      console.log('program', program);
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
    hanldSeeInfoImg: function hanldSeeInfoImg(item) {
      console.log("查看详情");
      console.log(item);
      console.log(item.content);
      var content = encodeURIComponent(item.content);
      console.log(content);

      var url = "../optionDetails/main?content=" + content;
      wx.navigateTo({ url: url });
    },

    //放大图片
    hanldSelect: function hanldSelect(item) {
      // wx.previewImage({
      //   urls: [item.cover] // 需要预览的图片http链接列表
      // });
    },
    hanldStatusColumn: function hanldStatusColumn(item, item_plan) {
      this.$set(this.moneyArr, item.id, item_plan);
      console.log("选中方案" + item.id);
    },
    hanldToFabric: function hanldToFabric() {
      console.log("选中的 moneyArr:");

      var optionCount = 0;
      for (var moneyArr_index in this.moneyArr) {
        optionCount += parseFloat(this.moneyArr[moneyArr_index].sumPrice);
      }

      console.log(this.moneyArr);
      console.log("optionCount: " + optionCount.toFixed(2));
      // return;

      console.log(this.program);
      // return;

      var url = "../fabricType/main?room_num=" + this.room_num + "&bathroom_num=" + this.bathroom_num + "&cloth_num=" + this.cloth_num + "&moneyArr=" + __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(this.moneyArr) + "&property_id=" + this.property_id + "&house_id=" + this.house_id + "&property_name=" + this.property_name + "&room_type=" + __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(this.program);
      wx.navigateTo({ url: url });
    },
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

/***/ 260:
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
  }, [_c('ul', {
    staticClass: "clear_float"
  }, [_c('li', [_c('sapn', {
    staticClass: "round",
    attrs: {
      "mpcomid": '0'
    }
  }, [_vm._v("●")]), _vm._v("\n          您的户型共有" + _vm._s(_vm.room_num) + "处窗户需要窗帘 " + _vm._s(_vm.abb) + "\n        ")], 1), _vm._v(" "), _c('li', [_c('sapn', {
    staticClass: "round",
    attrs: {
      "mpcomid": '1'
    }
  }, [_vm._v("●")]), _vm._v("\n          窗宽共" + _vm._s(_vm.cloth_num) + "米（+-0.5）\n        ")], 1), _vm._v(" "), _c('li', [_c('sapn', {
    staticClass: "round",
    attrs: {
      "mpcomid": '2'
    }
  }, [_vm._v("●")]), _vm._v(" 点击下面菜单切换窗帘方案\n        ")], 1)], 1)], 1), _vm._v(" "), _vm._l((_vm.program), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "program-bg",
      attrs: {
        "index": _vm.father_index
      }
    }, [_c('div', {
      staticClass: "program-main"
    }, [_c('div', {
      staticClass: "program"
    }, [_c('p', {
      staticClass: "program-title"
    }, [_vm._v("\n            " + _vm._s(item.room_name) + "\n            "), _c('span', {
      staticStyle: {
        "font-size": "12px",
        "font-weight": "normal"
      }
    }, [_vm._v(_vm._s(item.width_meter) + " M")])])], 1), _vm._v(" "), _c('div', {
      staticClass: "tab-content clear_float"
    }, [_c('div', {
      staticClass: "tab-wrapper"
    }, [(item.info) ? _c('div', {
      staticClass: "tab-img"
    }, [_c('img', {
      attrs: {
        "src": item.info.cover,
        "eventid": '0_' + index
      },
      on: {
        "click": _vm.hanldSelect
      }
    })]) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "tab-multiple"
    }, [_c('span', {
      staticStyle: {
        "margin": "5px 5px 0px 5px",
        "display": "block"
      }
    }, [_vm._v("颜色选择：")]), _vm._v(" "), _c('ul', {
      staticClass: "tab-serise-ul clear_float"
    }, _vm._l((item.color_list), function(color, color_index) {
      return _c('li', {
        key: color_index,
        staticClass: "tab-series-li",
        class: {
          tab_active: item.check_color_id == color.id
        },
        staticStyle: {
          "padding": "7px 15px"
        },
        attrs: {
          "eventid": '1_' + index + '-' + color_index
        },
        on: {
          "click": function($event) {
            _vm.hanldTabColor(color.id, item.check_material_id, index)
          }
        }
      }, [_c('span', [_vm._v(_vm._s(color.name))])])
    }))], 1), _vm._v(" "), _c('div', {
      staticClass: "tab-multiple"
    }, [_c('span', {
      staticStyle: {
        "margin": "5px 5px 0px 5px",
        "display": "block"
      }
    }, [_vm._v("材质选择：")]), _vm._v(" "), _c('ul', {
      staticClass: "tab-serise-ul clear_float"
    }, _vm._l((item.material), function(material, material_index) {
      return _c('li', {
        key: material_index,
        staticClass: "tab-series-li",
        class: {
          tab_active: item.check_material_id == material.id
        },
        attrs: {
          "eventid": '2_' + index + '-' + material_index
        },
        on: {
          "click": function($event) {
            _vm.hanldTabMaterial(material.id, item.check_color_id, index)
          }
        }
      }, [_c('span', [_c('img', {
        staticStyle: {
          "width": "10px",
          "height": "10px",
          "vertical-align": "middle"
        },
        attrs: {
          "src": material.material_cover
        }
      })]), _vm._v(" "), _c('span', {
        staticStyle: {
          "margin": "0 5px"
        }
      }, [_vm._v(_vm._s(material.material_name))])])
    }))], 1), _vm._v(" "), _c('div', {
      staticClass: "tab-text"
    }, [(item.info) ? _c('p', {
      staticClass: "tab-text-tilte"
    }, [_vm._v("全国统一价：" + _vm._s(item.info.offer_price) + "*" + _vm._s(item.width_meter) + "=" + _vm._s(item.info.offer_price * item.width_meter) + "元")]) : _vm._e(), _vm._v(" "), _c('p', {
      staticClass: "tab-text-caption"
    }, [_vm._v("备注：" + _vm._s(item.description))]), _vm._v(" "), _c('span', {
      staticClass: "tab-text-details",
      attrs: {
        "eventid": '3_' + index
      },
      on: {
        "click": function($event) {
          _vm.hanldSeeInfoImg(_vm.moneyArr[item.id])
        }
      }
    }, [_vm._v("社区优惠价：" + _vm._s(item.width_meter) + "元")])], 1)])])])])
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
      "eventid": '4'
    },
    on: {
      "click": function($event) {
        _vm.hanldToFabric()
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
      "eventid": '5'
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
     require("vue-hot-reload-api").rerender("data-v-6a8a7093", esExports)
  }
}

/***/ })

},[253]);