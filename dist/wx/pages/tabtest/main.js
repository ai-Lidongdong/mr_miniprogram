require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([4],{

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(292);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_29eaa48e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(298);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(293)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_29eaa48e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/tabtest/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-29eaa48e", Component.options)
  } else {
    hotAPI.reload("data-v-29eaa48e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 293:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({
  data: function data() {
    return {
      goods: [],
      contentId: "", // 每个food-list的id，scroll-into-view滚动到对应的id
      navId: "", // 导航模块对应的id，用来联动内容区域
      currentIndex: 0,
      navulHeight: 0, // 导航里ul高度
      navItemHeight: 0, // 每个导航高度
      listHeight: [], // foods内部块的高度
      contentHeight: [] // 内容区域scroll-view高度
    };
  },

  watch: {
    currentIndex: function currentIndex() {
      console.log(this.currentIndex);
      if (this.contentHeight < this.navulHeight) {
        var h = this.currentIndex * this.navItemHeight;
        if (h > this.contentHeight) {
          // 导航滑动
          this.navId = "nav_" + this.currentIndex;
        } else {
          this.navId = "nav_0";
        }
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    setTimeout(function () {
      _this.goods = [{ name: '菜单1', data: ['1.1', '1.2', '1.3', '1.4', '1.5'] }, { name: '菜单2', data: ['2.1', '2.2', '2.3', '2.4', '2.5', '2.6'] }, { name: '菜单3', data: ['3.1', '3.2', '3.3', '3.4', '3.5'] }, { name: '菜单4', data: ['4.1', '4.2', '4.3', '4.4', '4.5'] }, { name: '菜单5', data: ['5.1', '5.2', '5.3', '5.4', '5.5', '5.6', '5.7', '5.8'] }, { name: '菜单6', data: ['6.1', '6.2', '6.3', '6.4', '6.5'] }, { name: '菜单7', data: ['7.1', '7.2', '7.3', '7.4', '7.5', '7.6'] }, { name: '菜单8', data: ['8.1', '8.2'] }];
    }, 500);
  },

  methods: {
    selectMenu: function selectMenu(index) {
      console.log(index);
      this.contentId = "con_" + index;
      this.navId = "nav_" + index;
      this.currentIndex = index;
    },
    onScroll: function onScroll(e) {
      this.contentId = "";
      var scrollTop = e.target.scrollTop;
      // console.log(scrollTop);
      var length = this.listHeight.length;
      if (scrollTop >= this.listHeight[length - 1] - this.contentHeight) {
        return;
      } else if (scrollTop > 0 && scrollTop < this.listHeight[0]) {
        this.currentIndex = 0;
      }
      for (var i = 0; i < length; i++) {
        if (scrollTop >= this.listHeight[i - 1] && scrollTop < this.listHeight[i]) {
          this.currentIndex = i;
        }
      }
      // console.log(this.currentIndex)
    },
    getFoodHeight: function getFoodHeight() {
      var _this2 = this;

      var query = wx.createSelectorQuery();
      var h = 0;
      query.selectAll(".food-list-hook").boundingClientRect(function (rects) {
        // console.log(rects)
        rects.forEach(function (rect) {
          h += rect.height;
          _this2.listHeight.push(h);
        });
        console.log(_this2.listHeight);
      });
      query.select(".foods-wrapper").boundingClientRect(function (rect) {
        _this2.contentHeight = rect.height;
      });
      query.select(".menu-ul").boundingClientRect(function (rect) {
        _this2.navulHeight = rect.height;
      });
      query.select(".menu-item").boundingClientRect(function (rect) {
        _this2.navItemHeight = rect.height;
      }).exec();
    }
  }
}, "watch", {
  goods: function goods() {
    var _this3 = this;

    // 获取模块高度，即food-list
    setTimeout(function () {
      _this3.getFoodHeight();
    }, 60);
  }
}));

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tab-warp"
  }, [_c('scroll-view', {
    staticClass: "menu-wrapper",
    attrs: {
      "scroll-into-view": _vm.navId,
      "scroll-with-animation": "true",
      "scroll-y": ""
    }
  }, [_c('ul', {
    staticClass: "menu-ul"
  }, _vm._l((_vm.goods), function(item, index) {
    return _c('li', {
      key: index,
      staticClass: "menu-item",
      class: index === _vm.currentIndex ? 'current' : '',
      attrs: {
        "id": 'nav_' + index,
        "eventid": '0_' + index
      },
      on: {
        "tap": function($event) {
          _vm.selectMenu(index)
        }
      }
    }, [_vm._v(_vm._s(item.name))])
  }))], 1), _vm._v(" "), _c('scroll-view', {
    staticClass: "foods-wrapper",
    attrs: {
      "scroll-y": "",
      "scroll-into-view": _vm.contentId,
      "scroll-with-animation": "true",
      "eventid": '1'
    },
    on: {
      "scroll": _vm.onScroll
    }
  }, [_c('ul', _vm._l((_vm.goods), function(item, i) {
    return _c('li', {
      key: i,
      staticClass: "food-list food-list-hook",
      attrs: {
        "id": 'con_' + i
      }
    }, _vm._l((item.data), function(list, index) {
      return _c('div', {
        key: list + item,
        staticClass: "list-item"
      }, [_vm._v(_vm._s(list))])
    }))
  }))], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-29eaa48e", esExports)
  }
}

/***/ })

},[291]);