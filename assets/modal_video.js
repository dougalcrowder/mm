/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/modal_video.js":
/*!***************************!*\
  !*** ./js/modal_video.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  if ("object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module) module.exports = e();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
}(function () {
  return function e(n, t, o) {
    function r(c, u) {
      if (!t[c]) {
        if (!n[c]) {
          var s = "function" == typeof require && require;
          if (!u && s) return require(c, !0);
          if (i) return i(c, !0);
          var a = new Error("Cannot find module '" + c + "'");
          throw a.code = "MODULE_NOT_FOUND", a;
        }

        var l = t[c] = {
          exports: {}
        };
        n[c][0].call(l.exports, function (e) {
          return r(n[c][1][e] || e);
        }, l, l.exports, e, n, t, o);
      }

      return t[c].exports;
    }

    for (var i = "function" == typeof require && require, c = 0; c < o.length; c++) {
      r(o[c]);
    }

    return r;
  }({
    1: [function (e, n, t) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.create = t.visible = void 0;

      var o = function o(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            t = document.createElement("div");
        return t.innerHTML = e.trim(), !0 === n ? t.children : t.firstChild;
      },
          r = function r(e, n) {
        var t = e.children;
        return 1 === t.length && t[0].tagName === n;
      },
          i = function i(e) {
        return null != (e = e || document.querySelector(".basicLightbox")) && !0 === e.ownerDocument.body.contains(e);
      };

      t.visible = i;

      t.create = function (e, n) {
        var t = function (e, n) {
          var t = o('\n\t\t<div class="basicLightbox '.concat(n.className, '">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),
              i = t.querySelector(".basicLightbox__placeholder");
          e.forEach(function (e) {
            return i.appendChild(e);
          });
          var c = r(i, "IMG"),
              u = r(i, "VIDEO"),
              s = r(i, "IFRAME");
          return !0 === c && t.classList.add("basicLightbox--img"), !0 === u && t.classList.add("basicLightbox--video"), !0 === s && t.classList.add("basicLightbox--iframe"), t;
        }(e = function (e) {
          var n = "string" == typeof e,
              t = e instanceof HTMLElement == 1;
          if (!1 === n && !1 === t) throw new Error("Content must be a DOM element/node or string");
          return !0 === n ? Array.from(o(e, !0)) : "TEMPLATE" === e.tagName ? [e.content.cloneNode(!0)] : Array.from(e.children);
        }(e), n = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if (null == (e = Object.assign({}, e)).closable && (e.closable = !0), null == e.className && (e.className = ""), null == e.onShow && (e.onShow = function () {}), null == e.onClose && (e.onClose = function () {}), "boolean" != typeof e.closable) throw new Error("Property `closable` must be a boolean");
          if ("string" != typeof e.className) throw new Error("Property `className` must be a string");
          if ("function" != typeof e.onShow) throw new Error("Property `onShow` must be a function");
          if ("function" != typeof e.onClose) throw new Error("Property `onClose` must be a function");
          return e;
        }(n)),
            c = function c(e) {
          return !1 !== n.onClose(u) && function (e, n) {
            return e.classList.remove("basicLightbox--visible"), setTimeout(function () {
              return !1 === i(e) || e.parentElement.removeChild(e), n();
            }, 410), !0;
          }(t, function () {
            if ("function" == typeof e) return e(u);
          });
        };

        !0 === n.closable && t.addEventListener("click", function (e) {
          e.target === t && c();
        });
        var u = {
          element: function element() {
            return t;
          },
          visible: function visible() {
            return i(t);
          },
          show: function show(e) {
            return !1 !== n.onShow(u) && function (e, n) {
              return document.body.appendChild(e), setTimeout(function () {
                requestAnimationFrame(function () {
                  return e.classList.add("basicLightbox--visible"), n();
                });
              }, 10), !0;
            }(t, function () {
              if ("function" == typeof e) return e(u);
            });
          },
          close: c
        };
        return u;
      };
    }, {}]
  }, {}, [1])(1);
});

/***/ }),

/***/ 4:
/*!*********************************!*\
  !*** multi ./js/modal_video.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dougalcrowder/Sites/MM/mm-src/js/modal_video.js */"./js/modal_video.js");


/***/ })

/******/ });