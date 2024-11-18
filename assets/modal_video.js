/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modal_video.js":
/*!***************************!*\
  !*** ./js/modal_video.js ***!
  \***************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e) {
  if ("object" == ( false ? 0 : _typeof(exports)) && "undefined" != "object") module.exports = e();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
}(function () {
  return function e(n, t, o) {
    function r(c, u) {
      if (!t[c]) {
        if (!n[c]) {
          var s = undefined;
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
    for (var i = undefined, c = 0; c < o.length; c++) r(o[c]);
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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./js/modal_video.js");
/******/ 	
/******/ })()
;