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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

if (window.matchMedia("(hover: none)").matches) {
  document.body.classList.add("nohoverboards");
} else {
  document.body.classList.add("hover");
}

function getFocusableElements(container) {
  return Array.from(container.querySelectorAll("summary, a[href], button:enabled, [tabindex]:not([tabindex^='-']), [draggable], area, input:not([type=hidden]):enabled, select:enabled, textarea:enabled, object, iframe"));
}

var trapFocusHandlers = {};

function trapFocus(container) {
  var elementToFocus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : container;
  var elements = getFocusableElements(container);
  var first = elements[0];
  var last = elements[elements.length - 1];
  removeTrapFocus();

  trapFocusHandlers.focusin = function (event) {
    if (event.target !== container && event.target !== last && event.target !== first) return;
    document.addEventListener('keydown', trapFocusHandlers.keydown);
  };

  trapFocusHandlers.focusout = function () {
    document.removeEventListener('keydown', trapFocusHandlers.keydown);
  };

  trapFocusHandlers.keydown = function (event) {
    if (event.code.toUpperCase() !== 'TAB') return; // If not TAB key
    // On the last focusable element and tab forward, focus the first element.

    if (event.target === last && !event.shiftKey) {
      event.preventDefault();
      first.focus();
    } //  On the first focusable element and tab backward, focus the last element.


    if ((event.target === container || event.target === first) && event.shiftKey) {
      event.preventDefault();
      last.focus();
    }
  };

  document.addEventListener('focusout', trapFocusHandlers.focusout);
  document.addEventListener('focusin', trapFocusHandlers.focusin);
  elementToFocus.focus();
} // Here run the querySelector to figure out if the browser supports :focus-visible or not and run code based on it.


try {
  document.querySelector(":focus-visible");
} catch (_unused) {
  focusVisiblePolyfill();
}

function focusVisiblePolyfill() {
  var navKeys = ['ARROWUP', 'ARROWDOWN', 'ARROWLEFT', 'ARROWRIGHT', 'TAB', 'ENTER', 'SPACE', 'ESCAPE', 'HOME', 'END', 'PAGEUP', 'PAGEDOWN'];
  var currentFocusedElement = null;
  var mouseClick = null;
  window.addEventListener('keydown', function (event) {
    if (navKeys.includes(event.code.toUpperCase())) {
      mouseClick = false;
    }
  });
  window.addEventListener('mousedown', function (event) {
    mouseClick = true;
  });
  window.addEventListener('focus', function () {
    if (currentFocusedElement) currentFocusedElement.classList.remove('focused');
    if (mouseClick) return;
    currentFocusedElement = document.activeElement;
    currentFocusedElement.classList.add('focused');
  }, true);
}

function pauseAllMedia() {
  document.querySelectorAll('.js-youtube').forEach(function (video) {
    video.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
  });
  document.querySelectorAll('.js-vimeo').forEach(function (video) {
    video.contentWindow.postMessage('{"method":"pause"}', '*');
  });
  document.querySelectorAll('video').forEach(function (video) {
    return video.pause();
  });
  document.querySelectorAll('product-model').forEach(function (model) {
    if (model.modelViewerUI) modelViewerUI.pause();
  });
}

function removeTrapFocus() {
  var elementToFocus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  document.removeEventListener('focusin', trapFocusHandlers.focusin);
  document.removeEventListener('focusout', trapFocusHandlers.focusout);
  document.removeEventListener('keydown', trapFocusHandlers.keydown);
  if (elementToFocus) elementToFocus.focus();
}

function onKeyUpEscape(event) {
  if (event.code.toUpperCase() !== 'ESCAPE') return;
  var openDetailsElement = event.target.closest('details[open]');
  if (!openDetailsElement) return;
  var summaryElement = openDetailsElement.querySelector('summary');
  openDetailsElement.removeAttribute('open');
  summaryElement.focus();
}

var QuantityInput = /*#__PURE__*/function (_HTMLElement) {
  _inherits(QuantityInput, _HTMLElement);

  var _super = _createSuper(QuantityInput);

  function QuantityInput() {
    var _this;

    _classCallCheck(this, QuantityInput);

    _this = _super.call(this);
    _this.input = _this.querySelector('input');
    _this.changeEvent = new Event('change', {
      bubbles: true
    });

    _this.querySelectorAll('button').forEach(function (button) {
      return button.addEventListener('click', _this.onButtonClick.bind(_assertThisInitialized(_this)));
    });

    return _this;
  }

  _createClass(QuantityInput, [{
    key: "onButtonClick",
    value: function onButtonClick(event) {
      event.preventDefault();
      var previousValue = this.input.value;
      event.target.name === 'plus' ? this.input.stepUp() : this.input.stepDown();
      if (previousValue !== this.input.value) this.input.dispatchEvent(this.changeEvent);
    }
  }]);

  return QuantityInput;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define('quantity-input', QuantityInput);

function debounce(fn, wait) {
  var _this2 = this;

  var t;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    clearTimeout(t);
    t = setTimeout(function () {
      return fn.apply(_this2, args);
    }, wait);
  };
}

var serializeForm = function serializeForm(form) {
  var obj = {};
  var formData = new FormData(form);

  var _iterator = _createForOfIteratorHelper(formData.keys()),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var key = _step.value;
      var regex = /(?:^(properties\[))(.*?)(?:\]$)/;

      if (regex.test(key)) {
        obj.properties = obj.properties || {};
        obj.properties[regex.exec(key)[2]] = formData.get(key);
      } else {
        obj[key] = formData.get(key);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return JSON.stringify(obj);
};

function fetchConfig() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'json';
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': "application/".concat(type)
    }
  };
}
/*
 * Shopify Common JS
 *
 */


if (typeof window.Shopify == 'undefined') {
  window.Shopify = {};
}

Shopify.bind = function (fn, scope) {
  return function () {
    return fn.apply(scope, arguments);
  };
};

Shopify.setSelectorByValue = function (selector, value) {
  for (var i = 0, count = selector.options.length; i < count; i++) {
    var option = selector.options[i];

    if (value == option.value || value == option.innerHTML) {
      selector.selectedIndex = i;
      return i;
    }
  }
};

Shopify.addListener = function (target, eventName, callback) {
  target.addEventListener ? target.addEventListener(eventName, callback, false) : target.attachEvent('on' + eventName, callback);
};

Shopify.postLink = function (path, options) {
  options = options || {};
  var method = options['method'] || 'post';
  var params = options['parameters'] || {};
  var form = document.createElement("form");
  form.setAttribute("method", method);
  form.setAttribute("action", path);

  for (var key in params) {
    var hiddenField = document.createElement("input");
    hiddenField.setAttribute("type", "hidden");
    hiddenField.setAttribute("name", key);
    hiddenField.setAttribute("value", params[key]);
    form.appendChild(hiddenField);
  }

  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
};

Shopify.CountryProvinceSelector = function (country_domid, province_domid, options) {
  this.countryEl = document.getElementById(country_domid);
  this.provinceEl = document.getElementById(province_domid);
  this.provinceContainer = document.getElementById(options['hideElement'] || province_domid);
  Shopify.addListener(this.countryEl, 'change', Shopify.bind(this.countryHandler, this));
  this.initCountry();
  this.initProvince();
};

Shopify.CountryProvinceSelector.prototype = {
  initCountry: function initCountry() {
    var value = this.countryEl.getAttribute('data-default');
    Shopify.setSelectorByValue(this.countryEl, value);
    this.countryHandler();
  },
  initProvince: function initProvince() {
    var value = this.provinceEl.getAttribute('data-default');

    if (value && this.provinceEl.options.length > 0) {
      Shopify.setSelectorByValue(this.provinceEl, value);
    }
  },
  countryHandler: function countryHandler(e) {
    var opt = this.countryEl.options[this.countryEl.selectedIndex];
    var raw = opt.getAttribute('data-provinces');
    var provinces = JSON.parse(raw);
    this.clearOptions(this.provinceEl);

    if (provinces && provinces.length == 0) {
      this.provinceContainer.style.display = 'none';
    } else {
      for (var i = 0; i < provinces.length; i++) {
        var opt = document.createElement('option');
        opt.value = provinces[i][0];
        opt.innerHTML = provinces[i][1];
        this.provinceEl.appendChild(opt);
      }

      this.provinceContainer.style.display = "";
    }
  },
  clearOptions: function clearOptions(selector) {
    while (selector.firstChild) {
      selector.removeChild(selector.firstChild);
    }
  },
  setOptions: function setOptions(selector, values) {
    for (var i = 0, count = values.length; i < values.length; i++) {
      var opt = document.createElement('option');
      opt.value = values[i];
      opt.innerHTML = values[i];
      selector.appendChild(opt);
    }
  }
};

var MenuDrawer = /*#__PURE__*/function (_HTMLElement2) {
  _inherits(MenuDrawer, _HTMLElement2);

  var _super2 = _createSuper(MenuDrawer);

  function MenuDrawer() {
    var _this3;

    _classCallCheck(this, MenuDrawer);

    _this3 = _super2.call(this);
    _this3.mainDetailsToggle = _this3.querySelector('details');

    var summaryElements = _this3.querySelectorAll('summary');

    _this3.addAccessibilityAttributes(summaryElements);

    if (navigator.platform === 'iPhone') document.documentElement.style.setProperty('--viewport-height', "".concat(window.innerHeight, "px"));

    _this3.addEventListener('keyup', _this3.onKeyUp.bind(_assertThisInitialized(_this3)));

    _this3.addEventListener('focusout', _this3.onFocusOut.bind(_assertThisInitialized(_this3)));

    _this3.bindEvents();

    return _this3;
  }

  _createClass(MenuDrawer, [{
    key: "bindEvents",
    value: function bindEvents() {
      var _this4 = this;

      this.querySelectorAll('summary').forEach(function (summary) {
        return summary.addEventListener('click', _this4.onSummaryClick.bind(_this4));
      });
      this.querySelectorAll('button').forEach(function (button) {
        return button.addEventListener('click', _this4.onCloseButtonClick.bind(_this4));
      });
    }
  }, {
    key: "addAccessibilityAttributes",
    value: function addAccessibilityAttributes(summaryElements) {
      summaryElements.forEach(function (element) {
        element.setAttribute('role', 'button');
        element.setAttribute('aria-expanded', false); // element.setAttribute('aria-controls', element.nextElementSibling.id);
      });
    }
  }, {
    key: "onKeyUp",
    value: function onKeyUp(event) {
      if (event.code.toUpperCase() !== 'ESCAPE') return;
      var openDetailsElement = event.target.closest('details[open]');
      if (!openDetailsElement) return;
      openDetailsElement === this.mainDetailsToggle ? this.closeMenuDrawer(this.mainDetailsToggle.querySelector('summary')) : this.closeSubmenu(openDetailsElement);
    }
  }, {
    key: "onSummaryClick",
    value: function onSummaryClick(event) {
      var summaryElement = event.currentTarget;
      var detailsElement = summaryElement.parentNode;
      var isOpen = detailsElement.hasAttribute('open');

      if (detailsElement === this.mainDetailsToggle) {
        if (isOpen) event.preventDefault();
        isOpen ? this.closeMenuDrawer(summaryElement) : this.openMenuDrawer(summaryElement);
      } else {
        trapFocus(summaryElement.nextElementSibling, detailsElement.querySelector('button'));
        setTimeout(function () {
          detailsElement.classList.add('menu-opening');
        });
      }
    }
  }, {
    key: "openMenuDrawer",
    value: function openMenuDrawer(summaryElement) {
      var _this5 = this;

      setTimeout(function () {
        _this5.mainDetailsToggle.classList.add('menu-opening');
      });
      summaryElement.setAttribute('aria-expanded', true);
      trapFocus(this.mainDetailsToggle, summaryElement);
      document.body.classList.add("overflow-hidden-".concat(this.dataset.breakpoint));
    }
  }, {
    key: "closeMenuDrawer",
    value: function closeMenuDrawer(event) {
      var elementToFocus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (event !== undefined) {
        this.mainDetailsToggle.classList.remove('menu-opening');
        this.mainDetailsToggle.querySelectorAll('details').forEach(function (details) {
          details.removeAttribute('open');
          details.classList.remove('menu-opening');
        });
        this.mainDetailsToggle.querySelector('summary').setAttribute('aria-expanded', false);
        document.body.classList.remove("overflow-hidden-".concat(this.dataset.breakpoint));
        removeTrapFocus(elementToFocus);
        this.closeAnimation(this.mainDetailsToggle);
      }
    }
  }, {
    key: "onFocusOut",
    value: function onFocusOut(event) {
      var _this6 = this;

      setTimeout(function () {
        if (_this6.mainDetailsToggle.hasAttribute('open') && !_this6.mainDetailsToggle.contains(document.activeElement)) _this6.closeMenuDrawer();
      });
    }
  }, {
    key: "onCloseButtonClick",
    value: function onCloseButtonClick(event) {
      var detailsElement = event.currentTarget.closest('details');
      this.closeSubmenu(detailsElement);
    }
  }, {
    key: "closeSubmenu",
    value: function closeSubmenu(detailsElement) {
      detailsElement.classList.remove('menu-opening');
      removeTrapFocus();
      this.closeAnimation(detailsElement);
    }
  }, {
    key: "closeAnimation",
    value: function closeAnimation(detailsElement) {
      var animationStart;

      var handleAnimation = function handleAnimation(time) {
        if (animationStart === undefined) {
          animationStart = time;
        }

        var elapsedTime = time - animationStart;

        if (elapsedTime < 400) {
          window.requestAnimationFrame(handleAnimation);
        } else {
          detailsElement.removeAttribute('open');

          if (detailsElement.closest('details[open]')) {
            trapFocus(detailsElement.closest('details[open]'), detailsElement.querySelector('summary'));
          }
        }
      };

      window.requestAnimationFrame(handleAnimation);
    }
  }]);

  return MenuDrawer;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define('menu-drawer', MenuDrawer);

var HeaderDrawer = /*#__PURE__*/function (_MenuDrawer) {
  _inherits(HeaderDrawer, _MenuDrawer);

  var _super3 = _createSuper(HeaderDrawer);

  function HeaderDrawer() {
    _classCallCheck(this, HeaderDrawer);

    return _super3.call(this);
  }

  _createClass(HeaderDrawer, [{
    key: "openMenuDrawer",
    value: function openMenuDrawer(summaryElement) {
      var _this7 = this;

      this.header = this.header || document.getElementById('shopify-section-header');
      this.borderOffset = this.borderOffset || this.closest('.header-wrapper').classList.contains('header-wrapper--border-bottom') ? 1 : 0;
      document.documentElement.style.setProperty('--header-bottom-position', "".concat(parseInt(this.header.getBoundingClientRect().bottom - this.borderOffset), "px"));
      setTimeout(function () {
        _this7.mainDetailsToggle.classList.add('menu-opening');
      });
      summaryElement.setAttribute('aria-expanded', true);
      trapFocus(this.mainDetailsToggle, summaryElement);
      document.body.classList.add("overflow-hidden-".concat(this.dataset.breakpoint));
    }
  }]);

  return HeaderDrawer;
}(MenuDrawer);

customElements.define('header-drawer', HeaderDrawer);

var ModalDialog = /*#__PURE__*/function (_HTMLElement3) {
  _inherits(ModalDialog, _HTMLElement3);

  var _super4 = _createSuper(ModalDialog);

  function ModalDialog() {
    var _this8;

    _classCallCheck(this, ModalDialog);

    _this8 = _super4.call(this);

    _this8.querySelector('[id^="ModalClose-"]').addEventListener('click', _this8.hide.bind(_assertThisInitialized(_this8)));

    _this8.addEventListener('keyup', function (event) {
      if (event.code.toUpperCase() === 'ESCAPE') _this8.hide();
    });

    if (_this8.classList.contains('media-modal')) {
      _this8.addEventListener('pointerup', function (event) {
        if (event.pointerType === 'mouse' && !event.target.closest('deferred-media, product-model')) _this8.hide();
      });
    } else {
      _this8.addEventListener('click', function (event) {
        if (event.target.nodeName === 'MODAL-DIALOG') _this8.hide();
      });
    }

    return _this8;
  }

  _createClass(ModalDialog, [{
    key: "show",
    value: function show(opener) {
      this.openedBy = opener;
      var popup = this.querySelector('.template-popup');
      document.body.classList.add('overflow-hidden');
      this.setAttribute('open', '');
      if (popup) popup.loadContent();
      trapFocus(this, this.querySelector('[role="dialog"]'));
    }
  }, {
    key: "hide",
    value: function hide() {
      document.body.classList.remove('overflow-hidden');
      this.removeAttribute('open');
      removeTrapFocus(this.openedBy);
      window.pauseAllMedia();
    }
  }]);

  return ModalDialog;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define('modal-dialog', ModalDialog);

var ModalOpener = /*#__PURE__*/function (_HTMLElement4) {
  _inherits(ModalOpener, _HTMLElement4);

  var _super5 = _createSuper(ModalOpener);

  function ModalOpener() {
    var _this9;

    _classCallCheck(this, ModalOpener);

    _this9 = _super5.call(this);

    var button = _this9.querySelector('button');

    if (!button) return _possibleConstructorReturn(_this9);
    button.addEventListener('click', function () {
      var modal = document.querySelector(_this9.getAttribute('data-modal'));
      if (modal) modal.show(button);
    });
    return _this9;
  }

  return ModalOpener;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define('modal-opener', ModalOpener);

var DeferredMedia = /*#__PURE__*/function (_HTMLElement5) {
  _inherits(DeferredMedia, _HTMLElement5);

  var _super6 = _createSuper(DeferredMedia);

  function DeferredMedia() {
    var _this10;

    _classCallCheck(this, DeferredMedia);

    _this10 = _super6.call(this);

    var poster = _this10.querySelector('[id^="Deferred-Poster-"]');

    if (!poster) return _possibleConstructorReturn(_this10);
    poster.addEventListener('click', _this10.loadContent.bind(_assertThisInitialized(_this10)));
    return _this10;
  }

  _createClass(DeferredMedia, [{
    key: "loadContent",
    value: function loadContent() {
      window.pauseAllMedia();

      if (!this.getAttribute('loaded')) {
        var content = document.createElement('div');
        content.appendChild(this.querySelector('template').content.firstElementChild.cloneNode(true));
        this.setAttribute('loaded', true);
        this.appendChild(content.querySelector('video, model-viewer, iframe')).focus();
      }
    }
  }]);

  return DeferredMedia;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define('deferred-media', DeferredMedia); // class SliderComponent extends HTMLElement {
//   constructor() {
//     super();
//     this.slider = this.querySelector('ul');
//     this.sliderItems = this.querySelectorAll('li');
//     this.pageCount = this.querySelector('.slider-counter--current');
//     this.pageTotal = this.querySelector('.slider-counter--total');
//     this.prevButton = this.querySelector('button[name="previous"]');
//     this.nextButton = this.querySelector('button[name="next"]');
// 
//     if (!this.slider || !this.nextButton) return;
// 
//     const resizeObserver = new ResizeObserver(entries => this.initPages());
//     resizeObserver.observe(this.slider);
// 
//     this.slider.addEventListener('scroll', this.update.bind(this));
//     this.prevButton.addEventListener('click', this.onButtonClick.bind(this));
//     this.nextButton.addEventListener('click', this.onButtonClick.bind(this));
//   }
// 
//   initPages() {
//     const sliderItemsToShow = Array.from(this.sliderItems).filter(element => element.clientWidth > 0);
//     this.sliderLastItem = sliderItemsToShow[sliderItemsToShow.length - 1];
//     if (sliderItemsToShow.length === 0) return;
//     this.slidesPerPage = Math.floor(this.slider.clientWidth / sliderItemsToShow[0].clientWidth);
//     this.totalPages = sliderItemsToShow.length - this.slidesPerPage + 1;
//     this.update();
//   }
// 
//   update() {
//     if (!this.pageCount || !this.pageTotal) return;
//     this.currentPage = Math.round(this.slider.scrollLeft / this.sliderLastItem.clientWidth) + 1;
// 
//     if (this.currentPage === 1) {
//       this.prevButton.setAttribute('disabled', true);
//     } else {
//       this.prevButton.removeAttribute('disabled');
//     }
// 
//     if (this.currentPage === this.totalPages) {
//       this.nextButton.setAttribute('disabled', true);
//     } else {
//       this.nextButton.removeAttribute('disabled');
//     }
// 
//     this.pageCount.textContent = this.currentPage;
//     this.pageTotal.textContent = this.totalPages;
//   }
// 
//   onButtonClick(event) {
//     event.preventDefault();
//     const slideScrollPosition = event.currentTarget.name === 'next' ? this.slider.scrollLeft + this.sliderLastItem.clientWidth : this.slider.scrollLeft - this.sliderLastItem.clientWidth;
//     this.slider.scrollTo({
//       left: slideScrollPosition
//     });
//   }
// }
// 
// customElements.define('slider-component', SliderComponent);

var VariantSelects = /*#__PURE__*/function (_HTMLElement6) {
  _inherits(VariantSelects, _HTMLElement6);

  var _super7 = _createSuper(VariantSelects);

  function VariantSelects() {
    var _this11;

    _classCallCheck(this, VariantSelects);

    _this11 = _super7.call(this);

    _this11.addEventListener('change', _this11.onVariantChange);

    return _this11;
  }

  _createClass(VariantSelects, [{
    key: "onVariantChange",
    value: function onVariantChange() {
      this.updateOptions();
      this.updateMasterId();
      this.toggleAddButton(true, '', false);
      this.updatePickupAvailability();
      this.removeErrorMessage();

      if (!this.currentVariant) {
        this.toggleAddButton(true, '', true);
        this.setUnavailable();
      } else {
        this.updateMedia();
        this.updateURL();
        this.updateVariantInput();
        this.renderProductInfo();
      }
    }
  }, {
    key: "updateOptions",
    value: function updateOptions() {
      this.options = Array.from(this.querySelectorAll('select'), function (select) {
        return select.value;
      });
    }
  }, {
    key: "updateMasterId",
    value: function updateMasterId() {
      var _this12 = this;

      this.currentVariant = this.getVariantData().find(function (variant) {
        return !variant.options.map(function (option, index) {
          return _this12.options[index] === option;
        }).includes(false);
      });
    }
  }, {
    key: "updateMedia",
    value: function updateMedia() {//     if (!this.currentVariant) return;
      //     if (!this.currentVariant.featured_media) return;
      //     const newMedia = document.querySelector(
      //       `[data-media-id="${this.dataset.section}-${this.currentVariant.featured_media.id}"]`
      //     );
      // 
      //     if (!newMedia) return;
      //     const modalContent = document.querySelector(`#ProductModal-${this.dataset.section} .product-media-modal__content`);
      //     const newMediaModal = modalContent.querySelector( `[data-media-id="${this.currentVariant.featured_media.id}"]`);
      //     const parent = newMedia.parentElement;
      //     if (parent.firstChild == newMedia) return;
      //     modalContent.prepend(newMediaModal);
      //     parent.prepend(newMedia);
      //     this.stickyHeader = this.stickyHeader || document.querySelector('sticky-header');
      //     if(this.stickyHeader) {
      //       this.stickyHeader.dispatchEvent(new Event('preventHeaderReveal'));
      //     }
      //     window.setTimeout(() => { parent.querySelector('li.product__media-item').scrollIntoView({behavior: "smooth"}); });
    }
  }, {
    key: "updateURL",
    value: function updateURL() {
      if (!this.currentVariant || this.dataset.updateUrl === 'false') return;
      window.history.replaceState({}, '', "".concat(this.dataset.url, "?variant=").concat(this.currentVariant.id));
      var theVar = this.currentVariant;
      console.log(theVar.featured_image.src);
      var image = theVar.featured_image.src;
      variantImages(image);
    }
  }, {
    key: "updateVariantInput",
    value: function updateVariantInput() {
      var _this13 = this;

      var productForms = document.querySelectorAll("#product-form-".concat(this.dataset.section, ", #product-form-installment"));
      productForms.forEach(function (productForm) {
        var input = productForm.querySelector('input[name="id"]');
        input.value = _this13.currentVariant.id;
        input.dispatchEvent(new Event('change', {
          bubbles: true
        }));
      });
    }
  }, {
    key: "updatePickupAvailability",
    value: function updatePickupAvailability() {
      var pickUpAvailability = document.querySelector('pickup-availability');
      if (!pickUpAvailability) return;

      if (this.currentVariant && this.currentVariant.available) {
        pickUpAvailability.fetchAvailability(this.currentVariant.id);
      } else {
        pickUpAvailability.removeAttribute('available');
        pickUpAvailability.innerHTML = '';
      }
    }
  }, {
    key: "removeErrorMessage",
    value: function removeErrorMessage() {
      var section = this.closest('section');
      if (!section) return;
      var productForm = section.querySelector('product-form');
      if (productForm) productForm.handleErrorMessage();
    }
  }, {
    key: "renderProductInfo",
    value: function renderProductInfo() {
      var _this14 = this;

      fetch("".concat(this.dataset.url, "?variant=").concat(this.currentVariant.id, "&section_id=").concat(this.dataset.section)).then(function (response) {
        return response.text();
      }).then(function (responseText) {
        var id = "price-".concat(_this14.dataset.section);
        var html = new DOMParser().parseFromString(responseText, 'text/html');
        var destination = document.getElementById(id);
        var source = html.getElementById(id);
        var variantPickerDestination = document.querySelector('variant-radios') || document.querySelector('variant-selects');
        var variantPickerSource = html.querySelector('variant-radios') || html.querySelector('variant-selects');
        if (source && destination) destination.innerHTML = source.innerHTML;
        if (variantPickerSource && variantPickerDestination) variantPickerDestination.innerHTML = variantPickerSource.innerHTML;
        var price = document.getElementById("price-".concat(_this14.dataset.section));
        if (price) price.classList.remove('visibility-hidden');

        _this14.toggleAddButton(!_this14.currentVariant.available, window.variantStrings.soldOut);

        noSingles();
      });
    }
  }, {
    key: "toggleAddButton",
    value: function toggleAddButton() {
      var disable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var text = arguments.length > 1 ? arguments[1] : undefined;
      var modifyClass = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var productForm = document.getElementById("product-form-".concat(this.dataset.section));
      if (!productForm) return;
      var addButton = productForm.querySelector('[name="add"]');
      if (!addButton) return;

      if (disable) {
        addButton.setAttribute('disabled', true);
        if (text) addButton.textContent = text;
      } else {
        addButton.removeAttribute('disabled');
        addButton.textContent = window.variantStrings.addToCart;
      }

      if (!modifyClass) return;
    }
  }, {
    key: "setUnavailable",
    value: function setUnavailable() {
      var button = document.getElementById("product-form-".concat(this.dataset.section));
      var addButton = button.querySelector('[name="add"]');
      var price = document.getElementById("price-".concat(this.dataset.section));
      if (!addButton) return;
      addButton.textContent = window.variantStrings.unavailable;
      if (price) price.classList.add('visibility-hidden');
    }
  }, {
    key: "getVariantData",
    value: function getVariantData() {
      console.log("variant_stuff Data");
      this.variantData = this.variantData || JSON.parse(this.querySelector('[type="application/json"]').textContent);
      return this.variantData;
      console.log(this.variantData);
    }
  }]);

  return VariantSelects;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define('variant-selects', VariantSelects);

var VariantRadios = /*#__PURE__*/function (_VariantSelects) {
  _inherits(VariantRadios, _VariantSelects);

  var _super8 = _createSuper(VariantRadios);

  function VariantRadios() {
    _classCallCheck(this, VariantRadios);

    return _super8.call(this);
  }

  _createClass(VariantRadios, [{
    key: "updateOptions",
    value: function updateOptions() {
      var fieldsets = Array.from(this.querySelectorAll('fieldset'));
      this.options = fieldsets.map(function (fieldset) {
        return Array.from(fieldset.querySelectorAll('input')).find(function (radio) {
          return radio.checked;
        }).value;
      });
    }
  }]);

  return VariantRadios;
}(VariantSelects);

customElements.define('variant-radios', VariantRadios);
document.querySelectorAll('#mainNav li').forEach(function (navLi) {
  if (navLi.classList.contains('subnav_active')) {
    navLi.addEventListener('click', function () {
      var dropper = navLi.querySelector('.header__submenu');
      var inner = navLi.querySelector('.inner');

      if (dropper.classList.contains('active')) {
        inner.classList.add('backto');
        setTimeout(function () {
          dropper.classList.remove('active');
          navLi.classList.remove('active');
        }, 300);
        setTimeout(function () {
          inner.classList.remove('backto');
        }, 800);
      } else {
        dropper.classList.add('active');
        navLi.classList.add('active');
      }
    });
  }
});

/***/ }),

/***/ "./scss/article.scss":
/*!***************************!*\
  !*** ./scss/article.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./scss/blog.scss":
/*!************************!*\
  !*** ./scss/blog.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./scss/cart.scss":
/*!************************!*\
  !*** ./scss/cart.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./scss/collage.scss":
/*!***************************!*\
  !*** ./scss/collage.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./scss/collections.scss":
/*!*******************************!*\
  !*** ./scss/collections.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./scss/facets.scss":
/*!**************************!*\
  !*** ./scss/facets.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./scss/footer.scss":
/*!**************************!*\
  !*** ./scss/footer.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./scss/header.scss":
/*!**************************!*\
  !*** ./scss/header.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./scss/hotspots.scss":
/*!****************************!*\
  !*** ./scss/hotspots.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./scss/mailchimp.scss":
/*!*****************************!*\
  !*** ./scss/mailchimp.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./scss/modal.scss":
/*!*************************!*\
  !*** ./scss/modal.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./scss/page.scss":
/*!************************!*\
  !*** ./scss/page.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./scss/pagination.scss":
/*!******************************!*\
  !*** ./scss/pagination.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./scss/product-card.scss":
/*!********************************!*\
  !*** ./scss/product-card.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./scss/products.scss":
/*!****************************!*\
  !*** ./scss/products.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./scss/video.scss":
/*!*************************!*\
  !*** ./scss/video.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./js/main.js ./scss/main.scss ./scss/header.scss ./scss/products.scss ./scss/collections.scss ./scss/blog.scss ./scss/article.scss ./scss/footer.scss ./scss/pagination.scss ./scss/collage.scss ./scss/facets.scss ./scss/cart.scss ./scss/page.scss ./scss/hotspots.scss ./scss/video.scss ./scss/modal.scss ./scss/product-card.scss ./scss/mailchimp.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/dougalcrowder/Sites/MM/mm-src/js/main.js */"./js/main.js");
__webpack_require__(/*! /Users/dougalcrowder/Sites/MM/mm-src/scss/main.scss */"./scss/main.scss");
__webpack_require__(/*! /Users/dougalcrowder/Sites/MM/mm-src/scss/header.scss */"./scss/header.scss");
__webpack_require__(/*! /Users/dougalcrowder/Sites/MM/mm-src/scss/products.scss */"./scss/products.scss");
__webpack_require__(/*! /Users/dougalcrowder/Sites/MM/mm-src/scss/collections.scss */"./scss/collections.scss");
__webpack_require__(/*! /Users/dougalcrowder/Sites/MM/mm-src/scss/blog.scss */"./scss/blog.scss");
__webpack_require__(/*! /Users/dougalcrowder/Sites/MM/mm-src/scss/article.scss */"./scss/article.scss");
__webpack_require__(/*! /Users/dougalcrowder/Sites/MM/mm-src/scss/footer.scss */"./scss/footer.scss");
__webpack_require__(/*! /Users/dougalcrowder/Sites/MM/mm-src/scss/pagination.scss */"./scss/pagination.scss");
__webpack_require__(/*! /Users/dougalcrowder/Sites/MM/mm-src/scss/collage.scss */"./scss/collage.scss");
__webpack_require__(/*! /Users/dougalcrowder/Sites/MM/mm-src/scss/facets.scss */"./scss/facets.scss");
__webpack_require__(/*! /Users/dougalcrowder/Sites/MM/mm-src/scss/cart.scss */"./scss/cart.scss");
__webpack_require__(/*! /Users/dougalcrowder/Sites/MM/mm-src/scss/page.scss */"./scss/page.scss");
__webpack_require__(/*! /Users/dougalcrowder/Sites/MM/mm-src/scss/hotspots.scss */"./scss/hotspots.scss");
__webpack_require__(/*! /Users/dougalcrowder/Sites/MM/mm-src/scss/video.scss */"./scss/video.scss");
__webpack_require__(/*! /Users/dougalcrowder/Sites/MM/mm-src/scss/modal.scss */"./scss/modal.scss");
__webpack_require__(/*! /Users/dougalcrowder/Sites/MM/mm-src/scss/product-card.scss */"./scss/product-card.scss");
module.exports = __webpack_require__(/*! /Users/dougalcrowder/Sites/MM/mm-src/scss/mailchimp.scss */"./scss/mailchimp.scss");


/***/ })

/******/ });