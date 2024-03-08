/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@swup/fade-theme/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@swup/fade-theme/lib/index.js ***!
  \****************************************************/
/***/ ((module) => {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_551__(moduleId) {
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_551__);
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
/******/ 	__nested_webpack_require_551__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_551__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_551__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_551__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_551__.r = function(exports) {
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
/******/ 	__nested_webpack_require_551__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_551__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_551__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_551__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_551__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_551__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_551__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_551__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_551__(__nested_webpack_require_551__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __nested_webpack_require_4015__) {

"use strict";


var _index = __nested_webpack_require_4015__(1);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _index2.default; // this is here for webpack to expose SwupTheme as window.SwupTheme

/***/ }),
/* 1 */
/***/ (function(module, exports, __nested_webpack_require_4391__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _theme = __nested_webpack_require_4391__(2);

var _theme2 = _interopRequireDefault(_theme);

var _index = __nested_webpack_require_4391__(3);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FadeTheme = function (_Theme) {
	_inherits(FadeTheme, _Theme);

	function FadeTheme(options) {
		_classCallCheck(this, FadeTheme);

		var _this = _possibleConstructorReturn(this, (FadeTheme.__proto__ || Object.getPrototypeOf(FadeTheme)).call(this));

		_this.name = 'FadeTheme';


		var defaultOptions = {
			mainElement: '#swup'
		};

		_this.options = _extends({}, defaultOptions, options);
		return _this;
	}

	_createClass(FadeTheme, [{
		key: 'mount',
		value: function mount() {
			this.applyStyles(_index2.default);
			this.addClassName(this.options.mainElement, 'main');
		}
	}]);

	return FadeTheme;
}(_theme2.default);

exports.default = FadeTheme;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Theme = function () {
	function Theme() {
		var _this = this;

		_classCallCheck(this, Theme);

		this._addedStyleElements = [];
		this._addedHTMLContent = [];
		this._classNameAddedToElements = [];

		this._addClassNameToElement = function () {
			_this._classNameAddedToElements.forEach(function (item) {
				var elements = Array.prototype.slice.call(document.querySelectorAll(item.selector));
				elements.forEach(function (element) {
					element.classList.add('swup-transition-' + item.name);
				});
			});
		};

		this.isSwupPlugin = true;
	}

	_createClass(Theme, [{
		key: '_beforeMount',
		value: function _beforeMount() {
			// save original and replace animationSelector option
			this._originalAnimationSelectorOption = String(this.swup.options.animationSelector);
			this.swup.options.animationSelector = '[class*="swup-transition-"]';

			// add classes after each content replace
			this.swup.on('contentReplaced', this._addClassNameToElement);
		}
	}, {
		key: '_afterUnmount',
		value: function _afterUnmount() {
			// reset animationSelector option
			this.swup.options.animationSelector = this._originalAnimationSelectorOption;

			// remove added styles
			this._addedStyleElements.forEach(function (element) {
				element.outerHTML = '';
				element = null;
			});

			// remove added HTML
			this._addedHTMLContent.forEach(function (element) {
				element.outerHTML = '';
				element = null;
			});

			// remove added classnames
			this._classNameAddedToElements.forEach(function (item) {
				var elements = Array.prototype.slice.call(document.querySelectorAll(item.selector));
				elements.forEach(function (element) {
					element.className.split(' ').forEach(function (classItem) {
						if (new RegExp('^swup-transition-').test(classItem)) {
							element.classList.remove(classItem);
						}
					});
				});
			});

			this.swup.off('contentReplaced', this._addClassNameToElement);
		}
	}, {
		key: 'mount',
		value: function mount() {
			// this is mount method rewritten by class extending
			// and is executed when swup is enabled with theme
		}
	}, {
		key: 'unmount',
		value: function unmount() {
			// this is unmount method rewritten by class extending
			// and is executed when swup with theme is disabled
		}
	}, {
		key: 'applyStyles',
		value: function applyStyles(styles) {
			var head = document.head;
			var style = document.createElement('style');

			style.setAttribute('data-swup-theme', '');
			style.appendChild(document.createTextNode(styles));

			this._addedStyleElements.push(style);
			head.prepend(style);
		}
	}, {
		key: 'applyHTML',
		value: function applyHTML(content) {
			var element = document.createElement('div');
			element.innerHTML = content;
			this._addedHTMLContent.push(element);
			document.body.appendChild(element);
		}
	}, {
		key: 'addClassName',
		value: function addClassName(selector, name) {
			// save so it can be later removed
			this._classNameAddedToElements.push({ selector: selector, name: name });

			// add class the first time
			this._addClassNameToElement();
		}

		// this is here so we can tell if plugin was created by extending this class

	}]);

	return Theme;
}();

exports.default = Theme;

/***/ }),
/* 3 */
/***/ (function(module, exports, __nested_webpack_require_11272__) {

exports = module.exports = __nested_webpack_require_11272__(4)(false);
// Module
exports.push([module.i, ".swup-transition-main {\n    opacity: 1;\n    transition: opacity .4s;\n}\n\nhtml.is-animating .swup-transition-main {\n    opacity: 0;\n}", ""]);



/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ })
/******/ ]);
});

/***/ }),

/***/ "./node_modules/minimasonry/build/minimasonry.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/minimasonry/build/minimasonry.esm.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MiniMasonry)
/* harmony export */ });
var MiniMasonry = function(conf) {
    this._sizes             = [];
    this._columns           = [];
    this._container         = null;
    this._count             = null;
    this._width             = 0;
    this._removeListener    = null;
    this._currentGutterX    = null;
    this._currentGutterY    = null;

    this._resizeTimeout = null,

    this.conf = {
        baseWidth: 255,
        gutterX: null,
        gutterY: null,
        gutter: 10,
        container: null,
        minify: true,
        ultimateGutter: 5,
        surroundingGutter: true,
        direction: 'ltr',
        wedge: false
    };

    this.init(conf);

    return this;
};

MiniMasonry.prototype.init = function(conf) {
    for (var i in this.conf) {
        if (conf[i] != undefined) {
            this.conf[i] = conf[i];
        }
    }

    if (this.conf.gutterX == null || this.conf.gutterY == null) {
        this.conf.gutterX = this.conf.gutterY = this.conf.gutter;
    }
    this._currentGutterX = this.conf.gutterX;
    this._currentGutterY = this.conf.gutterY;

    this._container = typeof this.conf.container == 'object' && this.conf.container.nodeName ?
        this.conf.container :
        document.querySelector(this.conf.container);

    if (!this._container) {
        throw new Error('Container not found or missing');
    }

    var onResize = this.resizeThrottler.bind(this);
    window.addEventListener("resize", onResize);
    this._removeListener = function() {
        window.removeEventListener("resize", onResize);
        if (this._resizeTimeout != null) {
            window.clearTimeout(this._resizeTimeout);
            this._resizeTimeout = null;
        }
    };

    this.layout();
};

MiniMasonry.prototype.reset = function() {
    this._sizes   = [];
    this._columns = [];
    this._count   = null;
    this._width   = this._container.clientWidth;
    var minWidth  = this.conf.baseWidth;
    if (this._width < minWidth) {
        this._width = minWidth;
        this._container.style.minWidth = minWidth + 'px';
    }

    if (this.getCount() == 1) {
        // Set ultimate gutter when only one column is displayed
        this._currentGutterX = this.conf.ultimateGutter;
        // As gutters are reduced, two column may fit, forcing to 1
        this._count = 1;
    } else if (this._width < (this.conf.baseWidth + (2 * this._currentGutterX))) {
        // Remove gutter when screen is to low
        this._currentGutterX = 0;
    } else {
        this._currentGutterX = this.conf.gutterX;
    }
};

MiniMasonry.prototype.getCount = function() {
    if (this.conf.surroundingGutter) {
        return Math.floor((this._width - this._currentGutterX) / (this.conf.baseWidth + this._currentGutterX));
    }

    return Math.floor((this._width + this._currentGutterX) / (this.conf.baseWidth + this._currentGutterX));
};

MiniMasonry.prototype.computeWidth = function() {
    var width;
    if (this.conf.surroundingGutter) {
        width = ((this._width - this._currentGutterX) / this._count) - this._currentGutterX;
    } else {
        width = ((this._width + this._currentGutterX) / this._count) - this._currentGutterX;
    }
    width = Number.parseFloat(width.toFixed(2));

    return width;
};

MiniMasonry.prototype.layout =  function() {
    if (!this._container) {
        console.error('Container not found');
        return;
    }
    this.reset();

    //Computing columns count
    if (this._count == null) {
        this._count = this.getCount();
    }
    //Computing columns width
    var colWidth = this.computeWidth();

    for (var i = 0; i < this._count; i++) {
        this._columns[i] = 0;
    }

    //Saving children real heights
    var children = this._container.children;
    for (var k = 0;k< children.length; k++) {
        // Set colWidth before retrieving element height if content is proportional
        children[k].style.width = colWidth + 'px';
        this._sizes[k] = children[k].clientHeight;
    }

    var startX;
    if (this.conf.direction == 'ltr') {
        startX = this.conf.surroundingGutter ? this._currentGutterX : 0;
    } else {
        startX = this._width - (this.conf.surroundingGutter ? this._currentGutterX : 0);
    }
    if (this._count > this._sizes.length) {
        //If more columns than children
        var occupiedSpace = (this._sizes.length * (colWidth + this._currentGutterX)) - this._currentGutterX;
        if (this.conf.wedge === false) {
            if (this.conf.direction == 'ltr') {
                startX = ((this._width - occupiedSpace) / 2);
            } else {
                startX = this._width - ((this._width - occupiedSpace) / 2);
            }
        } else {
            if (this.conf.direction == 'ltr') ; else {
                startX = this._width - this._currentGutterX;
            }
        }
    }

    //Computing position of children
    for (var index = 0;index < children.length; index++) {
        var nextColumn = this.conf.minify ? this.getShortest() : this.getNextColumn(index);

        var childrenGutter = 0;
        if (this.conf.surroundingGutter || nextColumn != this._columns.length) {
            childrenGutter = this._currentGutterX;
        }
        var x;
        if (this.conf.direction == 'ltr') {
            x = startX + ((colWidth + childrenGutter) * (nextColumn));
        } else {
            x = startX - ((colWidth + childrenGutter) * (nextColumn)) - colWidth;
        }
        var y = this._columns[nextColumn];


        children[index].style.transform = 'translate3d(' + Math.round(x) + 'px,' + Math.round(y) + 'px,0)';

        this._columns[nextColumn] += this._sizes[index] + (this._count > 1 ? this.conf.gutterY : this.conf.ultimateGutter);//margin-bottom
    }

    this._container.style.height = (this._columns[this.getLongest()] - this._currentGutterY) + 'px';
};

MiniMasonry.prototype.getNextColumn = function(index) {
    return index % this._columns.length;
};

MiniMasonry.prototype.getShortest = function() {
    var shortest = 0;
    for (var i = 0; i < this._count; i++) {
        if (this._columns[i] < this._columns[shortest]) {
            shortest = i;
        }
    }

    return shortest;
};

MiniMasonry.prototype.getLongest = function() {
    var longest = 0;
    for (var i = 0; i < this._count; i++) {
        if (this._columns[i] > this._columns[longest]) {
            longest = i;
        }
    }

    return longest;
};

MiniMasonry.prototype.resizeThrottler = function() {
    // ignore resize events as long as an actualResizeHandler execution is in the queue
    if ( !this._resizeTimeout ) {

        this._resizeTimeout = setTimeout(function() {
            this._resizeTimeout = null;
            //IOS Safari throw random resize event on scroll, call layout only if size has changed
            if (this._container.clientWidth != this._width) {
                this.layout();
            }
           // The actualResizeHandler will execute at a rate of 30fps
        }.bind(this), 33);
    }
};

MiniMasonry.prototype.destroy = function() {
    if (typeof this._removeListener == "function") {
        this._removeListener();
    }

    var children = this._container.children;
    for (var k = 0;k< children.length; k++) {
        children[k].style.removeProperty('width');
        children[k].style.removeProperty('transform');
    }
    this._container.style.removeProperty('height');
    this._container.style.removeProperty('min-width');
};




/***/ }),

/***/ "./node_modules/swup/lib/helpers/Link.js":
/*!***********************************************!*\
  !*** ./node_modules/swup/lib/helpers/Link.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Link = function () {
	function Link(elementOrUrl) {
		_classCallCheck(this, Link);

		if (elementOrUrl instanceof Element || elementOrUrl instanceof SVGElement) {
			this.link = elementOrUrl;
		} else {
			this.link = document.createElement('a');
			this.link.href = elementOrUrl;
		}
	}

	_createClass(Link, [{
		key: 'getPath',
		value: function getPath() {
			var path = this.link.pathname;
			if (path[0] !== '/') {
				path = '/' + path;
			}
			return path;
		}
	}, {
		key: 'getAddress',
		value: function getAddress() {
			var path = this.link.pathname + this.link.search;

			if (this.link.getAttribute('xlink:href')) {
				path = this.link.getAttribute('xlink:href');
			}

			if (path[0] !== '/') {
				path = '/' + path;
			}
			return path;
		}
	}, {
		key: 'getHash',
		value: function getHash() {
			return this.link.hash;
		}
	}]);

	return Link;
}();

exports["default"] = Link;

/***/ }),

/***/ "./node_modules/swup/lib/helpers/classify.js":
/*!***************************************************!*\
  !*** ./node_modules/swup/lib/helpers/classify.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
var classify = function classify(text) {
	var output = text.toString().toLowerCase().replace(/\s+/g, '-') // Replace spaces with -
	.replace(/\//g, '-') // Replace / with -
	.replace(/[^\w\-]+/g, '') // Remove all non-word chars
	.replace(/\-\-+/g, '-') // Replace multiple - with single -
	.replace(/^-+/, '') // Trim - from start of text
	.replace(/-+$/, ''); // Trim - from end of text
	if (output[0] === '/') output = output.splice(1);
	if (output === '') output = 'homepage';
	return output;
};

exports["default"] = classify;

/***/ }),

/***/ "./node_modules/swup/lib/helpers/cleanupAnimationClasses.js":
/*!******************************************************************!*\
  !*** ./node_modules/swup/lib/helpers/cleanupAnimationClasses.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
var cleanupAnimationClasses = function cleanupAnimationClasses() {
	document.documentElement.className.split(' ').forEach(function (classItem) {
		if (
		// remove "to-{page}" classes
		new RegExp('^to-').test(classItem) ||
		// remove all other classes
		classItem === 'is-changing' || classItem === 'is-rendering' || classItem === 'is-popstate') {
			document.documentElement.classList.remove(classItem);
		}
	});
};

exports["default"] = cleanupAnimationClasses;

/***/ }),

/***/ "./node_modules/swup/lib/helpers/createHistoryRecord.js":
/*!**************************************************************!*\
  !*** ./node_modules/swup/lib/helpers/createHistoryRecord.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
var createHistoryRecord = function createHistoryRecord(url) {
	window.history.pushState({
		url: url || window.location.href.split(window.location.hostname)[1],
		random: Math.random(),
		source: 'swup'
	}, document.title, url || window.location.href.split(window.location.hostname)[1]);
};

exports["default"] = createHistoryRecord;

/***/ }),

/***/ "./node_modules/swup/lib/helpers/fetch.js":
/*!************************************************!*\
  !*** ./node_modules/swup/lib/helpers/fetch.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fetch = function fetch(setOptions) {
	var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	var defaults = {
		url: window.location.pathname + window.location.search,
		method: 'GET',
		data: null,
		headers: {}
	};

	var options = _extends({}, defaults, setOptions);

	var request = new XMLHttpRequest();

	request.onreadystatechange = function () {
		if (request.readyState === 4) {
			if (request.status !== 500) {
				callback(request);
			} else {
				callback(request);
			}
		}
	};

	request.open(options.method, options.url, true);
	Object.keys(options.headers).forEach(function (key) {
		request.setRequestHeader(key, options.headers[key]);
	});
	request.send(options.data);
	return request;
};

exports["default"] = fetch;

/***/ }),

/***/ "./node_modules/swup/lib/helpers/getCurrentUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/swup/lib/helpers/getCurrentUrl.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
var getCurrentUrl = function getCurrentUrl() {
	return window.location.pathname + window.location.search;
};

exports["default"] = getCurrentUrl;

/***/ }),

/***/ "./node_modules/swup/lib/helpers/getDataFromHtml.js":
/*!**********************************************************!*\
  !*** ./node_modules/swup/lib/helpers/getDataFromHtml.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/swup/lib/utils/index.js");

var getDataFromHtml = function getDataFromHtml(html, containers) {
	var fakeDom = document.createElement('html');
	fakeDom.innerHTML = html;
	var blocks = [];

	containers.forEach(function (selector) {
		if ((0, _utils.query)(selector, fakeDom) == null) {
			console.warn('[swup] Container ' + selector + ' not found on page.');
			return null;
		} else {
			if ((0, _utils.queryAll)(selector).length !== (0, _utils.queryAll)(selector, fakeDom).length) {
				console.warn('[swup] Mismatched number of containers found on new page.');
			}
			(0, _utils.queryAll)(selector).forEach(function (item, index) {
				(0, _utils.queryAll)(selector, fakeDom)[index].setAttribute('data-swup', blocks.length);
				blocks.push((0, _utils.queryAll)(selector, fakeDom)[index].outerHTML);
			});
		}
	});

	var json = {
		title: (fakeDom.querySelector('title') || {}).innerText,
		pageClass: fakeDom.querySelector('body').className,
		originalContent: html,
		blocks: blocks
	};

	// to prevent memory leaks
	fakeDom.innerHTML = '';
	fakeDom = null;

	return json;
};

exports["default"] = getDataFromHtml;

/***/ }),

/***/ "./node_modules/swup/lib/helpers/index.js":
/*!************************************************!*\
  !*** ./node_modules/swup/lib/helpers/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.cleanupAnimationClasses = exports.Link = exports.markSwupElements = exports.normalizeUrl = exports.getCurrentUrl = exports.transitionProperty = exports.transitionEnd = exports.fetch = exports.getDataFromHtml = exports.createHistoryRecord = exports.classify = undefined;

var _classify = __webpack_require__(/*! ./classify */ "./node_modules/swup/lib/helpers/classify.js");

var _classify2 = _interopRequireDefault(_classify);

var _createHistoryRecord = __webpack_require__(/*! ./createHistoryRecord */ "./node_modules/swup/lib/helpers/createHistoryRecord.js");

var _createHistoryRecord2 = _interopRequireDefault(_createHistoryRecord);

var _getDataFromHtml = __webpack_require__(/*! ./getDataFromHtml */ "./node_modules/swup/lib/helpers/getDataFromHtml.js");

var _getDataFromHtml2 = _interopRequireDefault(_getDataFromHtml);

var _fetch = __webpack_require__(/*! ./fetch */ "./node_modules/swup/lib/helpers/fetch.js");

var _fetch2 = _interopRequireDefault(_fetch);

var _transitionEnd = __webpack_require__(/*! ./transitionEnd */ "./node_modules/swup/lib/helpers/transitionEnd.js");

var _transitionEnd2 = _interopRequireDefault(_transitionEnd);

var _transitionProperty = __webpack_require__(/*! ./transitionProperty */ "./node_modules/swup/lib/helpers/transitionProperty.js");

var _transitionProperty2 = _interopRequireDefault(_transitionProperty);

var _getCurrentUrl = __webpack_require__(/*! ./getCurrentUrl */ "./node_modules/swup/lib/helpers/getCurrentUrl.js");

var _getCurrentUrl2 = _interopRequireDefault(_getCurrentUrl);

var _normalizeUrl = __webpack_require__(/*! ./normalizeUrl */ "./node_modules/swup/lib/helpers/normalizeUrl.js");

var _normalizeUrl2 = _interopRequireDefault(_normalizeUrl);

var _markSwupElements = __webpack_require__(/*! ./markSwupElements */ "./node_modules/swup/lib/helpers/markSwupElements.js");

var _markSwupElements2 = _interopRequireDefault(_markSwupElements);

var _Link = __webpack_require__(/*! ./Link */ "./node_modules/swup/lib/helpers/Link.js");

var _Link2 = _interopRequireDefault(_Link);

var _cleanupAnimationClasses = __webpack_require__(/*! ./cleanupAnimationClasses */ "./node_modules/swup/lib/helpers/cleanupAnimationClasses.js");

var _cleanupAnimationClasses2 = _interopRequireDefault(_cleanupAnimationClasses);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var classify = exports.classify = _classify2.default;
var createHistoryRecord = exports.createHistoryRecord = _createHistoryRecord2.default;
var getDataFromHtml = exports.getDataFromHtml = _getDataFromHtml2.default;
var fetch = exports.fetch = _fetch2.default;
var transitionEnd = exports.transitionEnd = _transitionEnd2.default;
var transitionProperty = exports.transitionProperty = _transitionProperty2.default;
var getCurrentUrl = exports.getCurrentUrl = _getCurrentUrl2.default;
var normalizeUrl = exports.normalizeUrl = _normalizeUrl2.default;
var markSwupElements = exports.markSwupElements = _markSwupElements2.default;
var Link = exports.Link = _Link2.default;
var cleanupAnimationClasses = exports.cleanupAnimationClasses = _cleanupAnimationClasses2.default;

/***/ }),

/***/ "./node_modules/swup/lib/helpers/markSwupElements.js":
/*!***********************************************************!*\
  !*** ./node_modules/swup/lib/helpers/markSwupElements.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/swup/lib/utils/index.js");

var markSwupElements = function markSwupElements(element, containers) {
	var blocks = 0;

	containers.forEach(function (selector) {
		if ((0, _utils.query)(selector, element) == null) {
			console.warn('[swup] Container ' + selector + ' not found on page.');
		} else {
			(0, _utils.queryAll)(selector).forEach(function (item, index) {
				(0, _utils.queryAll)(selector, element)[index].setAttribute('data-swup', blocks);
				blocks++;
			});
		}
	});
};

exports["default"] = markSwupElements;

/***/ }),

/***/ "./node_modules/swup/lib/helpers/normalizeUrl.js":
/*!*******************************************************!*\
  !*** ./node_modules/swup/lib/helpers/normalizeUrl.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _Link = __webpack_require__(/*! ./Link */ "./node_modules/swup/lib/helpers/Link.js");

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var normalizeUrl = function normalizeUrl(url) {
	return new _Link2.default(url).getAddress();
};

exports["default"] = normalizeUrl;

/***/ }),

/***/ "./node_modules/swup/lib/helpers/transitionEnd.js":
/*!********************************************************!*\
  !*** ./node_modules/swup/lib/helpers/transitionEnd.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
var transitionEnd = function transitionEnd() {
	if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
		return 'webkitTransitionEnd';
	} else {
		return 'transitionend';
	}
};

exports["default"] = transitionEnd;

/***/ }),

/***/ "./node_modules/swup/lib/helpers/transitionProperty.js":
/*!*************************************************************!*\
  !*** ./node_modules/swup/lib/helpers/transitionProperty.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
var transitionProperty = function transitionProperty() {
	if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
		return 'WebkitTransition';
	} else {
		return 'transition';
	}
};

exports["default"] = transitionProperty;

/***/ }),

/***/ "./node_modules/swup/lib/index.js":
/*!****************************************!*\
  !*** ./node_modules/swup/lib/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

// modules


var _delegateIt = __webpack_require__(/*! delegate-it */ "./node_modules/delegate-it/index.js");

var _delegateIt2 = _interopRequireDefault(_delegateIt);

var _Cache = __webpack_require__(/*! ./modules/Cache */ "./node_modules/swup/lib/modules/Cache.js");

var _Cache2 = _interopRequireDefault(_Cache);

var _loadPage = __webpack_require__(/*! ./modules/loadPage */ "./node_modules/swup/lib/modules/loadPage.js");

var _loadPage2 = _interopRequireDefault(_loadPage);

var _renderPage = __webpack_require__(/*! ./modules/renderPage */ "./node_modules/swup/lib/modules/renderPage.js");

var _renderPage2 = _interopRequireDefault(_renderPage);

var _triggerEvent = __webpack_require__(/*! ./modules/triggerEvent */ "./node_modules/swup/lib/modules/triggerEvent.js");

var _triggerEvent2 = _interopRequireDefault(_triggerEvent);

var _on = __webpack_require__(/*! ./modules/on */ "./node_modules/swup/lib/modules/on.js");

var _on2 = _interopRequireDefault(_on);

var _off = __webpack_require__(/*! ./modules/off */ "./node_modules/swup/lib/modules/off.js");

var _off2 = _interopRequireDefault(_off);

var _updateTransition = __webpack_require__(/*! ./modules/updateTransition */ "./node_modules/swup/lib/modules/updateTransition.js");

var _updateTransition2 = _interopRequireDefault(_updateTransition);

var _getAnchorElement = __webpack_require__(/*! ./modules/getAnchorElement */ "./node_modules/swup/lib/modules/getAnchorElement.js");

var _getAnchorElement2 = _interopRequireDefault(_getAnchorElement);

var _getAnimationPromises = __webpack_require__(/*! ./modules/getAnimationPromises */ "./node_modules/swup/lib/modules/getAnimationPromises.js");

var _getAnimationPromises2 = _interopRequireDefault(_getAnimationPromises);

var _getPageData = __webpack_require__(/*! ./modules/getPageData */ "./node_modules/swup/lib/modules/getPageData.js");

var _getPageData2 = _interopRequireDefault(_getPageData);

var _plugins = __webpack_require__(/*! ./modules/plugins */ "./node_modules/swup/lib/modules/plugins.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/swup/lib/utils/index.js");

var _helpers = __webpack_require__(/*! ./helpers */ "./node_modules/swup/lib/helpers/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Swup = function () {
	function Swup(setOptions) {
		_classCallCheck(this, Swup);

		// default options
		var defaults = {
			animateHistoryBrowsing: false,
			animationSelector: '[class*="transition-"]',
			linkSelector: 'a[href^="' + window.location.origin + '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',
			cache: true,
			containers: ['#swup'],
			requestHeaders: {
				'X-Requested-With': 'swup',
				Accept: 'text/html, application/xhtml+xml'
			},
			plugins: [],
			skipPopStateHandling: function skipPopStateHandling(event) {
				return !(event.state && event.state.source === 'swup');
			}
		};

		// merge options
		var options = _extends({}, defaults, setOptions);

		// handler arrays
		this._handlers = {
			animationInDone: [],
			animationInStart: [],
			animationOutDone: [],
			animationOutStart: [],
			animationSkipped: [],
			clickLink: [],
			contentReplaced: [],
			disabled: [],
			enabled: [],
			openPageInNewTab: [],
			pageLoaded: [],
			pageRetrievedFromCache: [],
			pageView: [],
			popState: [],
			samePage: [],
			samePageWithHash: [],
			serverError: [],
			transitionStart: [],
			transitionEnd: [],
			willReplaceContent: []
		};

		// variable for anchor to scroll to after render
		this.scrollToElement = null;
		// variable for promise used for preload, so no new loading of the same page starts while page is loading
		this.preloadPromise = null;
		// variable for save options
		this.options = options;
		// variable for plugins array
		this.plugins = [];
		// variable for current transition object
		this.transition = {};
		// variable for keeping event listeners from "delegate"
		this.delegatedListeners = {};
		// so we are able to remove the listener
		this.boundPopStateHandler = this.popStateHandler.bind(this);

		// make modules accessible in instance
		this.cache = new _Cache2.default();
		this.cache.swup = this;
		this.loadPage = _loadPage2.default;
		this.renderPage = _renderPage2.default;
		this.triggerEvent = _triggerEvent2.default;
		this.on = _on2.default;
		this.off = _off2.default;
		this.updateTransition = _updateTransition2.default;
		this.getAnimationPromises = _getAnimationPromises2.default;
		this.getPageData = _getPageData2.default;
		this.getAnchorElement = _getAnchorElement2.default;
		this.log = function () {}; // here so it can be used by plugins
		this.use = _plugins.use;
		this.unuse = _plugins.unuse;
		this.findPlugin = _plugins.findPlugin;
		this.getCurrentUrl = _helpers.getCurrentUrl;
		this.cleanupAnimationClasses = _helpers.cleanupAnimationClasses;

		// enable swup
		this.enable();
	}

	_createClass(Swup, [{
		key: 'enable',
		value: function enable() {
			var _this = this;

			// check for Promise support
			if (typeof Promise === 'undefined') {
				console.warn('Promise is not supported');
				return;
			}

			// add event listeners
			this.delegatedListeners.click = (0, _delegateIt2.default)(document, this.options.linkSelector, 'click', this.linkClickHandler.bind(this));
			window.addEventListener('popstate', this.boundPopStateHandler);

			// initial save to cache
			if (this.options.cache) {}
			// disabled to avoid caching modified dom state
			// https://github.com/swup/swup/issues/475
			// logic moved to preload plugin


			// mark swup blocks in html
			(0, _helpers.markSwupElements)(document.documentElement, this.options.containers);

			// mount plugins
			this.options.plugins.forEach(function (plugin) {
				_this.use(plugin);
			});

			// modify initial history record
			window.history.replaceState(Object.assign({}, window.history.state, {
				url: window.location.href,
				random: Math.random(),
				source: 'swup'
			}), document.title, window.location.href);

			// trigger enabled event
			this.triggerEvent('enabled');

			// add swup-enabled class to html tag
			document.documentElement.classList.add('swup-enabled');

			// trigger page view event
			this.triggerEvent('pageView');
		}
	}, {
		key: 'destroy',
		value: function destroy() {
			var _this2 = this;

			// remove delegated listeners
			this.delegatedListeners.click.destroy();

			// remove popstate listener
			window.removeEventListener('popstate', this.boundPopStateHandler);

			// empty cache
			this.cache.empty();

			// unmount plugins
			this.options.plugins.forEach(function (plugin) {
				_this2.unuse(plugin);
			});

			// remove swup data atributes from blocks
			(0, _utils.queryAll)('[data-swup]').forEach(function (element) {
				element.removeAttribute('data-swup');
			});

			// remove handlers
			this.off();

			// trigger disable event
			this.triggerEvent('disabled');

			// remove swup-enabled class from html tag
			document.documentElement.classList.remove('swup-enabled');
		}
	}, {
		key: 'linkClickHandler',
		value: function linkClickHandler(event) {
			// no control key pressed
			if (!event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
				// index of pressed button needs to be checked because Firefox triggers click on all mouse buttons
				if (event.button === 0) {
					this.triggerEvent('clickLink', event);
					event.preventDefault();
					var link = new _helpers.Link(event.delegateTarget);
					if (link.getAddress() == (0, _helpers.getCurrentUrl)() || link.getAddress() == '') {
						// link to the same URL
						if (link.getHash() != '') {
							// link to the same URL with hash
							this.triggerEvent('samePageWithHash', event);
							var element = (0, _getAnchorElement2.default)(link.getHash());
							if (element != null) {
								history.replaceState({
									url: link.getAddress() + link.getHash(),
									random: Math.random(),
									source: 'swup'
								}, document.title, link.getAddress() + link.getHash());
							} else {
								// referenced element not found
								console.warn('Element for offset not found (' + link.getHash() + ')');
							}
						} else {
							// link to the same URL without hash
							this.triggerEvent('samePage', event);
						}
					} else {
						// link to different url
						if (link.getHash() != '') {
							this.scrollToElement = link.getHash();
						}

						// get custom transition from data
						var customTransition = event.delegateTarget.getAttribute('data-swup-transition');

						// load page
						this.loadPage({ url: link.getAddress(), customTransition: customTransition }, false);
					}
				}
			} else {
				// open in new tab (do nothing)
				this.triggerEvent('openPageInNewTab', event);
			}
		}
	}, {
		key: 'popStateHandler',
		value: function popStateHandler(event) {
			if (this.options.skipPopStateHandling(event)) return;
			var link = new _helpers.Link(event.state ? event.state.url : window.location.pathname);
			if (link.getHash() !== '') {
				this.scrollToElement = link.getHash();
			} else {
				event.preventDefault();
			}
			this.triggerEvent('popState', event);

			if (!this.options.animateHistoryBrowsing) {
				document.documentElement.classList.remove('is-animating');
				(0, _helpers.cleanupAnimationClasses)();
			}

			this.loadPage({ url: link.getAddress() }, event);
		}
	}]);

	return Swup;
}();

exports["default"] = Swup;

/***/ }),

/***/ "./node_modules/swup/lib/modules/Cache.js":
/*!************************************************!*\
  !*** ./node_modules/swup/lib/modules/Cache.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
exports.Cache = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _helpers = __webpack_require__(/*! ../helpers */ "./node_modules/swup/lib/helpers/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cache = exports.Cache = function () {
	function Cache() {
		_classCallCheck(this, Cache);

		this.pages = {};
		this.last = null;
	}

	_createClass(Cache, [{
		key: 'cacheUrl',
		value: function cacheUrl(page) {
			page.url = (0, _helpers.normalizeUrl)(page.url);
			if (page.url in this.pages === false) {
				this.pages[page.url] = page;
			}
			this.last = this.pages[page.url];
			this.swup.log('Cache (' + Object.keys(this.pages).length + ')', this.pages);
		}
	}, {
		key: 'getPage',
		value: function getPage(url) {
			url = (0, _helpers.normalizeUrl)(url);
			return this.pages[url];
		}
	}, {
		key: 'getCurrentPage',
		value: function getCurrentPage() {
			return this.getPage((0, _helpers.getCurrentUrl)());
		}
	}, {
		key: 'exists',
		value: function exists(url) {
			url = (0, _helpers.normalizeUrl)(url);
			return url in this.pages;
		}
	}, {
		key: 'empty',
		value: function empty() {
			this.pages = {};
			this.last = null;
			this.swup.log('Cache cleared');
		}
	}, {
		key: 'remove',
		value: function remove(url) {
			delete this.pages[url];
		}
	}]);

	return Cache;
}();

exports["default"] = Cache;

/***/ }),

/***/ "./node_modules/swup/lib/modules/getAnchorElement.js":
/*!***********************************************************!*\
  !*** ./node_modules/swup/lib/modules/getAnchorElement.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/swup/lib/utils/index.js");

var getAnchorElement = function getAnchorElement(hash) {
	if (!hash) {
		return null;
	}

	if (hash.charAt(0) === '#') {
		hash = hash.substring(1);
	}

	hash = decodeURIComponent(hash);
	hash = (0, _utils.escapeCssIdentifier)(hash);

	// https://html.spec.whatwg.org/#find-a-potential-indicated-element
	return (0, _utils.query)('#' + hash) || (0, _utils.query)('a[name=\'' + hash + '\']');
};

exports["default"] = getAnchorElement;

/***/ }),

/***/ "./node_modules/swup/lib/modules/getAnimationPromises.js":
/*!***************************************************************!*\
  !*** ./node_modules/swup/lib/modules/getAnimationPromises.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/swup/lib/utils/index.js");

var _helpers = __webpack_require__(/*! ../helpers */ "./node_modules/swup/lib/helpers/index.js");

var getAnimationPromises = function getAnimationPromises() {
	var selector = this.options.animationSelector;
	var durationProperty = (0, _helpers.transitionProperty)() + 'Duration';
	var promises = [];
	var animatedElements = (0, _utils.queryAll)(selector, document.body);

	if (!animatedElements.length) {
		console.warn('[swup] No animated elements found by selector ' + selector);
		return [Promise.resolve()];
	}

	animatedElements.forEach(function (element) {
		var transitionDuration = window.getComputedStyle(element)[durationProperty];
		// Resolve immediately if no transition defined
		if (!transitionDuration || transitionDuration == '0s') {
			console.warn('[swup] No CSS transition duration defined for element of selector ' + selector);
			promises.push(Promise.resolve());
			return;
		}
		var promise = new Promise(function (resolve) {
			element.addEventListener((0, _helpers.transitionEnd)(), function (event) {
				if (element == event.target) {
					resolve();
				}
			});
		});
		promises.push(promise);
	});

	return promises;
};

exports["default"] = getAnimationPromises;

/***/ }),

/***/ "./node_modules/swup/lib/modules/getPageData.js":
/*!******************************************************!*\
  !*** ./node_modules/swup/lib/modules/getPageData.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _helpers = __webpack_require__(/*! ../helpers */ "./node_modules/swup/lib/helpers/index.js");

var getPageData = function getPageData(request) {
	// this method can be replaced in case other content than html is expected to be received from server
	// this function should always return {title, pageClass, originalContent, blocks, responseURL}
	// in case page has invalid structure - return null
	var html = request.responseText;
	var pageObject = (0, _helpers.getDataFromHtml)(html, this.options.containers);

	if (pageObject) {
		pageObject.responseURL = request.responseURL ? request.responseURL : window.location.href;
	} else {
		console.warn('[swup] Received page is invalid.');
		return null;
	}

	return pageObject;
};

exports["default"] = getPageData;

/***/ }),

/***/ "./node_modules/swup/lib/modules/loadPage.js":
/*!***************************************************!*\
  !*** ./node_modules/swup/lib/modules/loadPage.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _helpers = __webpack_require__(/*! ../helpers */ "./node_modules/swup/lib/helpers/index.js");

var loadPage = function loadPage(data, popstate) {
	var _this = this;

	// create array for storing animation promises
	var animationPromises = [],
	    xhrPromise = void 0;
	var animateOut = function animateOut() {
		_this.triggerEvent('animationOutStart');

		// handle classes
		document.documentElement.classList.add('is-changing');
		document.documentElement.classList.add('is-leaving');
		document.documentElement.classList.add('is-animating');
		if (popstate) {
			document.documentElement.classList.add('is-popstate');
		}
		document.documentElement.classList.add('to-' + (0, _helpers.classify)(data.url));

		// animation promise stuff
		animationPromises = _this.getAnimationPromises('out');
		Promise.all(animationPromises).then(function () {
			_this.triggerEvent('animationOutDone');
		});

		// create history record if this is not a popstate call
		if (!popstate) {
			// create pop element with or without anchor
			var state = void 0;
			if (_this.scrollToElement != null) {
				state = data.url + _this.scrollToElement;
			} else {
				state = data.url;
			}

			(0, _helpers.createHistoryRecord)(state);
		}
	};

	this.triggerEvent('transitionStart', popstate);

	// set transition object
	if (data.customTransition != null) {
		this.updateTransition(window.location.pathname, data.url, data.customTransition);
		document.documentElement.classList.add('to-' + (0, _helpers.classify)(data.customTransition));
	} else {
		this.updateTransition(window.location.pathname, data.url);
	}

	// start/skip animation
	if (!popstate || this.options.animateHistoryBrowsing) {
		animateOut();
	} else {
		this.triggerEvent('animationSkipped');
	}

	// start/skip loading of page
	if (this.cache.exists(data.url)) {
		xhrPromise = new Promise(function (resolve) {
			resolve(_this.cache.getPage(data.url));
		});
		this.triggerEvent('pageRetrievedFromCache');
	} else {
		if (!this.preloadPromise || this.preloadPromise.route != data.url) {
			xhrPromise = new Promise(function (resolve, reject) {
				(0, _helpers.fetch)(_extends({}, data, { headers: _this.options.requestHeaders }), function (response) {
					if (response.status === 500) {
						_this.triggerEvent('serverError');
						reject(data.url);
						return;
					} else {
						// get json data
						var page = _this.getPageData(response);
						if (page != null && page.blocks.length > 0) {
							page.url = data.url;
						} else {
							reject(data.url);
							return;
						}
						// render page
						_this.cache.cacheUrl(page);
						_this.triggerEvent('pageLoaded');
						resolve(page);
					}
				});
			});
		} else {
			xhrPromise = this.preloadPromise;
		}
	}

	// when everything is ready, handle the outcome
	Promise.all([xhrPromise].concat(animationPromises)).then(function (_ref) {
		var _ref2 = _slicedToArray(_ref, 1),
		    pageData = _ref2[0];

		// render page
		_this.renderPage(pageData, popstate);
		_this.preloadPromise = null;
	}).catch(function (errorUrl) {
		// rewrite the skipPopStateHandling function to redirect manually when the history.go is processed
		_this.options.skipPopStateHandling = function () {
			window.location = errorUrl;
			return true;
		};

		// go back to the actual page were still at
		window.history.go(-1);
	});
};

exports["default"] = loadPage;

/***/ }),

/***/ "./node_modules/swup/lib/modules/off.js":
/*!**********************************************!*\
  !*** ./node_modules/swup/lib/modules/off.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
var off = function off(event, handler) {
	var _this = this;

	if (event != null) {
		if (handler != null) {
			if (this._handlers[event] && this._handlers[event].filter(function (savedHandler) {
				return savedHandler === handler;
			}).length) {
				var toRemove = this._handlers[event].filter(function (savedHandler) {
					return savedHandler === handler;
				})[0];
				var index = this._handlers[event].indexOf(toRemove);
				if (index > -1) {
					this._handlers[event].splice(index, 1);
				}
			} else {
				console.warn("Handler for event '" + event + "' no found.");
			}
		} else {
			this._handlers[event] = [];
		}
	} else {
		Object.keys(this._handlers).forEach(function (keys) {
			_this._handlers[keys] = [];
		});
	}
};

exports["default"] = off;

/***/ }),

/***/ "./node_modules/swup/lib/modules/on.js":
/*!*********************************************!*\
  !*** ./node_modules/swup/lib/modules/on.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
var on = function on(event, handler) {
	if (this._handlers[event]) {
		this._handlers[event].push(handler);
	} else {
		console.warn("Unsupported event " + event + ".");
	}
};

exports["default"] = on;

/***/ }),

/***/ "./node_modules/swup/lib/modules/plugins.js":
/*!**************************************************!*\
  !*** ./node_modules/swup/lib/modules/plugins.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
var use = exports.use = function use(plugin) {
	if (!plugin.isSwupPlugin) {
		console.warn('Not swup plugin instance ' + plugin + '.');
		return;
	}

	this.plugins.push(plugin);
	plugin.swup = this;
	if (typeof plugin._beforeMount === 'function') {
		plugin._beforeMount();
	}
	plugin.mount();

	return this.plugins;
};

var unuse = exports.unuse = function unuse(plugin) {
	var pluginReference = void 0;

	if (typeof plugin === 'string') {
		pluginReference = this.plugins.find(function (p) {
			return plugin === p.name;
		});
	} else {
		pluginReference = plugin;
	}

	if (!pluginReference) {
		console.warn('No such plugin.');
		return;
	}

	pluginReference.unmount();

	if (typeof pluginReference._afterUnmount === 'function') {
		pluginReference._afterUnmount();
	}

	var index = this.plugins.indexOf(pluginReference);
	this.plugins.splice(index, 1);

	return this.plugins;
};

var findPlugin = exports.findPlugin = function findPlugin(pluginName) {
	return this.plugins.find(function (p) {
		return pluginName === p.name;
	});
};

/***/ }),

/***/ "./node_modules/swup/lib/modules/renderPage.js":
/*!*****************************************************!*\
  !*** ./node_modules/swup/lib/modules/renderPage.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _helpers = __webpack_require__(/*! ../helpers */ "./node_modules/swup/lib/helpers/index.js");

var renderPage = function renderPage(page, popstate) {
	var _this = this;

	document.documentElement.classList.remove('is-leaving');

	var isCurrentPage = this.getCurrentUrl() === page.url;
	if (!isCurrentPage) return;

	// replace state in case the url was redirected
	var url = new _helpers.Link(page.responseURL).getPath();
	if (window.location.pathname !== url) {
		window.history.replaceState({
			url: url,
			random: Math.random(),
			source: 'swup'
		}, document.title, url);

		// save new record for redirected url
		this.cache.cacheUrl(_extends({}, page, { url: url }));
	}

	// only add for non-popstate transitions
	if (!popstate || this.options.animateHistoryBrowsing) {
		document.documentElement.classList.add('is-rendering');
	}

	this.triggerEvent('willReplaceContent', popstate);
	// replace blocks
	for (var i = 0; i < page.blocks.length; i++) {
		document.body.querySelector('[data-swup="' + i + '"]').outerHTML = page.blocks[i];
	}
	// set title
	document.title = page.title;
	this.triggerEvent('contentReplaced', popstate);
	this.triggerEvent('pageView', popstate);

	// empty cache if it's disabled (because pages could be preloaded and stuff)
	if (!this.options.cache) {
		this.cache.empty();
	}

	// start animation IN
	setTimeout(function () {
		if (!popstate || _this.options.animateHistoryBrowsing) {
			_this.triggerEvent('animationInStart');
			document.documentElement.classList.remove('is-animating');
		}
	}, 10);

	// handle end of animation
	if (!popstate || this.options.animateHistoryBrowsing) {
		var animationPromises = this.getAnimationPromises('in');
		Promise.all(animationPromises).then(function () {
			_this.triggerEvent('animationInDone');
			_this.triggerEvent('transitionEnd', popstate);
			_this.cleanupAnimationClasses();
		});
	} else {
		this.triggerEvent('transitionEnd', popstate);
	}

	// reset scroll-to element
	this.scrollToElement = null;
};

exports["default"] = renderPage;

/***/ }),

/***/ "./node_modules/swup/lib/modules/triggerEvent.js":
/*!*******************************************************!*\
  !*** ./node_modules/swup/lib/modules/triggerEvent.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
var triggerEvent = function triggerEvent(eventName, originalEvent) {
	// call saved handlers with "on" method and pass originalEvent object if available
	this._handlers[eventName].forEach(function (handler) {
		try {
			handler(originalEvent);
		} catch (error) {
			console.error(error);
		}
	});

	// trigger event on document with prefix "swup:"
	var event = new CustomEvent('swup:' + eventName, { detail: eventName });
	document.dispatchEvent(event);
};

exports["default"] = triggerEvent;

/***/ }),

/***/ "./node_modules/swup/lib/modules/updateTransition.js":
/*!***********************************************************!*\
  !*** ./node_modules/swup/lib/modules/updateTransition.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
var updateTransition = function updateTransition(from, to, custom) {
	// transition routes
	this.transition = {
		from: from,
		to: to,
		custom: custom
	};
};

exports["default"] = updateTransition;

/***/ }),

/***/ "./node_modules/swup/lib/utils/index.js":
/*!**********************************************!*\
  !*** ./node_modules/swup/lib/utils/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
var query = exports.query = function query(selector) {
	var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

	if (typeof selector !== 'string') {
		return selector;
	}

	return context.querySelector(selector);
};

var queryAll = exports.queryAll = function queryAll(selector) {
	var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

	if (typeof selector !== 'string') {
		return selector;
	}

	return Array.prototype.slice.call(context.querySelectorAll(selector));
};

var escapeCssIdentifier = exports.escapeCssIdentifier = function escapeCssIdentifier(ident) {
	if (window.CSS && window.CSS.escape) {
		return CSS.escape(ident);
	} else {
		return ident;
	}
};

/***/ }),

/***/ "./node_modules/delegate-it/index.js":
/*!*******************************************!*\
  !*** ./node_modules/delegate-it/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Keeps track of raw listeners added to the base elements to avoid duplication */
const ledger = new WeakMap();
function editLedger(wanted, baseElement, callback, setup) {
    var _a, _b;
    if (!wanted && !ledger.has(baseElement)) {
        return false;
    }
    const elementMap = (_a = ledger.get(baseElement)) !== null && _a !== void 0 ? _a : new WeakMap();
    ledger.set(baseElement, elementMap);
    if (!wanted && !ledger.has(baseElement)) {
        return false;
    }
    const setups = (_b = elementMap.get(callback)) !== null && _b !== void 0 ? _b : new Set();
    elementMap.set(callback, setups);
    const existed = setups.has(setup);
    if (wanted) {
        setups.add(setup);
    }
    else {
        setups.delete(setup);
    }
    return existed && wanted;
}
function isEventTarget(elements) {
    return typeof elements.addEventListener === 'function';
}
function safeClosest(event, selector) {
    let target = event.target;
    if (target instanceof Text) {
        target = target.parentElement;
    }
    if (target instanceof Element && event.currentTarget instanceof Element) {
        // `.closest()` may match ancestors of `currentTarget` but we only need its children
        const closest = target.closest(selector);
        if (closest && event.currentTarget.contains(closest)) {
            return closest;
        }
    }
}
// This type isn't exported as a declaration, so it needs to be duplicated above
function delegate(base, selector, type, callback, options) {
    // Handle Selector-based usage
    if (typeof base === 'string') {
        base = document.querySelectorAll(base);
    }
    // Handle Array-like based usage
    if (!isEventTarget(base)) {
        const subscriptions = Array.prototype.map.call(base, (element) => delegate(element, selector, type, callback, options));
        return {
            destroy() {
                for (const subscription of subscriptions) {
                    subscription.destroy();
                }
            },
        };
    }
    // `document` should never be the base, it's just an easy way to define "global event listeners"
    const baseElement = base instanceof Document ? base.documentElement : base;
    // Handle the regular Element usage
    const capture = Boolean(typeof options === 'object' ? options.capture : options);
    const listenerFn = (event) => {
        const delegateTarget = safeClosest(event, selector);
        if (delegateTarget) {
            event.delegateTarget = delegateTarget;
            callback.call(baseElement, event);
        }
    };
    // Drop unsupported `once` option https://github.com/fregante/delegate-it/pull/28#discussion_r863467939
    if (typeof options === 'object') {
        delete options.once;
    }
    const setup = JSON.stringify({ selector, type, capture });
    const isAlreadyListening = editLedger(true, baseElement, callback, setup);
    const delegateSubscription = {
        destroy() {
            baseElement.removeEventListener(type, listenerFn, options);
            editLedger(false, baseElement, callback, setup);
        },
    };
    if (!isAlreadyListening) {
        baseElement.addEventListener(type, listenerFn, options);
    }
    return delegateSubscription;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (delegate);


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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************!*\
  !*** ./js/blog.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var minimasonry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! minimasonry */ "./node_modules/minimasonry/build/minimasonry.esm.js");
/* harmony import */ var swup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swup */ "./node_modules/swup/lib/index.js");
/* harmony import */ var _swup_fade_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swup/fade-theme */ "./node_modules/@swup/fade-theme/lib/index.js");
/* harmony import */ var _swup_fade_theme__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_swup_fade_theme__WEBPACK_IMPORTED_MODULE_2__);



function freeMasons() {
  var masonry = new minimasonry__WEBPACK_IMPORTED_MODULE_0__["default"]({
    container: '.blog-articles',
    gutter: 16,
    basewidth: 294
  });
  masonry.layout();
}
var swup = new swup__WEBPACK_IMPORTED_MODULE_1__["default"]({
  linkSelector: 'a.taglink',
  plugins: [new (_swup_fade_theme__WEBPACK_IMPORTED_MODULE_2___default())()]
});
function init() {
  freeMasons();
  tagLine();
}
swup.on('contentReplaced', init);
document.addEventListener("DOMContentLoaded", function () {
  freeMasons();
  tagLine();
});
function tagLine() {
  var conta = document.querySelector('#swup');
  var currentTag = conta.dataset.tag;
  if (currentTag != 'all') {
    if (document.querySelector('.shopify-section.image_banner')) {
      document.querySelector('.shopify-section.image_banner').classList.add('visually-hidden');
    }
    if (document.querySelector('.blog_intro')) {
      document.querySelector('.blog_intro').classList.add('visually-hidden');
    }
    if (document.body.classList.contains("white_logo")) {
      document.body.classList.remove("white_logo");
      document.body.classList.add("white_logo_hidden");
    }
  } else {
    if (document.querySelector('.shopify-section.image_banner')) {
      document.querySelector('.shopify-section.image_banner').classList.remove('visually-hidden');
    }
    if (document.querySelector('.blog_intro')) {
      document.querySelector('.blog_intro').classList.remove('visually-hidden');
    }
    if (document.body.classList.contains("white_logo_hidden")) {
      document.body.classList.add("white_logo");
      document.body.classList.remove("white_logo_hidden");
    }
  }
  document.querySelectorAll('.article_tags a').forEach(function (tagNav) {
    if (tagNav.dataset.tag == currentTag) {
      tagNav.classList.add('active');
    } else {
      tagNav.classList.remove('active');
    }
  });
}
})();

/******/ })()
;