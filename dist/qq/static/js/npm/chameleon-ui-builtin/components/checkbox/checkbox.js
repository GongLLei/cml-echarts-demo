var __CML__GLOBAL = require("../../../../manifest.js");
__CML__GLOBAL.webpackJsonp([1],{

/***/ "../../.nvm/versions/node/v8.11.3/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/GongLei/.nvm/versions/node/v8.11.3/lib/node_modules/chameleon-tool/chameleon.js\"}!../../.nvm/versions/node/v8.11.3/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/checkbox/checkbox.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Checkbox = function () {
  function Checkbox() {
    _classCallCheck(this, Checkbox);

    this.props = {
      checked: {
        type: Boolean,
        default: false
      },
      label: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'left'
      },
      groupIndex: {
        type: Number,
        default: -1
      },
      checkedIcon: {
        type: String,
        default: ''
      },
      uncheckIcon: {
        type: String,
        default: ''
      },
      cstyle: {
        type: String,
        default: ''
      }
    };
    this.data = {
      checkedImg: __webpack_require__("./node_modules/chameleon-ui-builtin/components/checkbox/images/selected.png"),
      uncheckImg: __webpack_require__("./node_modules/chameleon-ui-builtin/components/checkbox/images/unselected.png"),
      innerChecked: false
    };
    this.computed = {
      checkStyle: function checkStyle() {
        var style = '';
        if (this.disabled) {
          style += 'opacity:0.5;';
        }
        if (this.position == 'right') {
          style += 'position:absolute;right:0;margin-right:45cpx;';
        } else {
          style += 'margin-right:13cpx;';
        }
        return style;
      },
      checkImg: function checkImg() {
        return this.innerChecked ? this.checkedImg : this.uncheckImg;
      },
      checkClass: function checkClass() {
        if (this.disabled) {
          return 'cml-checkbox-disabled';
        }
        return this.innerChecked ? 'cml-checkbox-checked' : 'cml-checkbox-uncheck';
      },
      computedCstyle: function computedCstyle() {
        return this.cstyle;
      }
    };
    this.watch = {
      checked: function checked(newChecked) {
        this.innerChecked = newChecked;
      },
      uncheckIcon: function uncheckIcon() {
        this.initImg();
      },
      checkedIcon: function checkedIcon() {
        this.initImg();
      }
    };
    this.methods = {
      changeCheck: function changeCheck() {
        if (this.disabled) return;
        this.innerChecked = !this.innerChecked;
        var value = {
          value: this.innerChecked,
          index: this.groupIndex
        };

        this.$cmlEmit('changeevent', value);
        this.$cmlEmit('change', value);
      },
      initImg: function initImg() {
        if (this.uncheckIcon) {
          this.uncheckImg = this.uncheckIcon;
        }
        if (this.checkedIcon) {
          this.checkedImg = this.checkedIcon;
        }
      }
    };
  }

  _createClass(Checkbox, [{
    key: 'created',
    value: function created() {
      var checked = this.checked;

      this.innerChecked = checked;
    }
  }, {
    key: 'mounted',
    value: function mounted() {
      this.initImg();
    }
  }]);

  return Checkbox;
}();

exports.default = new Checkbox();


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "../../.nvm/versions/node/v8.11.3/lib/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../.nvm/versions/node/v8.11.3/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../.nvm/versions/node/v8.11.3/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../.nvm/versions/node/v8.11.3/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"qq\"}!../../.nvm/versions/node/v8.11.3/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/GongLei/.nvm/versions/node/v8.11.3/lib/node_modules/chameleon-tool/configs/postcss/qq/.postcssrc.js\"}}!../../.nvm/versions/node/v8.11.3/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../.nvm/versions/node/v8.11.3/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"qq\"}!../../.nvm/versions/node/v8.11.3/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/checkbox/checkbox.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/chameleon-ui-builtin/components/checkbox/checkbox.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../../.nvm/versions/node/v8.11.3/lib/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../.nvm/versions/node/v8.11.3/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../.nvm/versions/node/v8.11.3/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../.nvm/versions/node/v8.11.3/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"qq\"}!../../.nvm/versions/node/v8.11.3/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/Users/GongLei/.nvm/versions/node/v8.11.3/lib/node_modules/chameleon-tool/configs/postcss/qq/.postcssrc.js\"}}!../../.nvm/versions/node/v8.11.3/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../.nvm/versions/node/v8.11.3/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"qq\"}!../../.nvm/versions/node/v8.11.3/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/checkbox/checkbox.cml");
var __cml__script = __webpack_require__("../../.nvm/versions/node/v8.11.3/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/Users/GongLei/.nvm/versions/node/v8.11.3/lib/node_modules/chameleon-tool/chameleon.js\"}!../../.nvm/versions/node/v8.11.3/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/checkbox/checkbox.cml");


/***/ }),

/***/ "./node_modules/chameleon-ui-builtin/components/checkbox/images/selected.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/selected_520dcc8.png";

/***/ }),

/***/ "./node_modules/chameleon-ui-builtin/components/checkbox/images/unselected.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/unselected_4e38c39.png";

/***/ })

},["./node_modules/chameleon-ui-builtin/components/checkbox/checkbox.cml"]);