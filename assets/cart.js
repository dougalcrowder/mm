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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/cart.js":
/*!********************!*\
  !*** ./js/cart.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

function updateSubtotal() {
  var lead = document.querySelector('#lead');
  var follow = document.querySelector('#follow');
  follow.innerHTML = lead.innerHTML; // this updates the price when fetch has finished
}

var CartRemoveButton = /*#__PURE__*/function (_HTMLElement) {
  _inherits(CartRemoveButton, _HTMLElement);

  var _super = _createSuper(CartRemoveButton);

  function CartRemoveButton() {
    var _this;

    _classCallCheck(this, CartRemoveButton);

    _this = _super.call(this);

    _this.addEventListener('click', function (event) {
      event.preventDefault();

      _this.closest('cart-items').updateQuantity(_this.dataset.index, 0);
    });

    return _this;
  }

  return CartRemoveButton;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define('cart-remove-button', CartRemoveButton);

var CartItems = /*#__PURE__*/function (_HTMLElement2) {
  _inherits(CartItems, _HTMLElement2);

  var _super2 = _createSuper(CartItems);

  function CartItems() {
    var _this2;

    _classCallCheck(this, CartItems);

    _this2 = _super2.call(this);
    _this2.lineItemStatusElement = document.getElementById('shopping-cart-line-item-status');
    _this2.currentItemCount = Array.from(_this2.querySelectorAll('[name="updates[]"]')).reduce(function (total, quantityInput) {
      return total + parseInt(quantityInput.value);
    }, 0);
    _this2.debouncedOnChange = debounce(function (event) {
      _this2.onChange(event);
    }, 300);

    _this2.addEventListener('change', _this2.debouncedOnChange.bind(_assertThisInitialized(_this2)));

    return _this2;
  }

  _createClass(CartItems, [{
    key: "onChange",
    value: function onChange(event) {
      this.updateQuantity(event.target.dataset.index, event.target.value, document.activeElement.getAttribute('name'));
    }
  }, {
    key: "getSectionsToRender",
    value: function getSectionsToRender() {
      return [{
        id: 'main-cart-items',
        section: document.getElementById('main-cart-items').dataset.id,
        selector: '.js-contents'
      }, {
        id: 'cart-icon-bubble',
        section: 'cart-icon-bubble',
        selector: '.shopify-section'
      }, {
        id: 'cart-live-region-text',
        section: 'cart-live-region-text',
        selector: '.shopify-section'
      }, {
        id: 'main-cart-footer',
        section: document.getElementById('main-cart-footer').dataset.id,
        selector: '.js-contents'
      }];
    }
  }, {
    key: "updateQuantity",
    value: function updateQuantity(line, quantity, name) {
      var _this3 = this;

      this.enableLoading(line);
      var body = JSON.stringify({
        line: line,
        quantity: quantity,
        sections: this.getSectionsToRender().map(function (section) {
          return section.section;
        }),
        sections_url: window.location.pathname
      });
      fetch("".concat(routes.cart_change_url), _objectSpread(_objectSpread({}, fetchConfig()), {
        body: body
      })).then(function (response) {
        return response.text();
      }).then(function (state) {
        var parsedState = JSON.parse(state);

        _this3.classList.toggle('is-empty', parsedState.item_count === 0);

        var cartFooter = document.getElementById('main-cart-footer');
        if (cartFooter) cartFooter.classList.toggle('is-empty', parsedState.item_count === 0);

        _this3.getSectionsToRender().forEach(function (section) {
          var elementToReplace = document.getElementById(section.id).querySelector(section.selector) || document.getElementById(section.id);
          elementToReplace.innerHTML = _this3.getSectionInnerHTML(parsedState.sections[section.section], section.selector);
        });

        _this3.updateLiveRegions(line, parsedState.item_count);

        var lineItem = document.getElementById("CartItem-".concat(line));
        if (lineItem && lineItem.querySelector("[name=\"".concat(name, "\"]"))) lineItem.querySelector("[name=\"".concat(name, "\"]")).focus();

        _this3.disableLoading();

        updateSubtotal();
      })["catch"](function () {
        _this3.querySelectorAll('.loading-overlay').forEach(function (overlay) {
          return overlay.classList.add('hidden');
        });

        document.getElementById('cart-errors').textContent = window.cartStrings.error;

        _this3.disableLoading();
      });
    }
  }, {
    key: "updateLiveRegions",
    value: function updateLiveRegions(line, itemCount) {
      if (this.currentItemCount === itemCount) {
        document.getElementById("Line-item-error-".concat(line)).querySelector('.cart-item__error-text').innerHTML = window.cartStrings.quantityError.replace('[quantity]', document.getElementById("Quantity-".concat(line)).value);
      }

      this.currentItemCount = itemCount;
      this.lineItemStatusElement.setAttribute('aria-hidden', true);
      var cartStatus = document.getElementById('cart-live-region-text');
      cartStatus.setAttribute('aria-hidden', false);
      setTimeout(function () {
        cartStatus.setAttribute('aria-hidden', true);
      }, 1000);
    }
  }, {
    key: "getSectionInnerHTML",
    value: function getSectionInnerHTML(html, selector) {
      return new DOMParser().parseFromString(html, 'text/html').querySelector(selector).innerHTML;
    }
  }, {
    key: "enableLoading",
    value: function enableLoading(line) {
      document.getElementById('main-cart-items').classList.add('cart__items--disabled');
      this.querySelectorAll("#CartItem-".concat(line, " .loading-overlay")).forEach(function (overlay) {
        return overlay.classList.remove('hidden');
      });
      document.activeElement.blur();
      this.lineItemStatusElement.setAttribute('aria-hidden', false);
    }
  }, {
    key: "disableLoading",
    value: function disableLoading() {
      document.getElementById('main-cart-items').classList.remove('cart__items--disabled');
    }
  }]);

  return CartItems;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define('cart-items', CartItems);

/***/ }),

/***/ 1:
/*!**************************!*\
  !*** multi ./js/cart.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dougalcrowder/Sites/MM/mm-src/js/cart.js */"./js/cart.js");


/***/ })

/******/ });