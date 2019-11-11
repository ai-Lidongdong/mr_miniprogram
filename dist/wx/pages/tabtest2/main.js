require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([3],{

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(300);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_972a4422_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(303);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(301)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_972a4422_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/tabtest2/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-972a4422", Component.options)
  } else {
    hotAPI.reload("data-v-972a4422", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 301:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 302:
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
//
//
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
      menu2: [], //二级菜单数组
      contentId: "", // 每个food-list的id，scroll-into-view滚动到对应的id
      navId: "", // 导航模块对应的id，用来联动内容区域
      topId: "", //二级菜单对应id，用来联动内容区域
      currentIndex: 0,
      currentIndex2: 0,
      navulHeight: 0, // 导航里ul高度
      navItemHeight: 0, // 每个导航高度
      listHeight: [], // foods内部块的高度
      contentHeight: [], // 内容区域scroll-view高度
      lastHeight: [], //最后一级内容高度
      topulWidth: [], // top导航里ul宽度
      topItemWidth: 0 // 每个导航宽度
      // count: 0,
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
      };
    }
  },
  computed: {
    // 计算二级滑动的项
    count: function count() {
      var num = 0;
      for (var j = 0; j < this.currentIndex; j++) {
        num = num + this.goods[j].tops.length;
      }
      this.currentIndex2 = this.currentIndex2 - num;
      return num;
    }
  },
  mounted: function mounted() {
    var _this = this;

    setTimeout(function () {
      _this.goods = [{
        name: '菜单1',
        tops: [{ name: '二级1.1', datas: ['1.1.1', '1.1.2', '1.1.3', '1.1.4', '1.1.5', '1.1.6'] }, { name: '二级1.2', datas: ['1.2.1', '1.2.2', '1.2.3', '1.2.4', '1.2.5', '1.2.6'] }, { name: '二级1.3', datas: ['1.3.1', '1.3.2', '1.3.3', '1.3.4', '1.3.5', '1.3.6'] }]
      }, {
        name: '菜单2',
        tops: [{ name: '二级2.1', datas: ['2.1.1', '2.1.2', '2.1.3', '2.1.4', '2.1.5', '2.1.6'] }, { name: '二级2.2', datas: ['2.2.1', '2.2.2', '2.2.3', '2.2.4', '2.2.5', '2.2.6'] }, { name: '二级2.3', datas: ['2.3.1', '2.3.2', '2.3.3', '2.3.4', '2.3.5', '2.3.6'] }]
      }, {
        name: '菜单3',
        tops: [{ name: '二级3.1', datas: ['3.1.1', '3.1.2', '3.1.3', '3.1.4', '3.1.5', '3.1.6'] }, { name: '二级3.2', datas: ['3.2.1', '3.2.2', '3.2.3', '3.2.4', '3.2.5', '3.2.6'] }, { name: '二级3.3', datas: ['3.3.1', '3.3.2', '3.3.3', '3.3.4', '3.3.5', '3.3.6'] }]
      }, {
        name: '菜单4',
        tops: [{ name: '二级4.1', datas: ['4.1.1', '4.1.2', '4.1.3', '4.1.4', '4.1.5', '4.1.6'] }, { name: '二级4.2', datas: ['4.2.1', '4.2.2', '4.2.3', '4.2.4', '4.2.5', '4.2.6'] }, { name: '二级4.3', datas: ['4.3.1', '4.3.2', '4.3.3', '4.3.4', '4.3.5', '4.3.6'] }]
      }, {
        name: '菜单5',
        tops: [{ name: '二级5.1', datas: ['5.1.1', '5.1.2', '5.1.3', '5.1.4', '5.1.5', '5.1.6'] }, { name: '二级5.2', datas: ['5.2.1', '5.2.2', '5.2.3', '5.2.4', '5.2.5', '5.2.6'] }, { name: '二级5.3', datas: ['5.3.1', '5.3.2', '5.3.3', '5.3.4', '5.3.5', '5.3.6'] }]
      }, {
        name: '菜单6',
        tops: [{ name: '二级6.1', datas: ['6.1.1', '6.1.2', '6.1.3', '6.1.4', '6.1.5', '6.1.6'] }, { name: '二级6.2', datas: ['6.2.1', '6.2.2', '6.2.3', '6.2.4', '6.2.5', '6.2.6'] }, { name: '二级6.3', datas: ['6.3.1', '6.3.2', '6.3.3', '6.3.4', '6.3.5', '6.3.6'] }]
      }, {
        name: '菜单6',
        tops: [{ name: '二级6.1', datas: ['6.1.1', '6.1.2', '6.1.3', '6.1.4', '6.1.5', '6.1.6'] }, { name: '二级6.2', datas: ['6.2.1', '6.2.2', '6.2.3', '6.2.4', '6.2.5', '6.2.6'] }, { name: '二级6.3', datas: ['6.3.1', '6.3.2', '6.3.3', '6.3.4', '6.3.5', '6.3.6'] }]
      }, {
        name: '菜单6',
        tops: [{ name: '二级6.1', datas: ['6.1.1', '6.1.2', '6.1.3', '6.1.4', '6.1.5', '6.1.6'] }, { name: '二级6.2', datas: ['6.2.1', '6.2.2', '6.2.3', '6.2.4', '6.2.5', '6.2.6'] }, { name: '二级6.3', datas: ['6.3.1', '6.3.2', '6.3.3', '6.3.4', '6.3.5', '6.3.6'] }]
      }, {
        name: '菜单6',
        tops: [{ name: '二级6.1', datas: ['6.1.1', '6.1.2', '6.1.3', '6.1.4', '6.1.5', '6.1.6'] }, { name: '二级6.2', datas: ['6.2.1', '6.2.2', '6.2.3', '6.2.4', '6.2.5', '6.2.6'] }, { name: '二级6.3', datas: ['6.3.1', '6.3.2', '6.3.3', '6.3.4', '6.3.5', '6.3.6'] }]
      }];
      _this.menu2 = _this.goods[0].tops;
    }, 500);
  },

  methods: {
    selectMenu: function selectMenu(index) {
      // console.log(index)
      this.contentId = "con_" + index;
      this.navId = "nav_" + index;
      this.currentIndex = index;
      this.menu2 = this.goods[index].tops; //二级赋值
    },
    selectMenu2: function selectMenu2(index) {
      // console.log(index);
      this.contentId = "con_" + this.currentIndex + index;
      this.topId = "top_" + index;
      this.currentIndex2 = index;
    },
    onScroll: function onScroll(e) {
      var _this2 = this;

      this.contentId = "";
      this.topId = "";
      var scrollTop = e.target.scrollTop;
      // console.log(scrollTop);
      var length = this.listHeight.length;
      var length2 = this.lastHeight.length;
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
      setTimeout(function () {
        _this2.menu2 = _this2.goods[_this2.currentIndex].tops; //二级赋值
      }, 50);
      // 最后一级内容区域判断
      if (scrollTop > 0 && scrollTop < this.lastHeight[0]) {
        this.currentIndex2 = 0;
      }
      for (var _i = 0; _i < length2; _i++) {
        if (scrollTop >= this.lastHeight[_i - 1] && scrollTop < this.lastHeight[_i]) {
          this.currentIndex2 = _i;
        }
      }
    },
    getFoodHeight: function getFoodHeight() {
      var _this3 = this;

      var query = wx.createSelectorQuery();
      var h = 0;
      var lastH = 0;
      query.selectAll(".food-list-hook").boundingClientRect(function (rects) {
        rects.forEach(function (rect) {
          h += rect.height;
          _this3.listHeight.push(h);
        });
        console.log('listHeight');
        console.log(_this3.listHeight);
      });
      // 最后一级内容区域高度计算
      query.selectAll(".last-list").boundingClientRect(function (rects) {
        rects.forEach(function (rect) {
          lastH += rect.height;
          _this3.lastHeight.push(lastH);
        });
        console.log('lastHeight');
        console.log(_this3.lastHeight);
      });
      query.select(".foods-wrapper").boundingClientRect(function (rect) {
        _this3.contentHeight = rect.height;
      });
      query.select(".menu-ul").boundingClientRect(function (rect) {
        _this3.navulHeight = rect.height;
      });
      query.select(".menu-item").boundingClientRect(function (rect) {
        _this3.navItemHeight = rect.height;
      });
      // top宽度计算
      query.select(".top-ul").boundingClientRect(function (rect) {
        _this3.topulWidth = rect.width;
      });
      query.select(".top-ul-li").boundingClientRect(function (rect) {
        _this3.topItemWidth = rect.width;
      }).exec();
    },
    onScroll2: function onScroll2() {}
  }
}, "watch", {
  goods: function goods() {
    var _this4 = this;

    // 获取模块高度，即food-list
    setTimeout(function () {
      _this4.getFoodHeight();
    }, 60);
  }
}));

/***/ }),

/***/ 303:
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
    staticClass: "top-wrapper",
    attrs: {
      "scroll-x": "",
      "scroll-into-view": _vm.topId,
      "scroll-with-animation": "true",
      "eventid": '2'
    },
    on: {
      "scroll": _vm.onScroll2
    }
  }, [_c('ul', {
    staticClass: "top-ul"
  }, _vm._l((_vm.menu2), function(item, l) {
    return _c('li', {
      key: l,
      staticClass: "top-ul-li",
      class: l === _vm.currentIndex2 ? 'current2' : '',
      attrs: {
        "id": 'top_' + l,
        "eventid": '1_' + l
      },
      on: {
        "tap": function($event) {
          _vm.selectMenu2(l)
        }
      }
    }, [_vm._v("\n        " + _vm._s(item.name) + "\n      ")])
  }))], 1), _vm._v(" "), _c('scroll-view', {
    staticClass: "foods-wrapper",
    attrs: {
      "scroll-y": "",
      "scroll-into-view": _vm.contentId,
      "scroll-with-animation": "true",
      "eventid": '3'
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
    }, _vm._l((item.tops), function(top, j) {
      return _c('div', {
        key: j,
        staticClass: "last-list",
        attrs: {
          "id": 'con_' + i + j
        }
      }, _vm._l((top.datas), function(data, k) {
        return _c('div', {
          key: k,
          staticClass: "list-item"
        }, [_vm._v("\n            " + _vm._s(data) + "\n          ")])
      }))
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
     require("vue-hot-reload-api").rerender("data-v-972a4422", esExports)
  }
}

/***/ })

},[299]);