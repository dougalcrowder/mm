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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0wsSUFBR1IsUUFBUSxDQUFDRyxhQUFhLENBQUMsK0JBQStCLENBQUMsRUFBRTtNQUMxREgsUUFBUSxDQUFDRyxhQUFhLENBQUMsK0JBQStCLENBQUMsQ0FBQ0ksU0FBUyxDQUFDSSxNQUFNLENBQUMsaUJBQWlCLENBQUM7SUFDN0Y7SUFDQSxJQUFHWCxRQUFRLENBQUNHLGFBQWEsQ0FBQyxhQUFhLENBQUMsRUFBRTtNQUN4Q0gsUUFBUSxDQUFDRyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUNJLFNBQVMsQ0FBQ0ksTUFBTSxDQUFDLGlCQUFpQixDQUFDO0lBQzNFO0lBQ0EsSUFBR1gsUUFBUSxDQUFDUyxJQUFJLENBQUNGLFNBQVMsQ0FBQ0csUUFBUSxDQUFDLG1CQUFtQixDQUFDLEVBQUU7TUFDeERWLFFBQVEsQ0FBQ1MsSUFBSSxDQUFDRixTQUFTLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7TUFDekNSLFFBQVEsQ0FBQ1MsSUFBSSxDQUFDRixTQUFTLENBQUNJLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztJQUNyRDtFQUNGO0VBQ0FYLFFBQVEsQ0FBQ1ksZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsQ0FBQ0MsT0FBTyxDQUFFLFVBQVNDLE1BQU0sRUFBRTtJQUNyRSxJQUFHQSxNQUFNLENBQUNULE9BQU8sQ0FBQ0MsR0FBRyxJQUFJRixVQUFVLEVBQUU7TUFDbkNVLE1BQU0sQ0FBQ1AsU0FBUyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO0lBQ2hDLENBQUMsTUFBTTtNQUNMTSxNQUFNLENBQUNQLFNBQVMsQ0FBQ0ksTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUNuQztFQUNGLENBQUMsQ0FBQztBQUVKLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tbS8uL25vZGVfbW9kdWxlcy9Ac3d1cC9mYWRlLXRoZW1lL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9tbS8uL25vZGVfbW9kdWxlcy9taW5pbWFzb25yeS9idWlsZC9taW5pbWFzb25yeS5lc20uanMiLCJ3ZWJwYWNrOi8vbW0vLi9ub2RlX21vZHVsZXMvc3d1cC9saWIvaGVscGVycy9MaW5rLmpzIiwid2VicGFjazovL21tLy4vbm9kZV9tb2R1bGVzL3N3dXAvbGliL2hlbHBlcnMvY2xhc3NpZnkuanMiLCJ3ZWJwYWNrOi8vbW0vLi9ub2RlX21vZHVsZXMvc3d1cC9saWIvaGVscGVycy9jbGVhbnVwQW5pbWF0aW9uQ2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly9tbS8uL25vZGVfbW9kdWxlcy9zd3VwL2xpYi9oZWxwZXJzL2NyZWF0ZUhpc3RvcnlSZWNvcmQuanMiLCJ3ZWJwYWNrOi8vbW0vLi9ub2RlX21vZHVsZXMvc3d1cC9saWIvaGVscGVycy9mZXRjaC5qcyIsIndlYnBhY2s6Ly9tbS8uL25vZGVfbW9kdWxlcy9zd3VwL2xpYi9oZWxwZXJzL2dldEN1cnJlbnRVcmwuanMiLCJ3ZWJwYWNrOi8vbW0vLi9ub2RlX21vZHVsZXMvc3d1cC9saWIvaGVscGVycy9nZXREYXRhRnJvbUh0bWwuanMiLCJ3ZWJwYWNrOi8vbW0vLi9ub2RlX21vZHVsZXMvc3d1cC9saWIvaGVscGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9tbS8uL25vZGVfbW9kdWxlcy9zd3VwL2xpYi9oZWxwZXJzL21hcmtTd3VwRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vbW0vLi9ub2RlX21vZHVsZXMvc3d1cC9saWIvaGVscGVycy9ub3JtYWxpemVVcmwuanMiLCJ3ZWJwYWNrOi8vbW0vLi9ub2RlX21vZHVsZXMvc3d1cC9saWIvaGVscGVycy90cmFuc2l0aW9uRW5kLmpzIiwid2VicGFjazovL21tLy4vbm9kZV9tb2R1bGVzL3N3dXAvbGliL2hlbHBlcnMvdHJhbnNpdGlvblByb3BlcnR5LmpzIiwid2VicGFjazovL21tLy4vbm9kZV9tb2R1bGVzL3N3dXAvbGliL2luZGV4LmpzIiwid2VicGFjazovL21tLy4vbm9kZV9tb2R1bGVzL3N3dXAvbGliL21vZHVsZXMvQ2FjaGUuanMiLCJ3ZWJwYWNrOi8vbW0vLi9ub2RlX21vZHVsZXMvc3d1cC9saWIvbW9kdWxlcy9nZXRBbmNob3JFbGVtZW50LmpzIiwid2VicGFjazovL21tLy4vbm9kZV9tb2R1bGVzL3N3dXAvbGliL21vZHVsZXMvZ2V0QW5pbWF0aW9uUHJvbWlzZXMuanMiLCJ3ZWJwYWNrOi8vbW0vLi9ub2RlX21vZHVsZXMvc3d1cC9saWIvbW9kdWxlcy9nZXRQYWdlRGF0YS5qcyIsIndlYnBhY2s6Ly9tbS8uL25vZGVfbW9kdWxlcy9zd3VwL2xpYi9tb2R1bGVzL2xvYWRQYWdlLmpzIiwid2VicGFjazovL21tLy4vbm9kZV9tb2R1bGVzL3N3dXAvbGliL21vZHVsZXMvb2ZmLmpzIiwid2VicGFjazovL21tLy4vbm9kZV9tb2R1bGVzL3N3dXAvbGliL21vZHVsZXMvb24uanMiLCJ3ZWJwYWNrOi8vbW0vLi9ub2RlX21vZHVsZXMvc3d1cC9saWIvbW9kdWxlcy9wbHVnaW5zLmpzIiwid2VicGFjazovL21tLy4vbm9kZV9tb2R1bGVzL3N3dXAvbGliL21vZHVsZXMvcmVuZGVyUGFnZS5qcyIsIndlYnBhY2s6Ly9tbS8uL25vZGVfbW9kdWxlcy9zd3VwL2xpYi9tb2R1bGVzL3RyaWdnZXJFdmVudC5qcyIsIndlYnBhY2s6Ly9tbS8uL25vZGVfbW9kdWxlcy9zd3VwL2xpYi9tb2R1bGVzL3VwZGF0ZVRyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vbW0vLi9ub2RlX21vZHVsZXMvc3d1cC9saWIvdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbW0vLi9ub2RlX21vZHVsZXMvZGVsZWdhdGUtaXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbW0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbW0vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbW0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21tL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbW0vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tbS8uL2pzL2Jsb2cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiU3d1cEZhZGVUaGVtZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJTd3VwRmFkZVRoZW1lXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgX2luZGV4ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxudmFyIF9pbmRleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmRleCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbm1vZHVsZS5leHBvcnRzID0gX2luZGV4Mi5kZWZhdWx0OyAvLyB0aGlzIGlzIGhlcmUgZm9yIHdlYnBhY2sgdG8gZXhwb3NlIFN3dXBUaGVtZSBhcyB3aW5kb3cuU3d1cFRoZW1lXG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3RoZW1lID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxudmFyIF90aGVtZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90aGVtZSk7XG5cbnZhciBfaW5kZXggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXG52YXIgX2luZGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luZGV4KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgRmFkZVRoZW1lID0gZnVuY3Rpb24gKF9UaGVtZSkge1xuXHRfaW5oZXJpdHMoRmFkZVRoZW1lLCBfVGhlbWUpO1xuXG5cdGZ1bmN0aW9uIEZhZGVUaGVtZShvcHRpb25zKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZhZGVUaGVtZSk7XG5cblx0XHR2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoRmFkZVRoZW1lLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRmFkZVRoZW1lKSkuY2FsbCh0aGlzKSk7XG5cblx0XHRfdGhpcy5uYW1lID0gJ0ZhZGVUaGVtZSc7XG5cblxuXHRcdHZhciBkZWZhdWx0T3B0aW9ucyA9IHtcblx0XHRcdG1haW5FbGVtZW50OiAnI3N3dXAnXG5cdFx0fTtcblxuXHRcdF90aGlzLm9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuXHRcdHJldHVybiBfdGhpcztcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhGYWRlVGhlbWUsIFt7XG5cdFx0a2V5OiAnbW91bnQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBtb3VudCgpIHtcblx0XHRcdHRoaXMuYXBwbHlTdHlsZXMoX2luZGV4Mi5kZWZhdWx0KTtcblx0XHRcdHRoaXMuYWRkQ2xhc3NOYW1lKHRoaXMub3B0aW9ucy5tYWluRWxlbWVudCwgJ21haW4nKTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gRmFkZVRoZW1lO1xufShfdGhlbWUyLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBGYWRlVGhlbWU7XG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgVGhlbWUgPSBmdW5jdGlvbiAoKSB7XG5cdGZ1bmN0aW9uIFRoZW1lKCkge1xuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGhlbWUpO1xuXG5cdFx0dGhpcy5fYWRkZWRTdHlsZUVsZW1lbnRzID0gW107XG5cdFx0dGhpcy5fYWRkZWRIVE1MQ29udGVudCA9IFtdO1xuXHRcdHRoaXMuX2NsYXNzTmFtZUFkZGVkVG9FbGVtZW50cyA9IFtdO1xuXG5cdFx0dGhpcy5fYWRkQ2xhc3NOYW1lVG9FbGVtZW50ID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0X3RoaXMuX2NsYXNzTmFtZUFkZGVkVG9FbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHRcdHZhciBlbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoaXRlbS5zZWxlY3RvcikpO1xuXHRcdFx0XHRlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdFx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzd3VwLXRyYW5zaXRpb24tJyArIGl0ZW0ubmFtZSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdHRoaXMuaXNTd3VwUGx1Z2luID0gdHJ1ZTtcblx0fVxuXG5cdF9jcmVhdGVDbGFzcyhUaGVtZSwgW3tcblx0XHRrZXk6ICdfYmVmb3JlTW91bnQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBfYmVmb3JlTW91bnQoKSB7XG5cdFx0XHQvLyBzYXZlIG9yaWdpbmFsIGFuZCByZXBsYWNlIGFuaW1hdGlvblNlbGVjdG9yIG9wdGlvblxuXHRcdFx0dGhpcy5fb3JpZ2luYWxBbmltYXRpb25TZWxlY3Rvck9wdGlvbiA9IFN0cmluZyh0aGlzLnN3dXAub3B0aW9ucy5hbmltYXRpb25TZWxlY3Rvcik7XG5cdFx0XHR0aGlzLnN3dXAub3B0aW9ucy5hbmltYXRpb25TZWxlY3RvciA9ICdbY2xhc3MqPVwic3d1cC10cmFuc2l0aW9uLVwiXSc7XG5cblx0XHRcdC8vIGFkZCBjbGFzc2VzIGFmdGVyIGVhY2ggY29udGVudCByZXBsYWNlXG5cdFx0XHR0aGlzLnN3dXAub24oJ2NvbnRlbnRSZXBsYWNlZCcsIHRoaXMuX2FkZENsYXNzTmFtZVRvRWxlbWVudCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnX2FmdGVyVW5tb3VudCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIF9hZnRlclVubW91bnQoKSB7XG5cdFx0XHQvLyByZXNldCBhbmltYXRpb25TZWxlY3RvciBvcHRpb25cblx0XHRcdHRoaXMuc3d1cC5vcHRpb25zLmFuaW1hdGlvblNlbGVjdG9yID0gdGhpcy5fb3JpZ2luYWxBbmltYXRpb25TZWxlY3Rvck9wdGlvbjtcblxuXHRcdFx0Ly8gcmVtb3ZlIGFkZGVkIHN0eWxlc1xuXHRcdFx0dGhpcy5fYWRkZWRTdHlsZUVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcblx0XHRcdFx0ZWxlbWVudC5vdXRlckhUTUwgPSAnJztcblx0XHRcdFx0ZWxlbWVudCA9IG51bGw7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gcmVtb3ZlIGFkZGVkIEhUTUxcblx0XHRcdHRoaXMuX2FkZGVkSFRNTENvbnRlbnQuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuXHRcdFx0XHRlbGVtZW50Lm91dGVySFRNTCA9ICcnO1xuXHRcdFx0XHRlbGVtZW50ID0gbnVsbDtcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyByZW1vdmUgYWRkZWQgY2xhc3NuYW1lc1xuXHRcdFx0dGhpcy5fY2xhc3NOYW1lQWRkZWRUb0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdFx0dmFyIGVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChpdGVtLnNlbGVjdG9yKSk7XG5cdFx0XHRcdGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcblx0XHRcdFx0XHRlbGVtZW50LmNsYXNzTmFtZS5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKGNsYXNzSXRlbSkge1xuXHRcdFx0XHRcdFx0aWYgKG5ldyBSZWdFeHAoJ15zd3VwLXRyYW5zaXRpb24tJykudGVzdChjbGFzc0l0ZW0pKSB7XG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc0l0ZW0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLnN3dXAub2ZmKCdjb250ZW50UmVwbGFjZWQnLCB0aGlzLl9hZGRDbGFzc05hbWVUb0VsZW1lbnQpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ21vdW50Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gbW91bnQoKSB7XG5cdFx0XHQvLyB0aGlzIGlzIG1vdW50IG1ldGhvZCByZXdyaXR0ZW4gYnkgY2xhc3MgZXh0ZW5kaW5nXG5cdFx0XHQvLyBhbmQgaXMgZXhlY3V0ZWQgd2hlbiBzd3VwIGlzIGVuYWJsZWQgd2l0aCB0aGVtZVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3VubW91bnQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiB1bm1vdW50KCkge1xuXHRcdFx0Ly8gdGhpcyBpcyB1bm1vdW50IG1ldGhvZCByZXdyaXR0ZW4gYnkgY2xhc3MgZXh0ZW5kaW5nXG5cdFx0XHQvLyBhbmQgaXMgZXhlY3V0ZWQgd2hlbiBzd3VwIHdpdGggdGhlbWUgaXMgZGlzYWJsZWRcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdhcHBseVN0eWxlcycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGFwcGx5U3R5bGVzKHN0eWxlcykge1xuXHRcdFx0dmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkO1xuXHRcdFx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuXHRcdFx0c3R5bGUuc2V0QXR0cmlidXRlKCdkYXRhLXN3dXAtdGhlbWUnLCAnJyk7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzdHlsZXMpKTtcblxuXHRcdFx0dGhpcy5fYWRkZWRTdHlsZUVsZW1lbnRzLnB1c2goc3R5bGUpO1xuXHRcdFx0aGVhZC5wcmVwZW5kKHN0eWxlKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdhcHBseUhUTUwnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBhcHBseUhUTUwoY29udGVudCkge1xuXHRcdFx0dmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdGVsZW1lbnQuaW5uZXJIVE1MID0gY29udGVudDtcblx0XHRcdHRoaXMuX2FkZGVkSFRNTENvbnRlbnQucHVzaChlbGVtZW50KTtcblx0XHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnYWRkQ2xhc3NOYW1lJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gYWRkQ2xhc3NOYW1lKHNlbGVjdG9yLCBuYW1lKSB7XG5cdFx0XHQvLyBzYXZlIHNvIGl0IGNhbiBiZSBsYXRlciByZW1vdmVkXG5cdFx0XHR0aGlzLl9jbGFzc05hbWVBZGRlZFRvRWxlbWVudHMucHVzaCh7IHNlbGVjdG9yOiBzZWxlY3RvciwgbmFtZTogbmFtZSB9KTtcblxuXHRcdFx0Ly8gYWRkIGNsYXNzIHRoZSBmaXJzdCB0aW1lXG5cdFx0XHR0aGlzLl9hZGRDbGFzc05hbWVUb0VsZW1lbnQoKTtcblx0XHR9XG5cblx0XHQvLyB0aGlzIGlzIGhlcmUgc28gd2UgY2FuIHRlbGwgaWYgcGx1Z2luIHdhcyBjcmVhdGVkIGJ5IGV4dGVuZGluZyB0aGlzIGNsYXNzXG5cblx0fV0pO1xuXG5cdHJldHVybiBUaGVtZTtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVGhlbWU7XG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaSwgXCIuc3d1cC10cmFuc2l0aW9uLW1haW4ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC40cztcXG59XFxuXFxuaHRtbC5pcy1hbmltYXRpbmcgLnN3dXAtdHJhbnNpdGlvbi1tYWluIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XCIsIFwiXCJdKTtcblxuXG5cbi8qKiovIH0pLFxuLyogNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiAnQG1lZGlhICcgKyBpdGVtWzJdICsgJ3snICsgY29udGVudCArICd9JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSAnKCcgKyBpdGVtWzJdICsgJykgYW5kICgnICsgbWVkaWFRdWVyeSArICcpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJztcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcbiAgcmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cblxuLyoqKi8gfSlcbi8qKioqKiovIF0pO1xufSk7IiwidmFyIE1pbmlNYXNvbnJ5ID0gZnVuY3Rpb24oY29uZikge1xuICAgIHRoaXMuX3NpemVzICAgICAgICAgICAgID0gW107XG4gICAgdGhpcy5fY29sdW1ucyAgICAgICAgICAgPSBbXTtcbiAgICB0aGlzLl9jb250YWluZXIgICAgICAgICA9IG51bGw7XG4gICAgdGhpcy5fY291bnQgICAgICAgICAgICAgPSBudWxsO1xuICAgIHRoaXMuX3dpZHRoICAgICAgICAgICAgID0gMDtcbiAgICB0aGlzLl9yZW1vdmVMaXN0ZW5lciAgICA9IG51bGw7XG4gICAgdGhpcy5fY3VycmVudEd1dHRlclggICAgPSBudWxsO1xuICAgIHRoaXMuX2N1cnJlbnRHdXR0ZXJZICAgID0gbnVsbDtcblxuICAgIHRoaXMuX3Jlc2l6ZVRpbWVvdXQgPSBudWxsLFxuXG4gICAgdGhpcy5jb25mID0ge1xuICAgICAgICBiYXNlV2lkdGg6IDI1NSxcbiAgICAgICAgZ3V0dGVyWDogbnVsbCxcbiAgICAgICAgZ3V0dGVyWTogbnVsbCxcbiAgICAgICAgZ3V0dGVyOiAxMCxcbiAgICAgICAgY29udGFpbmVyOiBudWxsLFxuICAgICAgICBtaW5pZnk6IHRydWUsXG4gICAgICAgIHVsdGltYXRlR3V0dGVyOiA1LFxuICAgICAgICBzdXJyb3VuZGluZ0d1dHRlcjogdHJ1ZSxcbiAgICAgICAgZGlyZWN0aW9uOiAnbHRyJyxcbiAgICAgICAgd2VkZ2U6IGZhbHNlXG4gICAgfTtcblxuICAgIHRoaXMuaW5pdChjb25mKTtcblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuTWluaU1hc29ucnkucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbihjb25mKSB7XG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLmNvbmYpIHtcbiAgICAgICAgaWYgKGNvbmZbaV0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZbaV0gPSBjb25mW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29uZi5ndXR0ZXJYID09IG51bGwgfHwgdGhpcy5jb25mLmd1dHRlclkgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmNvbmYuZ3V0dGVyWCA9IHRoaXMuY29uZi5ndXR0ZXJZID0gdGhpcy5jb25mLmd1dHRlcjtcbiAgICB9XG4gICAgdGhpcy5fY3VycmVudEd1dHRlclggPSB0aGlzLmNvbmYuZ3V0dGVyWDtcbiAgICB0aGlzLl9jdXJyZW50R3V0dGVyWSA9IHRoaXMuY29uZi5ndXR0ZXJZO1xuXG4gICAgdGhpcy5fY29udGFpbmVyID0gdHlwZW9mIHRoaXMuY29uZi5jb250YWluZXIgPT0gJ29iamVjdCcgJiYgdGhpcy5jb25mLmNvbnRhaW5lci5ub2RlTmFtZSA/XG4gICAgICAgIHRoaXMuY29uZi5jb250YWluZXIgOlxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuY29uZi5jb250YWluZXIpO1xuXG4gICAgaWYgKCF0aGlzLl9jb250YWluZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb250YWluZXIgbm90IGZvdW5kIG9yIG1pc3NpbmcnKTtcbiAgICB9XG5cbiAgICB2YXIgb25SZXNpemUgPSB0aGlzLnJlc2l6ZVRocm90dGxlci5iaW5kKHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIG9uUmVzaXplKTtcbiAgICB0aGlzLl9yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBvblJlc2l6ZSk7XG4gICAgICAgIGlmICh0aGlzLl9yZXNpemVUaW1lb3V0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5fcmVzaXplVGltZW91dCk7XG4gICAgICAgICAgICB0aGlzLl9yZXNpemVUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLmxheW91dCgpO1xufTtcblxuTWluaU1hc29ucnkucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fc2l6ZXMgICA9IFtdO1xuICAgIHRoaXMuX2NvbHVtbnMgPSBbXTtcbiAgICB0aGlzLl9jb3VudCAgID0gbnVsbDtcbiAgICB0aGlzLl93aWR0aCAgID0gdGhpcy5fY29udGFpbmVyLmNsaWVudFdpZHRoO1xuICAgIHZhciBtaW5XaWR0aCAgPSB0aGlzLmNvbmYuYmFzZVdpZHRoO1xuICAgIGlmICh0aGlzLl93aWR0aCA8IG1pbldpZHRoKSB7XG4gICAgICAgIHRoaXMuX3dpZHRoID0gbWluV2lkdGg7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5zdHlsZS5taW5XaWR0aCA9IG1pbldpZHRoICsgJ3B4JztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5nZXRDb3VudCgpID09IDEpIHtcbiAgICAgICAgLy8gU2V0IHVsdGltYXRlIGd1dHRlciB3aGVuIG9ubHkgb25lIGNvbHVtbiBpcyBkaXNwbGF5ZWRcbiAgICAgICAgdGhpcy5fY3VycmVudEd1dHRlclggPSB0aGlzLmNvbmYudWx0aW1hdGVHdXR0ZXI7XG4gICAgICAgIC8vIEFzIGd1dHRlcnMgYXJlIHJlZHVjZWQsIHR3byBjb2x1bW4gbWF5IGZpdCwgZm9yY2luZyB0byAxXG4gICAgICAgIHRoaXMuX2NvdW50ID0gMTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3dpZHRoIDwgKHRoaXMuY29uZi5iYXNlV2lkdGggKyAoMiAqIHRoaXMuX2N1cnJlbnRHdXR0ZXJYKSkpIHtcbiAgICAgICAgLy8gUmVtb3ZlIGd1dHRlciB3aGVuIHNjcmVlbiBpcyB0byBsb3dcbiAgICAgICAgdGhpcy5fY3VycmVudEd1dHRlclggPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRHdXR0ZXJYID0gdGhpcy5jb25mLmd1dHRlclg7XG4gICAgfVxufTtcblxuTWluaU1hc29ucnkucHJvdG90eXBlLmdldENvdW50ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuY29uZi5zdXJyb3VuZGluZ0d1dHRlcikge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcigodGhpcy5fd2lkdGggLSB0aGlzLl9jdXJyZW50R3V0dGVyWCkgLyAodGhpcy5jb25mLmJhc2VXaWR0aCArIHRoaXMuX2N1cnJlbnRHdXR0ZXJYKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoKHRoaXMuX3dpZHRoICsgdGhpcy5fY3VycmVudEd1dHRlclgpIC8gKHRoaXMuY29uZi5iYXNlV2lkdGggKyB0aGlzLl9jdXJyZW50R3V0dGVyWCkpO1xufTtcblxuTWluaU1hc29ucnkucHJvdG90eXBlLmNvbXB1dGVXaWR0aCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB3aWR0aDtcbiAgICBpZiAodGhpcy5jb25mLnN1cnJvdW5kaW5nR3V0dGVyKSB7XG4gICAgICAgIHdpZHRoID0gKCh0aGlzLl93aWR0aCAtIHRoaXMuX2N1cnJlbnRHdXR0ZXJYKSAvIHRoaXMuX2NvdW50KSAtIHRoaXMuX2N1cnJlbnRHdXR0ZXJYO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdpZHRoID0gKCh0aGlzLl93aWR0aCArIHRoaXMuX2N1cnJlbnRHdXR0ZXJYKSAvIHRoaXMuX2NvdW50KSAtIHRoaXMuX2N1cnJlbnRHdXR0ZXJYO1xuICAgIH1cbiAgICB3aWR0aCA9IE51bWJlci5wYXJzZUZsb2F0KHdpZHRoLnRvRml4ZWQoMikpO1xuXG4gICAgcmV0dXJuIHdpZHRoO1xufTtcblxuTWluaU1hc29ucnkucHJvdG90eXBlLmxheW91dCA9ICBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdDb250YWluZXIgbm90IGZvdW5kJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5yZXNldCgpO1xuXG4gICAgLy9Db21wdXRpbmcgY29sdW1ucyBjb3VudFxuICAgIGlmICh0aGlzLl9jb3VudCA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX2NvdW50ID0gdGhpcy5nZXRDb3VudCgpO1xuICAgIH1cbiAgICAvL0NvbXB1dGluZyBjb2x1bW5zIHdpZHRoXG4gICAgdmFyIGNvbFdpZHRoID0gdGhpcy5jb21wdXRlV2lkdGgoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fY291bnQ7IGkrKykge1xuICAgICAgICB0aGlzLl9jb2x1bW5zW2ldID0gMDtcbiAgICB9XG5cbiAgICAvL1NhdmluZyBjaGlsZHJlbiByZWFsIGhlaWdodHNcbiAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLl9jb250YWluZXIuY2hpbGRyZW47XG4gICAgZm9yICh2YXIgayA9IDA7azwgY2hpbGRyZW4ubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgLy8gU2V0IGNvbFdpZHRoIGJlZm9yZSByZXRyaWV2aW5nIGVsZW1lbnQgaGVpZ2h0IGlmIGNvbnRlbnQgaXMgcHJvcG9ydGlvbmFsXG4gICAgICAgIGNoaWxkcmVuW2tdLnN0eWxlLndpZHRoID0gY29sV2lkdGggKyAncHgnO1xuICAgICAgICB0aGlzLl9zaXplc1trXSA9IGNoaWxkcmVuW2tdLmNsaWVudEhlaWdodDtcbiAgICB9XG5cbiAgICB2YXIgc3RhcnRYO1xuICAgIGlmICh0aGlzLmNvbmYuZGlyZWN0aW9uID09ICdsdHInKSB7XG4gICAgICAgIHN0YXJ0WCA9IHRoaXMuY29uZi5zdXJyb3VuZGluZ0d1dHRlciA/IHRoaXMuX2N1cnJlbnRHdXR0ZXJYIDogMDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdGFydFggPSB0aGlzLl93aWR0aCAtICh0aGlzLmNvbmYuc3Vycm91bmRpbmdHdXR0ZXIgPyB0aGlzLl9jdXJyZW50R3V0dGVyWCA6IDApO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY291bnQgPiB0aGlzLl9zaXplcy5sZW5ndGgpIHtcbiAgICAgICAgLy9JZiBtb3JlIGNvbHVtbnMgdGhhbiBjaGlsZHJlblxuICAgICAgICB2YXIgb2NjdXBpZWRTcGFjZSA9ICh0aGlzLl9zaXplcy5sZW5ndGggKiAoY29sV2lkdGggKyB0aGlzLl9jdXJyZW50R3V0dGVyWCkpIC0gdGhpcy5fY3VycmVudEd1dHRlclg7XG4gICAgICAgIGlmICh0aGlzLmNvbmYud2VkZ2UgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25mLmRpcmVjdGlvbiA9PSAnbHRyJykge1xuICAgICAgICAgICAgICAgIHN0YXJ0WCA9ICgodGhpcy5fd2lkdGggLSBvY2N1cGllZFNwYWNlKSAvIDIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGFydFggPSB0aGlzLl93aWR0aCAtICgodGhpcy5fd2lkdGggLSBvY2N1cGllZFNwYWNlKSAvIDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29uZi5kaXJlY3Rpb24gPT0gJ2x0cicpIDsgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RhcnRYID0gdGhpcy5fd2lkdGggLSB0aGlzLl9jdXJyZW50R3V0dGVyWDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vQ29tcHV0aW5nIHBvc2l0aW9uIG9mIGNoaWxkcmVuXG4gICAgZm9yICh2YXIgaW5kZXggPSAwO2luZGV4IDwgY2hpbGRyZW4ubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIHZhciBuZXh0Q29sdW1uID0gdGhpcy5jb25mLm1pbmlmeSA/IHRoaXMuZ2V0U2hvcnRlc3QoKSA6IHRoaXMuZ2V0TmV4dENvbHVtbihpbmRleCk7XG5cbiAgICAgICAgdmFyIGNoaWxkcmVuR3V0dGVyID0gMDtcbiAgICAgICAgaWYgKHRoaXMuY29uZi5zdXJyb3VuZGluZ0d1dHRlciB8fCBuZXh0Q29sdW1uICE9IHRoaXMuX2NvbHVtbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjaGlsZHJlbkd1dHRlciA9IHRoaXMuX2N1cnJlbnRHdXR0ZXJYO1xuICAgICAgICB9XG4gICAgICAgIHZhciB4O1xuICAgICAgICBpZiAodGhpcy5jb25mLmRpcmVjdGlvbiA9PSAnbHRyJykge1xuICAgICAgICAgICAgeCA9IHN0YXJ0WCArICgoY29sV2lkdGggKyBjaGlsZHJlbkd1dHRlcikgKiAobmV4dENvbHVtbikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeCA9IHN0YXJ0WCAtICgoY29sV2lkdGggKyBjaGlsZHJlbkd1dHRlcikgKiAobmV4dENvbHVtbikpIC0gY29sV2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHkgPSB0aGlzLl9jb2x1bW5zW25leHRDb2x1bW5dO1xuXG5cbiAgICAgICAgY2hpbGRyZW5baW5kZXhdLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgnICsgTWF0aC5yb3VuZCh4KSArICdweCwnICsgTWF0aC5yb3VuZCh5KSArICdweCwwKSc7XG5cbiAgICAgICAgdGhpcy5fY29sdW1uc1tuZXh0Q29sdW1uXSArPSB0aGlzLl9zaXplc1tpbmRleF0gKyAodGhpcy5fY291bnQgPiAxID8gdGhpcy5jb25mLmd1dHRlclkgOiB0aGlzLmNvbmYudWx0aW1hdGVHdXR0ZXIpOy8vbWFyZ2luLWJvdHRvbVxuICAgIH1cblxuICAgIHRoaXMuX2NvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSAodGhpcy5fY29sdW1uc1t0aGlzLmdldExvbmdlc3QoKV0gLSB0aGlzLl9jdXJyZW50R3V0dGVyWSkgKyAncHgnO1xufTtcblxuTWluaU1hc29ucnkucHJvdG90eXBlLmdldE5leHRDb2x1bW4gPSBmdW5jdGlvbihpbmRleCkge1xuICAgIHJldHVybiBpbmRleCAlIHRoaXMuX2NvbHVtbnMubGVuZ3RoO1xufTtcblxuTWluaU1hc29ucnkucHJvdG90eXBlLmdldFNob3J0ZXN0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNob3J0ZXN0ID0gMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX2NvdW50OyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbHVtbnNbaV0gPCB0aGlzLl9jb2x1bW5zW3Nob3J0ZXN0XSkge1xuICAgICAgICAgICAgc2hvcnRlc3QgPSBpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNob3J0ZXN0O1xufTtcblxuTWluaU1hc29ucnkucHJvdG90eXBlLmdldExvbmdlc3QgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbG9uZ2VzdCA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9jb3VudDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLl9jb2x1bW5zW2ldID4gdGhpcy5fY29sdW1uc1tsb25nZXN0XSkge1xuICAgICAgICAgICAgbG9uZ2VzdCA9IGk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbG9uZ2VzdDtcbn07XG5cbk1pbmlNYXNvbnJ5LnByb3RvdHlwZS5yZXNpemVUaHJvdHRsZXIgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBpZ25vcmUgcmVzaXplIGV2ZW50cyBhcyBsb25nIGFzIGFuIGFjdHVhbFJlc2l6ZUhhbmRsZXIgZXhlY3V0aW9uIGlzIGluIHRoZSBxdWV1ZVxuICAgIGlmICggIXRoaXMuX3Jlc2l6ZVRpbWVvdXQgKSB7XG5cbiAgICAgICAgdGhpcy5fcmVzaXplVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLl9yZXNpemVUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgICAgIC8vSU9TIFNhZmFyaSB0aHJvdyByYW5kb20gcmVzaXplIGV2ZW50IG9uIHNjcm9sbCwgY2FsbCBsYXlvdXQgb25seSBpZiBzaXplIGhhcyBjaGFuZ2VkXG4gICAgICAgICAgICBpZiAodGhpcy5fY29udGFpbmVyLmNsaWVudFdpZHRoICE9IHRoaXMuX3dpZHRoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXlvdXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgLy8gVGhlIGFjdHVhbFJlc2l6ZUhhbmRsZXIgd2lsbCBleGVjdXRlIGF0IGEgcmF0ZSBvZiAzMGZwc1xuICAgICAgICB9LmJpbmQodGhpcyksIDMzKTtcbiAgICB9XG59O1xuXG5NaW5pTWFzb25yeS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5fcmVtb3ZlTGlzdGVuZXIgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRoaXMuX3JlbW92ZUxpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkcmVuID0gdGhpcy5fY29udGFpbmVyLmNoaWxkcmVuO1xuICAgIGZvciAodmFyIGsgPSAwO2s8IGNoaWxkcmVuLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIGNoaWxkcmVuW2tdLnN0eWxlLnJlbW92ZVByb3BlcnR5KCd3aWR0aCcpO1xuICAgICAgICBjaGlsZHJlbltrXS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNmb3JtJyk7XG4gICAgfVxuICAgIHRoaXMuX2NvbnRhaW5lci5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0Jyk7XG4gICAgdGhpcy5fY29udGFpbmVyLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtaW4td2lkdGgnKTtcbn07XG5cbmV4cG9ydCB7IE1pbmlNYXNvbnJ5IGFzIGRlZmF1bHQgfTtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIExpbmsgPSBmdW5jdGlvbiAoKSB7XG5cdGZ1bmN0aW9uIExpbmsoZWxlbWVudE9yVXJsKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIExpbmspO1xuXG5cdFx0aWYgKGVsZW1lbnRPclVybCBpbnN0YW5jZW9mIEVsZW1lbnQgfHwgZWxlbWVudE9yVXJsIGluc3RhbmNlb2YgU1ZHRWxlbWVudCkge1xuXHRcdFx0dGhpcy5saW5rID0gZWxlbWVudE9yVXJsO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdFx0XHR0aGlzLmxpbmsuaHJlZiA9IGVsZW1lbnRPclVybDtcblx0XHR9XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoTGluaywgW3tcblx0XHRrZXk6ICdnZXRQYXRoJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0UGF0aCgpIHtcblx0XHRcdHZhciBwYXRoID0gdGhpcy5saW5rLnBhdGhuYW1lO1xuXHRcdFx0aWYgKHBhdGhbMF0gIT09ICcvJykge1xuXHRcdFx0XHRwYXRoID0gJy8nICsgcGF0aDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBwYXRoO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2dldEFkZHJlc3MnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBnZXRBZGRyZXNzKCkge1xuXHRcdFx0dmFyIHBhdGggPSB0aGlzLmxpbmsucGF0aG5hbWUgKyB0aGlzLmxpbmsuc2VhcmNoO1xuXG5cdFx0XHRpZiAodGhpcy5saW5rLmdldEF0dHJpYnV0ZSgneGxpbms6aHJlZicpKSB7XG5cdFx0XHRcdHBhdGggPSB0aGlzLmxpbmsuZ2V0QXR0cmlidXRlKCd4bGluazpocmVmJyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChwYXRoWzBdICE9PSAnLycpIHtcblx0XHRcdFx0cGF0aCA9ICcvJyArIHBhdGg7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcGF0aDtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdnZXRIYXNoJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0SGFzaCgpIHtcblx0XHRcdHJldHVybiB0aGlzLmxpbmsuaGFzaDtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gTGluaztcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTGluazsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG52YXIgY2xhc3NpZnkgPSBmdW5jdGlvbiBjbGFzc2lmeSh0ZXh0KSB7XG5cdHZhciBvdXRwdXQgPSB0ZXh0LnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2csICctJykgLy8gUmVwbGFjZSBzcGFjZXMgd2l0aCAtXG5cdC5yZXBsYWNlKC9cXC8vZywgJy0nKSAvLyBSZXBsYWNlIC8gd2l0aCAtXG5cdC5yZXBsYWNlKC9bXlxcd1xcLV0rL2csICcnKSAvLyBSZW1vdmUgYWxsIG5vbi13b3JkIGNoYXJzXG5cdC5yZXBsYWNlKC9cXC1cXC0rL2csICctJykgLy8gUmVwbGFjZSBtdWx0aXBsZSAtIHdpdGggc2luZ2xlIC1cblx0LnJlcGxhY2UoL14tKy8sICcnKSAvLyBUcmltIC0gZnJvbSBzdGFydCBvZiB0ZXh0XG5cdC5yZXBsYWNlKC8tKyQvLCAnJyk7IC8vIFRyaW0gLSBmcm9tIGVuZCBvZiB0ZXh0XG5cdGlmIChvdXRwdXRbMF0gPT09ICcvJykgb3V0cHV0ID0gb3V0cHV0LnNwbGljZSgxKTtcblx0aWYgKG91dHB1dCA9PT0gJycpIG91dHB1dCA9ICdob21lcGFnZSc7XG5cdHJldHVybiBvdXRwdXQ7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjbGFzc2lmeTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG52YXIgY2xlYW51cEFuaW1hdGlvbkNsYXNzZXMgPSBmdW5jdGlvbiBjbGVhbnVwQW5pbWF0aW9uQ2xhc3NlcygpIHtcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTmFtZS5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKGNsYXNzSXRlbSkge1xuXHRcdGlmIChcblx0XHQvLyByZW1vdmUgXCJ0by17cGFnZX1cIiBjbGFzc2VzXG5cdFx0bmV3IFJlZ0V4cCgnXnRvLScpLnRlc3QoY2xhc3NJdGVtKSB8fFxuXHRcdC8vIHJlbW92ZSBhbGwgb3RoZXIgY2xhc3Nlc1xuXHRcdGNsYXNzSXRlbSA9PT0gJ2lzLWNoYW5naW5nJyB8fCBjbGFzc0l0ZW0gPT09ICdpcy1yZW5kZXJpbmcnIHx8IGNsYXNzSXRlbSA9PT0gJ2lzLXBvcHN0YXRlJykge1xuXHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NJdGVtKTtcblx0XHR9XG5cdH0pO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY2xlYW51cEFuaW1hdGlvbkNsYXNzZXM7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xudmFyIGNyZWF0ZUhpc3RvcnlSZWNvcmQgPSBmdW5jdGlvbiBjcmVhdGVIaXN0b3J5UmVjb3JkKHVybCkge1xuXHR3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe1xuXHRcdHVybDogdXJsIHx8IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSlbMV0sXG5cdFx0cmFuZG9tOiBNYXRoLnJhbmRvbSgpLFxuXHRcdHNvdXJjZTogJ3N3dXAnXG5cdH0sIGRvY3VtZW50LnRpdGxlLCB1cmwgfHwgd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQod2luZG93LmxvY2F0aW9uLmhvc3RuYW1lKVsxXSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVIaXN0b3J5UmVjb3JkOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIGZldGNoID0gZnVuY3Rpb24gZmV0Y2goc2V0T3B0aW9ucykge1xuXHR2YXIgY2FsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuXG5cdHZhciBkZWZhdWx0cyA9IHtcblx0XHR1cmw6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gsXG5cdFx0bWV0aG9kOiAnR0VUJyxcblx0XHRkYXRhOiBudWxsLFxuXHRcdGhlYWRlcnM6IHt9XG5cdH07XG5cblx0dmFyIG9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdHMsIHNldE9wdGlvbnMpO1xuXG5cdHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cblx0cmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHJlcXVlc3QucmVhZHlTdGF0ZSA9PT0gNCkge1xuXHRcdFx0aWYgKHJlcXVlc3Quc3RhdHVzICE9PSA1MDApIHtcblx0XHRcdFx0Y2FsbGJhY2socmVxdWVzdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjYWxsYmFjayhyZXF1ZXN0KTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0cmVxdWVzdC5vcGVuKG9wdGlvbnMubWV0aG9kLCBvcHRpb25zLnVybCwgdHJ1ZSk7XG5cdE9iamVjdC5rZXlzKG9wdGlvbnMuaGVhZGVycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0cmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgb3B0aW9ucy5oZWFkZXJzW2tleV0pO1xuXHR9KTtcblx0cmVxdWVzdC5zZW5kKG9wdGlvbnMuZGF0YSk7XG5cdHJldHVybiByZXF1ZXN0O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZmV0Y2g7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG52YXIgZ2V0Q3VycmVudFVybCA9IGZ1bmN0aW9uIGdldEN1cnJlbnRVcmwoKSB7XG5cdHJldHVybiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0Q3VycmVudFVybDsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG52YXIgZ2V0RGF0YUZyb21IdG1sID0gZnVuY3Rpb24gZ2V0RGF0YUZyb21IdG1sKGh0bWwsIGNvbnRhaW5lcnMpIHtcblx0dmFyIGZha2VEb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdodG1sJyk7XG5cdGZha2VEb20uaW5uZXJIVE1MID0gaHRtbDtcblx0dmFyIGJsb2NrcyA9IFtdO1xuXG5cdGNvbnRhaW5lcnMuZm9yRWFjaChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcblx0XHRpZiAoKDAsIF91dGlscy5xdWVyeSkoc2VsZWN0b3IsIGZha2VEb20pID09IG51bGwpIHtcblx0XHRcdGNvbnNvbGUud2FybignW3N3dXBdIENvbnRhaW5lciAnICsgc2VsZWN0b3IgKyAnIG5vdCBmb3VuZCBvbiBwYWdlLicpO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICgoMCwgX3V0aWxzLnF1ZXJ5QWxsKShzZWxlY3RvcikubGVuZ3RoICE9PSAoMCwgX3V0aWxzLnF1ZXJ5QWxsKShzZWxlY3RvciwgZmFrZURvbSkubGVuZ3RoKSB7XG5cdFx0XHRcdGNvbnNvbGUud2FybignW3N3dXBdIE1pc21hdGNoZWQgbnVtYmVyIG9mIGNvbnRhaW5lcnMgZm91bmQgb24gbmV3IHBhZ2UuJyk7XG5cdFx0XHR9XG5cdFx0XHQoMCwgX3V0aWxzLnF1ZXJ5QWxsKShzZWxlY3RvcikuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcblx0XHRcdFx0KDAsIF91dGlscy5xdWVyeUFsbCkoc2VsZWN0b3IsIGZha2VEb20pW2luZGV4XS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3d1cCcsIGJsb2Nrcy5sZW5ndGgpO1xuXHRcdFx0XHRibG9ja3MucHVzaCgoMCwgX3V0aWxzLnF1ZXJ5QWxsKShzZWxlY3RvciwgZmFrZURvbSlbaW5kZXhdLm91dGVySFRNTCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xuXG5cdHZhciBqc29uID0ge1xuXHRcdHRpdGxlOiAoZmFrZURvbS5xdWVyeVNlbGVjdG9yKCd0aXRsZScpIHx8IHt9KS5pbm5lclRleHQsXG5cdFx0cGFnZUNsYXNzOiBmYWtlRG9tLnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc05hbWUsXG5cdFx0b3JpZ2luYWxDb250ZW50OiBodG1sLFxuXHRcdGJsb2NrczogYmxvY2tzXG5cdH07XG5cblx0Ly8gdG8gcHJldmVudCBtZW1vcnkgbGVha3Ncblx0ZmFrZURvbS5pbm5lckhUTUwgPSAnJztcblx0ZmFrZURvbSA9IG51bGw7XG5cblx0cmV0dXJuIGpzb247XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBnZXREYXRhRnJvbUh0bWw7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jbGVhbnVwQW5pbWF0aW9uQ2xhc3NlcyA9IGV4cG9ydHMuTGluayA9IGV4cG9ydHMubWFya1N3dXBFbGVtZW50cyA9IGV4cG9ydHMubm9ybWFsaXplVXJsID0gZXhwb3J0cy5nZXRDdXJyZW50VXJsID0gZXhwb3J0cy50cmFuc2l0aW9uUHJvcGVydHkgPSBleHBvcnRzLnRyYW5zaXRpb25FbmQgPSBleHBvcnRzLmZldGNoID0gZXhwb3J0cy5nZXREYXRhRnJvbUh0bWwgPSBleHBvcnRzLmNyZWF0ZUhpc3RvcnlSZWNvcmQgPSBleHBvcnRzLmNsYXNzaWZ5ID0gdW5kZWZpbmVkO1xuXG52YXIgX2NsYXNzaWZ5ID0gcmVxdWlyZSgnLi9jbGFzc2lmeScpO1xuXG52YXIgX2NsYXNzaWZ5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzaWZ5KTtcblxudmFyIF9jcmVhdGVIaXN0b3J5UmVjb3JkID0gcmVxdWlyZSgnLi9jcmVhdGVIaXN0b3J5UmVjb3JkJyk7XG5cbnZhciBfY3JlYXRlSGlzdG9yeVJlY29yZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVIaXN0b3J5UmVjb3JkKTtcblxudmFyIF9nZXREYXRhRnJvbUh0bWwgPSByZXF1aXJlKCcuL2dldERhdGFGcm9tSHRtbCcpO1xuXG52YXIgX2dldERhdGFGcm9tSHRtbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXREYXRhRnJvbUh0bWwpO1xuXG52YXIgX2ZldGNoID0gcmVxdWlyZSgnLi9mZXRjaCcpO1xuXG52YXIgX2ZldGNoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZldGNoKTtcblxudmFyIF90cmFuc2l0aW9uRW5kID0gcmVxdWlyZSgnLi90cmFuc2l0aW9uRW5kJyk7XG5cbnZhciBfdHJhbnNpdGlvbkVuZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9uRW5kKTtcblxudmFyIF90cmFuc2l0aW9uUHJvcGVydHkgPSByZXF1aXJlKCcuL3RyYW5zaXRpb25Qcm9wZXJ0eScpO1xuXG52YXIgX3RyYW5zaXRpb25Qcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9uUHJvcGVydHkpO1xuXG52YXIgX2dldEN1cnJlbnRVcmwgPSByZXF1aXJlKCcuL2dldEN1cnJlbnRVcmwnKTtcblxudmFyIF9nZXRDdXJyZW50VXJsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldEN1cnJlbnRVcmwpO1xuXG52YXIgX25vcm1hbGl6ZVVybCA9IHJlcXVpcmUoJy4vbm9ybWFsaXplVXJsJyk7XG5cbnZhciBfbm9ybWFsaXplVXJsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX25vcm1hbGl6ZVVybCk7XG5cbnZhciBfbWFya1N3dXBFbGVtZW50cyA9IHJlcXVpcmUoJy4vbWFya1N3dXBFbGVtZW50cycpO1xuXG52YXIgX21hcmtTd3VwRWxlbWVudHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWFya1N3dXBFbGVtZW50cyk7XG5cbnZhciBfTGluayA9IHJlcXVpcmUoJy4vTGluaycpO1xuXG52YXIgX0xpbmsyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTGluayk7XG5cbnZhciBfY2xlYW51cEFuaW1hdGlvbkNsYXNzZXMgPSByZXF1aXJlKCcuL2NsZWFudXBBbmltYXRpb25DbGFzc2VzJyk7XG5cbnZhciBfY2xlYW51cEFuaW1hdGlvbkNsYXNzZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xlYW51cEFuaW1hdGlvbkNsYXNzZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgY2xhc3NpZnkgPSBleHBvcnRzLmNsYXNzaWZ5ID0gX2NsYXNzaWZ5Mi5kZWZhdWx0O1xudmFyIGNyZWF0ZUhpc3RvcnlSZWNvcmQgPSBleHBvcnRzLmNyZWF0ZUhpc3RvcnlSZWNvcmQgPSBfY3JlYXRlSGlzdG9yeVJlY29yZDIuZGVmYXVsdDtcbnZhciBnZXREYXRhRnJvbUh0bWwgPSBleHBvcnRzLmdldERhdGFGcm9tSHRtbCA9IF9nZXREYXRhRnJvbUh0bWwyLmRlZmF1bHQ7XG52YXIgZmV0Y2ggPSBleHBvcnRzLmZldGNoID0gX2ZldGNoMi5kZWZhdWx0O1xudmFyIHRyYW5zaXRpb25FbmQgPSBleHBvcnRzLnRyYW5zaXRpb25FbmQgPSBfdHJhbnNpdGlvbkVuZDIuZGVmYXVsdDtcbnZhciB0cmFuc2l0aW9uUHJvcGVydHkgPSBleHBvcnRzLnRyYW5zaXRpb25Qcm9wZXJ0eSA9IF90cmFuc2l0aW9uUHJvcGVydHkyLmRlZmF1bHQ7XG52YXIgZ2V0Q3VycmVudFVybCA9IGV4cG9ydHMuZ2V0Q3VycmVudFVybCA9IF9nZXRDdXJyZW50VXJsMi5kZWZhdWx0O1xudmFyIG5vcm1hbGl6ZVVybCA9IGV4cG9ydHMubm9ybWFsaXplVXJsID0gX25vcm1hbGl6ZVVybDIuZGVmYXVsdDtcbnZhciBtYXJrU3d1cEVsZW1lbnRzID0gZXhwb3J0cy5tYXJrU3d1cEVsZW1lbnRzID0gX21hcmtTd3VwRWxlbWVudHMyLmRlZmF1bHQ7XG52YXIgTGluayA9IGV4cG9ydHMuTGluayA9IF9MaW5rMi5kZWZhdWx0O1xudmFyIGNsZWFudXBBbmltYXRpb25DbGFzc2VzID0gZXhwb3J0cy5jbGVhbnVwQW5pbWF0aW9uQ2xhc3NlcyA9IF9jbGVhbnVwQW5pbWF0aW9uQ2xhc3NlczIuZGVmYXVsdDsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG52YXIgbWFya1N3dXBFbGVtZW50cyA9IGZ1bmN0aW9uIG1hcmtTd3VwRWxlbWVudHMoZWxlbWVudCwgY29udGFpbmVycykge1xuXHR2YXIgYmxvY2tzID0gMDtcblxuXHRjb250YWluZXJzLmZvckVhY2goZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG5cdFx0aWYgKCgwLCBfdXRpbHMucXVlcnkpKHNlbGVjdG9yLCBlbGVtZW50KSA9PSBudWxsKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oJ1tzd3VwXSBDb250YWluZXIgJyArIHNlbGVjdG9yICsgJyBub3QgZm91bmQgb24gcGFnZS4nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0KDAsIF91dGlscy5xdWVyeUFsbCkoc2VsZWN0b3IpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG5cdFx0XHRcdCgwLCBfdXRpbHMucXVlcnlBbGwpKHNlbGVjdG9yLCBlbGVtZW50KVtpbmRleF0uc2V0QXR0cmlidXRlKCdkYXRhLXN3dXAnLCBibG9ja3MpO1xuXHRcdFx0XHRibG9ja3MrKztcblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBtYXJrU3d1cEVsZW1lbnRzOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9MaW5rID0gcmVxdWlyZSgnLi9MaW5rJyk7XG5cbnZhciBfTGluazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MaW5rKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIG5vcm1hbGl6ZVVybCA9IGZ1bmN0aW9uIG5vcm1hbGl6ZVVybCh1cmwpIHtcblx0cmV0dXJuIG5ldyBfTGluazIuZGVmYXVsdCh1cmwpLmdldEFkZHJlc3MoKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG5vcm1hbGl6ZVVybDsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG52YXIgdHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uIHRyYW5zaXRpb25FbmQoKSB7XG5cdGlmICh3aW5kb3cub250cmFuc2l0aW9uZW5kID09PSB1bmRlZmluZWQgJiYgd2luZG93Lm9ud2Via2l0dHJhbnNpdGlvbmVuZCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuICd3ZWJraXRUcmFuc2l0aW9uRW5kJztcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gJ3RyYW5zaXRpb25lbmQnO1xuXHR9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSB0cmFuc2l0aW9uRW5kOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcbnZhciB0cmFuc2l0aW9uUHJvcGVydHkgPSBmdW5jdGlvbiB0cmFuc2l0aW9uUHJvcGVydHkoKSB7XG5cdGlmICh3aW5kb3cub250cmFuc2l0aW9uZW5kID09PSB1bmRlZmluZWQgJiYgd2luZG93Lm9ud2Via2l0dHJhbnNpdGlvbmVuZCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuICdXZWJraXRUcmFuc2l0aW9uJztcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gJ3RyYW5zaXRpb24nO1xuXHR9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSB0cmFuc2l0aW9uUHJvcGVydHk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG4vLyBtb2R1bGVzXG5cblxudmFyIF9kZWxlZ2F0ZUl0ID0gcmVxdWlyZSgnZGVsZWdhdGUtaXQnKTtcblxudmFyIF9kZWxlZ2F0ZUl0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlbGVnYXRlSXQpO1xuXG52YXIgX0NhY2hlID0gcmVxdWlyZSgnLi9tb2R1bGVzL0NhY2hlJyk7XG5cbnZhciBfQ2FjaGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ2FjaGUpO1xuXG52YXIgX2xvYWRQYWdlID0gcmVxdWlyZSgnLi9tb2R1bGVzL2xvYWRQYWdlJyk7XG5cbnZhciBfbG9hZFBhZ2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9hZFBhZ2UpO1xuXG52YXIgX3JlbmRlclBhZ2UgPSByZXF1aXJlKCcuL21vZHVsZXMvcmVuZGVyUGFnZScpO1xuXG52YXIgX3JlbmRlclBhZ2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVuZGVyUGFnZSk7XG5cbnZhciBfdHJpZ2dlckV2ZW50ID0gcmVxdWlyZSgnLi9tb2R1bGVzL3RyaWdnZXJFdmVudCcpO1xuXG52YXIgX3RyaWdnZXJFdmVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmlnZ2VyRXZlbnQpO1xuXG52YXIgX29uID0gcmVxdWlyZSgnLi9tb2R1bGVzL29uJyk7XG5cbnZhciBfb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb24pO1xuXG52YXIgX29mZiA9IHJlcXVpcmUoJy4vbW9kdWxlcy9vZmYnKTtcblxudmFyIF9vZmYyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2ZmKTtcblxudmFyIF91cGRhdGVUcmFuc2l0aW9uID0gcmVxdWlyZSgnLi9tb2R1bGVzL3VwZGF0ZVRyYW5zaXRpb24nKTtcblxudmFyIF91cGRhdGVUcmFuc2l0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VwZGF0ZVRyYW5zaXRpb24pO1xuXG52YXIgX2dldEFuY2hvckVsZW1lbnQgPSByZXF1aXJlKCcuL21vZHVsZXMvZ2V0QW5jaG9yRWxlbWVudCcpO1xuXG52YXIgX2dldEFuY2hvckVsZW1lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0QW5jaG9yRWxlbWVudCk7XG5cbnZhciBfZ2V0QW5pbWF0aW9uUHJvbWlzZXMgPSByZXF1aXJlKCcuL21vZHVsZXMvZ2V0QW5pbWF0aW9uUHJvbWlzZXMnKTtcblxudmFyIF9nZXRBbmltYXRpb25Qcm9taXNlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRBbmltYXRpb25Qcm9taXNlcyk7XG5cbnZhciBfZ2V0UGFnZURhdGEgPSByZXF1aXJlKCcuL21vZHVsZXMvZ2V0UGFnZURhdGEnKTtcblxudmFyIF9nZXRQYWdlRGF0YTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQYWdlRGF0YSk7XG5cbnZhciBfcGx1Z2lucyA9IHJlcXVpcmUoJy4vbW9kdWxlcy9wbHVnaW5zJyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBfaGVscGVycyA9IHJlcXVpcmUoJy4vaGVscGVycycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgU3d1cCA9IGZ1bmN0aW9uICgpIHtcblx0ZnVuY3Rpb24gU3d1cChzZXRPcHRpb25zKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN3dXApO1xuXG5cdFx0Ly8gZGVmYXVsdCBvcHRpb25zXG5cdFx0dmFyIGRlZmF1bHRzID0ge1xuXHRcdFx0YW5pbWF0ZUhpc3RvcnlCcm93c2luZzogZmFsc2UsXG5cdFx0XHRhbmltYXRpb25TZWxlY3RvcjogJ1tjbGFzcyo9XCJ0cmFuc2l0aW9uLVwiXScsXG5cdFx0XHRsaW5rU2VsZWN0b3I6ICdhW2hyZWZePVwiJyArIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyAnXCJdOm5vdChbZGF0YS1uby1zd3VwXSksIGFbaHJlZl49XCIvXCJdOm5vdChbZGF0YS1uby1zd3VwXSksIGFbaHJlZl49XCIjXCJdOm5vdChbZGF0YS1uby1zd3VwXSknLFxuXHRcdFx0Y2FjaGU6IHRydWUsXG5cdFx0XHRjb250YWluZXJzOiBbJyNzd3VwJ10sXG5cdFx0XHRyZXF1ZXN0SGVhZGVyczoge1xuXHRcdFx0XHQnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdzd3VwJyxcblx0XHRcdFx0QWNjZXB0OiAndGV4dC9odG1sLCBhcHBsaWNhdGlvbi94aHRtbCt4bWwnXG5cdFx0XHR9LFxuXHRcdFx0cGx1Z2luczogW10sXG5cdFx0XHRza2lwUG9wU3RhdGVIYW5kbGluZzogZnVuY3Rpb24gc2tpcFBvcFN0YXRlSGFuZGxpbmcoZXZlbnQpIHtcblx0XHRcdFx0cmV0dXJuICEoZXZlbnQuc3RhdGUgJiYgZXZlbnQuc3RhdGUuc291cmNlID09PSAnc3d1cCcpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvLyBtZXJnZSBvcHRpb25zXG5cdFx0dmFyIG9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdHMsIHNldE9wdGlvbnMpO1xuXG5cdFx0Ly8gaGFuZGxlciBhcnJheXNcblx0XHR0aGlzLl9oYW5kbGVycyA9IHtcblx0XHRcdGFuaW1hdGlvbkluRG9uZTogW10sXG5cdFx0XHRhbmltYXRpb25JblN0YXJ0OiBbXSxcblx0XHRcdGFuaW1hdGlvbk91dERvbmU6IFtdLFxuXHRcdFx0YW5pbWF0aW9uT3V0U3RhcnQ6IFtdLFxuXHRcdFx0YW5pbWF0aW9uU2tpcHBlZDogW10sXG5cdFx0XHRjbGlja0xpbms6IFtdLFxuXHRcdFx0Y29udGVudFJlcGxhY2VkOiBbXSxcblx0XHRcdGRpc2FibGVkOiBbXSxcblx0XHRcdGVuYWJsZWQ6IFtdLFxuXHRcdFx0b3BlblBhZ2VJbk5ld1RhYjogW10sXG5cdFx0XHRwYWdlTG9hZGVkOiBbXSxcblx0XHRcdHBhZ2VSZXRyaWV2ZWRGcm9tQ2FjaGU6IFtdLFxuXHRcdFx0cGFnZVZpZXc6IFtdLFxuXHRcdFx0cG9wU3RhdGU6IFtdLFxuXHRcdFx0c2FtZVBhZ2U6IFtdLFxuXHRcdFx0c2FtZVBhZ2VXaXRoSGFzaDogW10sXG5cdFx0XHRzZXJ2ZXJFcnJvcjogW10sXG5cdFx0XHR0cmFuc2l0aW9uU3RhcnQ6IFtdLFxuXHRcdFx0dHJhbnNpdGlvbkVuZDogW10sXG5cdFx0XHR3aWxsUmVwbGFjZUNvbnRlbnQ6IFtdXG5cdFx0fTtcblxuXHRcdC8vIHZhcmlhYmxlIGZvciBhbmNob3IgdG8gc2Nyb2xsIHRvIGFmdGVyIHJlbmRlclxuXHRcdHRoaXMuc2Nyb2xsVG9FbGVtZW50ID0gbnVsbDtcblx0XHQvLyB2YXJpYWJsZSBmb3IgcHJvbWlzZSB1c2VkIGZvciBwcmVsb2FkLCBzbyBubyBuZXcgbG9hZGluZyBvZiB0aGUgc2FtZSBwYWdlIHN0YXJ0cyB3aGlsZSBwYWdlIGlzIGxvYWRpbmdcblx0XHR0aGlzLnByZWxvYWRQcm9taXNlID0gbnVsbDtcblx0XHQvLyB2YXJpYWJsZSBmb3Igc2F2ZSBvcHRpb25zXG5cdFx0dGhpcy5vcHRpb25zID0gb3B0aW9ucztcblx0XHQvLyB2YXJpYWJsZSBmb3IgcGx1Z2lucyBhcnJheVxuXHRcdHRoaXMucGx1Z2lucyA9IFtdO1xuXHRcdC8vIHZhcmlhYmxlIGZvciBjdXJyZW50IHRyYW5zaXRpb24gb2JqZWN0XG5cdFx0dGhpcy50cmFuc2l0aW9uID0ge307XG5cdFx0Ly8gdmFyaWFibGUgZm9yIGtlZXBpbmcgZXZlbnQgbGlzdGVuZXJzIGZyb20gXCJkZWxlZ2F0ZVwiXG5cdFx0dGhpcy5kZWxlZ2F0ZWRMaXN0ZW5lcnMgPSB7fTtcblx0XHQvLyBzbyB3ZSBhcmUgYWJsZSB0byByZW1vdmUgdGhlIGxpc3RlbmVyXG5cdFx0dGhpcy5ib3VuZFBvcFN0YXRlSGFuZGxlciA9IHRoaXMucG9wU3RhdGVIYW5kbGVyLmJpbmQodGhpcyk7XG5cblx0XHQvLyBtYWtlIG1vZHVsZXMgYWNjZXNzaWJsZSBpbiBpbnN0YW5jZVxuXHRcdHRoaXMuY2FjaGUgPSBuZXcgX0NhY2hlMi5kZWZhdWx0KCk7XG5cdFx0dGhpcy5jYWNoZS5zd3VwID0gdGhpcztcblx0XHR0aGlzLmxvYWRQYWdlID0gX2xvYWRQYWdlMi5kZWZhdWx0O1xuXHRcdHRoaXMucmVuZGVyUGFnZSA9IF9yZW5kZXJQYWdlMi5kZWZhdWx0O1xuXHRcdHRoaXMudHJpZ2dlckV2ZW50ID0gX3RyaWdnZXJFdmVudDIuZGVmYXVsdDtcblx0XHR0aGlzLm9uID0gX29uMi5kZWZhdWx0O1xuXHRcdHRoaXMub2ZmID0gX29mZjIuZGVmYXVsdDtcblx0XHR0aGlzLnVwZGF0ZVRyYW5zaXRpb24gPSBfdXBkYXRlVHJhbnNpdGlvbjIuZGVmYXVsdDtcblx0XHR0aGlzLmdldEFuaW1hdGlvblByb21pc2VzID0gX2dldEFuaW1hdGlvblByb21pc2VzMi5kZWZhdWx0O1xuXHRcdHRoaXMuZ2V0UGFnZURhdGEgPSBfZ2V0UGFnZURhdGEyLmRlZmF1bHQ7XG5cdFx0dGhpcy5nZXRBbmNob3JFbGVtZW50ID0gX2dldEFuY2hvckVsZW1lbnQyLmRlZmF1bHQ7XG5cdFx0dGhpcy5sb2cgPSBmdW5jdGlvbiAoKSB7fTsgLy8gaGVyZSBzbyBpdCBjYW4gYmUgdXNlZCBieSBwbHVnaW5zXG5cdFx0dGhpcy51c2UgPSBfcGx1Z2lucy51c2U7XG5cdFx0dGhpcy51bnVzZSA9IF9wbHVnaW5zLnVudXNlO1xuXHRcdHRoaXMuZmluZFBsdWdpbiA9IF9wbHVnaW5zLmZpbmRQbHVnaW47XG5cdFx0dGhpcy5nZXRDdXJyZW50VXJsID0gX2hlbHBlcnMuZ2V0Q3VycmVudFVybDtcblx0XHR0aGlzLmNsZWFudXBBbmltYXRpb25DbGFzc2VzID0gX2hlbHBlcnMuY2xlYW51cEFuaW1hdGlvbkNsYXNzZXM7XG5cblx0XHQvLyBlbmFibGUgc3d1cFxuXHRcdHRoaXMuZW5hYmxlKCk7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoU3d1cCwgW3tcblx0XHRrZXk6ICdlbmFibGUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBlbmFibGUoKSB7XG5cdFx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXG5cdFx0XHQvLyBjaGVjayBmb3IgUHJvbWlzZSBzdXBwb3J0XG5cdFx0XHRpZiAodHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdGNvbnNvbGUud2FybignUHJvbWlzZSBpcyBub3Qgc3VwcG9ydGVkJyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gYWRkIGV2ZW50IGxpc3RlbmVyc1xuXHRcdFx0dGhpcy5kZWxlZ2F0ZWRMaXN0ZW5lcnMuY2xpY2sgPSAoMCwgX2RlbGVnYXRlSXQyLmRlZmF1bHQpKGRvY3VtZW50LCB0aGlzLm9wdGlvbnMubGlua1NlbGVjdG9yLCAnY2xpY2snLCB0aGlzLmxpbmtDbGlja0hhbmRsZXIuYmluZCh0aGlzKSk7XG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLmJvdW5kUG9wU3RhdGVIYW5kbGVyKTtcblxuXHRcdFx0Ly8gaW5pdGlhbCBzYXZlIHRvIGNhY2hlXG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLmNhY2hlKSB7fVxuXHRcdFx0Ly8gZGlzYWJsZWQgdG8gYXZvaWQgY2FjaGluZyBtb2RpZmllZCBkb20gc3RhdGVcblx0XHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zd3VwL3N3dXAvaXNzdWVzLzQ3NVxuXHRcdFx0Ly8gbG9naWMgbW92ZWQgdG8gcHJlbG9hZCBwbHVnaW5cblxuXG5cdFx0XHQvLyBtYXJrIHN3dXAgYmxvY2tzIGluIGh0bWxcblx0XHRcdCgwLCBfaGVscGVycy5tYXJrU3d1cEVsZW1lbnRzKShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHRoaXMub3B0aW9ucy5jb250YWluZXJzKTtcblxuXHRcdFx0Ly8gbW91bnQgcGx1Z2luc1xuXHRcdFx0dGhpcy5vcHRpb25zLnBsdWdpbnMuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luKSB7XG5cdFx0XHRcdF90aGlzLnVzZShwbHVnaW4pO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIG1vZGlmeSBpbml0aWFsIGhpc3RvcnkgcmVjb3JkXG5cdFx0XHR3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoT2JqZWN0LmFzc2lnbih7fSwgd2luZG93Lmhpc3Rvcnkuc3RhdGUsIHtcblx0XHRcdFx0dXJsOiB3aW5kb3cubG9jYXRpb24uaHJlZixcblx0XHRcdFx0cmFuZG9tOiBNYXRoLnJhbmRvbSgpLFxuXHRcdFx0XHRzb3VyY2U6ICdzd3VwJ1xuXHRcdFx0fSksIGRvY3VtZW50LnRpdGxlLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cblx0XHRcdC8vIHRyaWdnZXIgZW5hYmxlZCBldmVudFxuXHRcdFx0dGhpcy50cmlnZ2VyRXZlbnQoJ2VuYWJsZWQnKTtcblxuXHRcdFx0Ly8gYWRkIHN3dXAtZW5hYmxlZCBjbGFzcyB0byBodG1sIHRhZ1xuXHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3N3dXAtZW5hYmxlZCcpO1xuXG5cdFx0XHQvLyB0cmlnZ2VyIHBhZ2UgdmlldyBldmVudFxuXHRcdFx0dGhpcy50cmlnZ2VyRXZlbnQoJ3BhZ2VWaWV3Jyk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZGVzdHJveScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG5cdFx0XHR2YXIgX3RoaXMyID0gdGhpcztcblxuXHRcdFx0Ly8gcmVtb3ZlIGRlbGVnYXRlZCBsaXN0ZW5lcnNcblx0XHRcdHRoaXMuZGVsZWdhdGVkTGlzdGVuZXJzLmNsaWNrLmRlc3Ryb3koKTtcblxuXHRcdFx0Ly8gcmVtb3ZlIHBvcHN0YXRlIGxpc3RlbmVyXG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLmJvdW5kUG9wU3RhdGVIYW5kbGVyKTtcblxuXHRcdFx0Ly8gZW1wdHkgY2FjaGVcblx0XHRcdHRoaXMuY2FjaGUuZW1wdHkoKTtcblxuXHRcdFx0Ly8gdW5tb3VudCBwbHVnaW5zXG5cdFx0XHR0aGlzLm9wdGlvbnMucGx1Z2lucy5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW4pIHtcblx0XHRcdFx0X3RoaXMyLnVudXNlKHBsdWdpbik7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gcmVtb3ZlIHN3dXAgZGF0YSBhdHJpYnV0ZXMgZnJvbSBibG9ja3Ncblx0XHRcdCgwLCBfdXRpbHMucXVlcnlBbGwpKCdbZGF0YS1zd3VwXScpLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcblx0XHRcdFx0ZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc3d1cCcpO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIHJlbW92ZSBoYW5kbGVyc1xuXHRcdFx0dGhpcy5vZmYoKTtcblxuXHRcdFx0Ly8gdHJpZ2dlciBkaXNhYmxlIGV2ZW50XG5cdFx0XHR0aGlzLnRyaWdnZXJFdmVudCgnZGlzYWJsZWQnKTtcblxuXHRcdFx0Ly8gcmVtb3ZlIHN3dXAtZW5hYmxlZCBjbGFzcyBmcm9tIGh0bWwgdGFnXG5cdFx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc3d1cC1lbmFibGVkJyk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnbGlua0NsaWNrSGFuZGxlcicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGxpbmtDbGlja0hhbmRsZXIoZXZlbnQpIHtcblx0XHRcdC8vIG5vIGNvbnRyb2wga2V5IHByZXNzZWRcblx0XHRcdGlmICghZXZlbnQubWV0YUtleSAmJiAhZXZlbnQuY3RybEtleSAmJiAhZXZlbnQuc2hpZnRLZXkgJiYgIWV2ZW50LmFsdEtleSkge1xuXHRcdFx0XHQvLyBpbmRleCBvZiBwcmVzc2VkIGJ1dHRvbiBuZWVkcyB0byBiZSBjaGVja2VkIGJlY2F1c2UgRmlyZWZveCB0cmlnZ2VycyBjbGljayBvbiBhbGwgbW91c2UgYnV0dG9uc1xuXHRcdFx0XHRpZiAoZXZlbnQuYnV0dG9uID09PSAwKSB7XG5cdFx0XHRcdFx0dGhpcy50cmlnZ2VyRXZlbnQoJ2NsaWNrTGluaycsIGV2ZW50KTtcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHZhciBsaW5rID0gbmV3IF9oZWxwZXJzLkxpbmsoZXZlbnQuZGVsZWdhdGVUYXJnZXQpO1xuXHRcdFx0XHRcdGlmIChsaW5rLmdldEFkZHJlc3MoKSA9PSAoMCwgX2hlbHBlcnMuZ2V0Q3VycmVudFVybCkoKSB8fCBsaW5rLmdldEFkZHJlc3MoKSA9PSAnJykge1xuXHRcdFx0XHRcdFx0Ly8gbGluayB0byB0aGUgc2FtZSBVUkxcblx0XHRcdFx0XHRcdGlmIChsaW5rLmdldEhhc2goKSAhPSAnJykge1xuXHRcdFx0XHRcdFx0XHQvLyBsaW5rIHRvIHRoZSBzYW1lIFVSTCB3aXRoIGhhc2hcblx0XHRcdFx0XHRcdFx0dGhpcy50cmlnZ2VyRXZlbnQoJ3NhbWVQYWdlV2l0aEhhc2gnLCBldmVudCk7XG5cdFx0XHRcdFx0XHRcdHZhciBlbGVtZW50ID0gKDAsIF9nZXRBbmNob3JFbGVtZW50Mi5kZWZhdWx0KShsaW5rLmdldEhhc2goKSk7XG5cdFx0XHRcdFx0XHRcdGlmIChlbGVtZW50ICE9IG51bGwpIHtcblx0XHRcdFx0XHRcdFx0XHRoaXN0b3J5LnJlcGxhY2VTdGF0ZSh7XG5cdFx0XHRcdFx0XHRcdFx0XHR1cmw6IGxpbmsuZ2V0QWRkcmVzcygpICsgbGluay5nZXRIYXNoKCksXG5cdFx0XHRcdFx0XHRcdFx0XHRyYW5kb206IE1hdGgucmFuZG9tKCksXG5cdFx0XHRcdFx0XHRcdFx0XHRzb3VyY2U6ICdzd3VwJ1xuXHRcdFx0XHRcdFx0XHRcdH0sIGRvY3VtZW50LnRpdGxlLCBsaW5rLmdldEFkZHJlc3MoKSArIGxpbmsuZ2V0SGFzaCgpKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHQvLyByZWZlcmVuY2VkIGVsZW1lbnQgbm90IGZvdW5kXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS53YXJuKCdFbGVtZW50IGZvciBvZmZzZXQgbm90IGZvdW5kICgnICsgbGluay5nZXRIYXNoKCkgKyAnKScpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHQvLyBsaW5rIHRvIHRoZSBzYW1lIFVSTCB3aXRob3V0IGhhc2hcblx0XHRcdFx0XHRcdFx0dGhpcy50cmlnZ2VyRXZlbnQoJ3NhbWVQYWdlJywgZXZlbnQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQvLyBsaW5rIHRvIGRpZmZlcmVudCB1cmxcblx0XHRcdFx0XHRcdGlmIChsaW5rLmdldEhhc2goKSAhPSAnJykge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnNjcm9sbFRvRWxlbWVudCA9IGxpbmsuZ2V0SGFzaCgpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBnZXQgY3VzdG9tIHRyYW5zaXRpb24gZnJvbSBkYXRhXG5cdFx0XHRcdFx0XHR2YXIgY3VzdG9tVHJhbnNpdGlvbiA9IGV2ZW50LmRlbGVnYXRlVGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1zd3VwLXRyYW5zaXRpb24nKTtcblxuXHRcdFx0XHRcdFx0Ly8gbG9hZCBwYWdlXG5cdFx0XHRcdFx0XHR0aGlzLmxvYWRQYWdlKHsgdXJsOiBsaW5rLmdldEFkZHJlc3MoKSwgY3VzdG9tVHJhbnNpdGlvbjogY3VzdG9tVHJhbnNpdGlvbiB9LCBmYWxzZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBvcGVuIGluIG5ldyB0YWIgKGRvIG5vdGhpbmcpXG5cdFx0XHRcdHRoaXMudHJpZ2dlckV2ZW50KCdvcGVuUGFnZUluTmV3VGFiJywgZXZlbnQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3BvcFN0YXRlSGFuZGxlcicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHBvcFN0YXRlSGFuZGxlcihldmVudCkge1xuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy5za2lwUG9wU3RhdGVIYW5kbGluZyhldmVudCkpIHJldHVybjtcblx0XHRcdHZhciBsaW5rID0gbmV3IF9oZWxwZXJzLkxpbmsoZXZlbnQuc3RhdGUgPyBldmVudC5zdGF0ZS51cmwgOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuXHRcdFx0aWYgKGxpbmsuZ2V0SGFzaCgpICE9PSAnJykge1xuXHRcdFx0XHR0aGlzLnNjcm9sbFRvRWxlbWVudCA9IGxpbmsuZ2V0SGFzaCgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdH1cblx0XHRcdHRoaXMudHJpZ2dlckV2ZW50KCdwb3BTdGF0ZScsIGV2ZW50KTtcblxuXHRcdFx0aWYgKCF0aGlzLm9wdGlvbnMuYW5pbWF0ZUhpc3RvcnlCcm93c2luZykge1xuXHRcdFx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYW5pbWF0aW5nJyk7XG5cdFx0XHRcdCgwLCBfaGVscGVycy5jbGVhbnVwQW5pbWF0aW9uQ2xhc3NlcykoKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5sb2FkUGFnZSh7IHVybDogbGluay5nZXRBZGRyZXNzKCkgfSwgZXZlbnQpO1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBTd3VwO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBTd3VwOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuQ2FjaGUgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfaGVscGVycyA9IHJlcXVpcmUoJy4uL2hlbHBlcnMnKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIENhY2hlID0gZXhwb3J0cy5DYWNoZSA9IGZ1bmN0aW9uICgpIHtcblx0ZnVuY3Rpb24gQ2FjaGUoKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIENhY2hlKTtcblxuXHRcdHRoaXMucGFnZXMgPSB7fTtcblx0XHR0aGlzLmxhc3QgPSBudWxsO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKENhY2hlLCBbe1xuXHRcdGtleTogJ2NhY2hlVXJsJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gY2FjaGVVcmwocGFnZSkge1xuXHRcdFx0cGFnZS51cmwgPSAoMCwgX2hlbHBlcnMubm9ybWFsaXplVXJsKShwYWdlLnVybCk7XG5cdFx0XHRpZiAocGFnZS51cmwgaW4gdGhpcy5wYWdlcyA9PT0gZmFsc2UpIHtcblx0XHRcdFx0dGhpcy5wYWdlc1twYWdlLnVybF0gPSBwYWdlO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5sYXN0ID0gdGhpcy5wYWdlc1twYWdlLnVybF07XG5cdFx0XHR0aGlzLnN3dXAubG9nKCdDYWNoZSAoJyArIE9iamVjdC5rZXlzKHRoaXMucGFnZXMpLmxlbmd0aCArICcpJywgdGhpcy5wYWdlcyk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZ2V0UGFnZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGdldFBhZ2UodXJsKSB7XG5cdFx0XHR1cmwgPSAoMCwgX2hlbHBlcnMubm9ybWFsaXplVXJsKSh1cmwpO1xuXHRcdFx0cmV0dXJuIHRoaXMucGFnZXNbdXJsXTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdnZXRDdXJyZW50UGFnZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGdldEN1cnJlbnRQYWdlKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UGFnZSgoMCwgX2hlbHBlcnMuZ2V0Q3VycmVudFVybCkoKSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZXhpc3RzJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZXhpc3RzKHVybCkge1xuXHRcdFx0dXJsID0gKDAsIF9oZWxwZXJzLm5vcm1hbGl6ZVVybCkodXJsKTtcblx0XHRcdHJldHVybiB1cmwgaW4gdGhpcy5wYWdlcztcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdlbXB0eScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGVtcHR5KCkge1xuXHRcdFx0dGhpcy5wYWdlcyA9IHt9O1xuXHRcdFx0dGhpcy5sYXN0ID0gbnVsbDtcblx0XHRcdHRoaXMuc3d1cC5sb2coJ0NhY2hlIGNsZWFyZWQnKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyZW1vdmUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW1vdmUodXJsKSB7XG5cdFx0XHRkZWxldGUgdGhpcy5wYWdlc1t1cmxdO1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBDYWNoZTtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQ2FjaGU7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxudmFyIGdldEFuY2hvckVsZW1lbnQgPSBmdW5jdGlvbiBnZXRBbmNob3JFbGVtZW50KGhhc2gpIHtcblx0aWYgKCFoYXNoKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRpZiAoaGFzaC5jaGFyQXQoMCkgPT09ICcjJykge1xuXHRcdGhhc2ggPSBoYXNoLnN1YnN0cmluZygxKTtcblx0fVxuXG5cdGhhc2ggPSBkZWNvZGVVUklDb21wb25lbnQoaGFzaCk7XG5cdGhhc2ggPSAoMCwgX3V0aWxzLmVzY2FwZUNzc0lkZW50aWZpZXIpKGhhc2gpO1xuXG5cdC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI2ZpbmQtYS1wb3RlbnRpYWwtaW5kaWNhdGVkLWVsZW1lbnRcblx0cmV0dXJuICgwLCBfdXRpbHMucXVlcnkpKCcjJyArIGhhc2gpIHx8ICgwLCBfdXRpbHMucXVlcnkpKCdhW25hbWU9XFwnJyArIGhhc2ggKyAnXFwnXScpO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0QW5jaG9yRWxlbWVudDsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG52YXIgX2hlbHBlcnMgPSByZXF1aXJlKCcuLi9oZWxwZXJzJyk7XG5cbnZhciBnZXRBbmltYXRpb25Qcm9taXNlcyA9IGZ1bmN0aW9uIGdldEFuaW1hdGlvblByb21pc2VzKCkge1xuXHR2YXIgc2VsZWN0b3IgPSB0aGlzLm9wdGlvbnMuYW5pbWF0aW9uU2VsZWN0b3I7XG5cdHZhciBkdXJhdGlvblByb3BlcnR5ID0gKDAsIF9oZWxwZXJzLnRyYW5zaXRpb25Qcm9wZXJ0eSkoKSArICdEdXJhdGlvbic7XG5cdHZhciBwcm9taXNlcyA9IFtdO1xuXHR2YXIgYW5pbWF0ZWRFbGVtZW50cyA9ICgwLCBfdXRpbHMucXVlcnlBbGwpKHNlbGVjdG9yLCBkb2N1bWVudC5ib2R5KTtcblxuXHRpZiAoIWFuaW1hdGVkRWxlbWVudHMubGVuZ3RoKSB7XG5cdFx0Y29uc29sZS53YXJuKCdbc3d1cF0gTm8gYW5pbWF0ZWQgZWxlbWVudHMgZm91bmQgYnkgc2VsZWN0b3IgJyArIHNlbGVjdG9yKTtcblx0XHRyZXR1cm4gW1Byb21pc2UucmVzb2x2ZSgpXTtcblx0fVxuXG5cdGFuaW1hdGVkRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuXHRcdHZhciB0cmFuc2l0aW9uRHVyYXRpb24gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVtkdXJhdGlvblByb3BlcnR5XTtcblx0XHQvLyBSZXNvbHZlIGltbWVkaWF0ZWx5IGlmIG5vIHRyYW5zaXRpb24gZGVmaW5lZFxuXHRcdGlmICghdHJhbnNpdGlvbkR1cmF0aW9uIHx8IHRyYW5zaXRpb25EdXJhdGlvbiA9PSAnMHMnKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oJ1tzd3VwXSBObyBDU1MgdHJhbnNpdGlvbiBkdXJhdGlvbiBkZWZpbmVkIGZvciBlbGVtZW50IG9mIHNlbGVjdG9yICcgKyBzZWxlY3Rvcik7XG5cdFx0XHRwcm9taXNlcy5wdXNoKFByb21pc2UucmVzb2x2ZSgpKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCgwLCBfaGVscGVycy50cmFuc2l0aW9uRW5kKSgpLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRcdFx0aWYgKGVsZW1lbnQgPT0gZXZlbnQudGFyZ2V0KSB7XG5cdFx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRwcm9taXNlcy5wdXNoKHByb21pc2UpO1xuXHR9KTtcblxuXHRyZXR1cm4gcHJvbWlzZXM7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBnZXRBbmltYXRpb25Qcm9taXNlczsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfaGVscGVycyA9IHJlcXVpcmUoJy4uL2hlbHBlcnMnKTtcblxudmFyIGdldFBhZ2VEYXRhID0gZnVuY3Rpb24gZ2V0UGFnZURhdGEocmVxdWVzdCkge1xuXHQvLyB0aGlzIG1ldGhvZCBjYW4gYmUgcmVwbGFjZWQgaW4gY2FzZSBvdGhlciBjb250ZW50IHRoYW4gaHRtbCBpcyBleHBlY3RlZCB0byBiZSByZWNlaXZlZCBmcm9tIHNlcnZlclxuXHQvLyB0aGlzIGZ1bmN0aW9uIHNob3VsZCBhbHdheXMgcmV0dXJuIHt0aXRsZSwgcGFnZUNsYXNzLCBvcmlnaW5hbENvbnRlbnQsIGJsb2NrcywgcmVzcG9uc2VVUkx9XG5cdC8vIGluIGNhc2UgcGFnZSBoYXMgaW52YWxpZCBzdHJ1Y3R1cmUgLSByZXR1cm4gbnVsbFxuXHR2YXIgaHRtbCA9IHJlcXVlc3QucmVzcG9uc2VUZXh0O1xuXHR2YXIgcGFnZU9iamVjdCA9ICgwLCBfaGVscGVycy5nZXREYXRhRnJvbUh0bWwpKGh0bWwsIHRoaXMub3B0aW9ucy5jb250YWluZXJzKTtcblxuXHRpZiAocGFnZU9iamVjdCkge1xuXHRcdHBhZ2VPYmplY3QucmVzcG9uc2VVUkwgPSByZXF1ZXN0LnJlc3BvbnNlVVJMID8gcmVxdWVzdC5yZXNwb25zZVVSTCA6IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnNvbGUud2FybignW3N3dXBdIFJlY2VpdmVkIHBhZ2UgaXMgaW52YWxpZC4nKTtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBwYWdlT2JqZWN0O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0UGFnZURhdGE7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3NsaWNlZFRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH0gcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyByZXR1cm4gYXJyOyB9IGVsc2UgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkgeyByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpOyB9IGVsc2UgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTsgfSB9OyB9KCk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfaGVscGVycyA9IHJlcXVpcmUoJy4uL2hlbHBlcnMnKTtcblxudmFyIGxvYWRQYWdlID0gZnVuY3Rpb24gbG9hZFBhZ2UoZGF0YSwgcG9wc3RhdGUpIHtcblx0dmFyIF90aGlzID0gdGhpcztcblxuXHQvLyBjcmVhdGUgYXJyYXkgZm9yIHN0b3JpbmcgYW5pbWF0aW9uIHByb21pc2VzXG5cdHZhciBhbmltYXRpb25Qcm9taXNlcyA9IFtdLFxuXHQgICAgeGhyUHJvbWlzZSA9IHZvaWQgMDtcblx0dmFyIGFuaW1hdGVPdXQgPSBmdW5jdGlvbiBhbmltYXRlT3V0KCkge1xuXHRcdF90aGlzLnRyaWdnZXJFdmVudCgnYW5pbWF0aW9uT3V0U3RhcnQnKTtcblxuXHRcdC8vIGhhbmRsZSBjbGFzc2VzXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2lzLWNoYW5naW5nJyk7XG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2lzLWxlYXZpbmcnKTtcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXMtYW5pbWF0aW5nJyk7XG5cdFx0aWYgKHBvcHN0YXRlKSB7XG5cdFx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXMtcG9wc3RhdGUnKTtcblx0XHR9XG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RvLScgKyAoMCwgX2hlbHBlcnMuY2xhc3NpZnkpKGRhdGEudXJsKSk7XG5cblx0XHQvLyBhbmltYXRpb24gcHJvbWlzZSBzdHVmZlxuXHRcdGFuaW1hdGlvblByb21pc2VzID0gX3RoaXMuZ2V0QW5pbWF0aW9uUHJvbWlzZXMoJ291dCcpO1xuXHRcdFByb21pc2UuYWxsKGFuaW1hdGlvblByb21pc2VzKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdF90aGlzLnRyaWdnZXJFdmVudCgnYW5pbWF0aW9uT3V0RG9uZScpO1xuXHRcdH0pO1xuXG5cdFx0Ly8gY3JlYXRlIGhpc3RvcnkgcmVjb3JkIGlmIHRoaXMgaXMgbm90IGEgcG9wc3RhdGUgY2FsbFxuXHRcdGlmICghcG9wc3RhdGUpIHtcblx0XHRcdC8vIGNyZWF0ZSBwb3AgZWxlbWVudCB3aXRoIG9yIHdpdGhvdXQgYW5jaG9yXG5cdFx0XHR2YXIgc3RhdGUgPSB2b2lkIDA7XG5cdFx0XHRpZiAoX3RoaXMuc2Nyb2xsVG9FbGVtZW50ICE9IG51bGwpIHtcblx0XHRcdFx0c3RhdGUgPSBkYXRhLnVybCArIF90aGlzLnNjcm9sbFRvRWxlbWVudDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHN0YXRlID0gZGF0YS51cmw7XG5cdFx0XHR9XG5cblx0XHRcdCgwLCBfaGVscGVycy5jcmVhdGVIaXN0b3J5UmVjb3JkKShzdGF0ZSk7XG5cdFx0fVxuXHR9O1xuXG5cdHRoaXMudHJpZ2dlckV2ZW50KCd0cmFuc2l0aW9uU3RhcnQnLCBwb3BzdGF0ZSk7XG5cblx0Ly8gc2V0IHRyYW5zaXRpb24gb2JqZWN0XG5cdGlmIChkYXRhLmN1c3RvbVRyYW5zaXRpb24gIT0gbnVsbCkge1xuXHRcdHRoaXMudXBkYXRlVHJhbnNpdGlvbih3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUsIGRhdGEudXJsLCBkYXRhLmN1c3RvbVRyYW5zaXRpb24pO1xuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0by0nICsgKDAsIF9oZWxwZXJzLmNsYXNzaWZ5KShkYXRhLmN1c3RvbVRyYW5zaXRpb24pKTtcblx0fSBlbHNlIHtcblx0XHR0aGlzLnVwZGF0ZVRyYW5zaXRpb24od2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLCBkYXRhLnVybCk7XG5cdH1cblxuXHQvLyBzdGFydC9za2lwIGFuaW1hdGlvblxuXHRpZiAoIXBvcHN0YXRlIHx8IHRoaXMub3B0aW9ucy5hbmltYXRlSGlzdG9yeUJyb3dzaW5nKSB7XG5cdFx0YW5pbWF0ZU91dCgpO1xuXHR9IGVsc2Uge1xuXHRcdHRoaXMudHJpZ2dlckV2ZW50KCdhbmltYXRpb25Ta2lwcGVkJyk7XG5cdH1cblxuXHQvLyBzdGFydC9za2lwIGxvYWRpbmcgb2YgcGFnZVxuXHRpZiAodGhpcy5jYWNoZS5leGlzdHMoZGF0YS51cmwpKSB7XG5cdFx0eGhyUHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG5cdFx0XHRyZXNvbHZlKF90aGlzLmNhY2hlLmdldFBhZ2UoZGF0YS51cmwpKTtcblx0XHR9KTtcblx0XHR0aGlzLnRyaWdnZXJFdmVudCgncGFnZVJldHJpZXZlZEZyb21DYWNoZScpO1xuXHR9IGVsc2Uge1xuXHRcdGlmICghdGhpcy5wcmVsb2FkUHJvbWlzZSB8fCB0aGlzLnByZWxvYWRQcm9taXNlLnJvdXRlICE9IGRhdGEudXJsKSB7XG5cdFx0XHR4aHJQcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdFx0XHQoMCwgX2hlbHBlcnMuZmV0Y2gpKF9leHRlbmRzKHt9LCBkYXRhLCB7IGhlYWRlcnM6IF90aGlzLm9wdGlvbnMucmVxdWVzdEhlYWRlcnMgfSksIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHRcdGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDUwMCkge1xuXHRcdFx0XHRcdFx0X3RoaXMudHJpZ2dlckV2ZW50KCdzZXJ2ZXJFcnJvcicpO1xuXHRcdFx0XHRcdFx0cmVqZWN0KGRhdGEudXJsKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8gZ2V0IGpzb24gZGF0YVxuXHRcdFx0XHRcdFx0dmFyIHBhZ2UgPSBfdGhpcy5nZXRQYWdlRGF0YShyZXNwb25zZSk7XG5cdFx0XHRcdFx0XHRpZiAocGFnZSAhPSBudWxsICYmIHBhZ2UuYmxvY2tzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdFx0cGFnZS51cmwgPSBkYXRhLnVybDtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHJlamVjdChkYXRhLnVybCk7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC8vIHJlbmRlciBwYWdlXG5cdFx0XHRcdFx0XHRfdGhpcy5jYWNoZS5jYWNoZVVybChwYWdlKTtcblx0XHRcdFx0XHRcdF90aGlzLnRyaWdnZXJFdmVudCgncGFnZUxvYWRlZCcpO1xuXHRcdFx0XHRcdFx0cmVzb2x2ZShwYWdlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHhoclByb21pc2UgPSB0aGlzLnByZWxvYWRQcm9taXNlO1xuXHRcdH1cblx0fVxuXG5cdC8vIHdoZW4gZXZlcnl0aGluZyBpcyByZWFkeSwgaGFuZGxlIHRoZSBvdXRjb21lXG5cdFByb21pc2UuYWxsKFt4aHJQcm9taXNlXS5jb25jYXQoYW5pbWF0aW9uUHJvbWlzZXMpKS50aGVuKGZ1bmN0aW9uIChfcmVmKSB7XG5cdFx0dmFyIF9yZWYyID0gX3NsaWNlZFRvQXJyYXkoX3JlZiwgMSksXG5cdFx0ICAgIHBhZ2VEYXRhID0gX3JlZjJbMF07XG5cblx0XHQvLyByZW5kZXIgcGFnZVxuXHRcdF90aGlzLnJlbmRlclBhZ2UocGFnZURhdGEsIHBvcHN0YXRlKTtcblx0XHRfdGhpcy5wcmVsb2FkUHJvbWlzZSA9IG51bGw7XG5cdH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvclVybCkge1xuXHRcdC8vIHJld3JpdGUgdGhlIHNraXBQb3BTdGF0ZUhhbmRsaW5nIGZ1bmN0aW9uIHRvIHJlZGlyZWN0IG1hbnVhbGx5IHdoZW4gdGhlIGhpc3RvcnkuZ28gaXMgcHJvY2Vzc2VkXG5cdFx0X3RoaXMub3B0aW9ucy5za2lwUG9wU3RhdGVIYW5kbGluZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHdpbmRvdy5sb2NhdGlvbiA9IGVycm9yVXJsO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fTtcblxuXHRcdC8vIGdvIGJhY2sgdG8gdGhlIGFjdHVhbCBwYWdlIHdlcmUgc3RpbGwgYXRcblx0XHR3aW5kb3cuaGlzdG9yeS5nbygtMSk7XG5cdH0pO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gbG9hZFBhZ2U7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG52YXIgb2ZmID0gZnVuY3Rpb24gb2ZmKGV2ZW50LCBoYW5kbGVyKSB7XG5cdHZhciBfdGhpcyA9IHRoaXM7XG5cblx0aWYgKGV2ZW50ICE9IG51bGwpIHtcblx0XHRpZiAoaGFuZGxlciAhPSBudWxsKSB7XG5cdFx0XHRpZiAodGhpcy5faGFuZGxlcnNbZXZlbnRdICYmIHRoaXMuX2hhbmRsZXJzW2V2ZW50XS5maWx0ZXIoZnVuY3Rpb24gKHNhdmVkSGFuZGxlcikge1xuXHRcdFx0XHRyZXR1cm4gc2F2ZWRIYW5kbGVyID09PSBoYW5kbGVyO1xuXHRcdFx0fSkubGVuZ3RoKSB7XG5cdFx0XHRcdHZhciB0b1JlbW92ZSA9IHRoaXMuX2hhbmRsZXJzW2V2ZW50XS5maWx0ZXIoZnVuY3Rpb24gKHNhdmVkSGFuZGxlcikge1xuXHRcdFx0XHRcdHJldHVybiBzYXZlZEhhbmRsZXIgPT09IGhhbmRsZXI7XG5cdFx0XHRcdH0pWzBdO1xuXHRcdFx0XHR2YXIgaW5kZXggPSB0aGlzLl9oYW5kbGVyc1tldmVudF0uaW5kZXhPZih0b1JlbW92ZSk7XG5cdFx0XHRcdGlmIChpbmRleCA+IC0xKSB7XG5cdFx0XHRcdFx0dGhpcy5faGFuZGxlcnNbZXZlbnRdLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnNvbGUud2FybihcIkhhbmRsZXIgZm9yIGV2ZW50ICdcIiArIGV2ZW50ICsgXCInIG5vIGZvdW5kLlwiKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5faGFuZGxlcnNbZXZlbnRdID0gW107XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdE9iamVjdC5rZXlzKHRoaXMuX2hhbmRsZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXlzKSB7XG5cdFx0XHRfdGhpcy5faGFuZGxlcnNba2V5c10gPSBbXTtcblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gb2ZmOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xudmFyIG9uID0gZnVuY3Rpb24gb24oZXZlbnQsIGhhbmRsZXIpIHtcblx0aWYgKHRoaXMuX2hhbmRsZXJzW2V2ZW50XSkge1xuXHRcdHRoaXMuX2hhbmRsZXJzW2V2ZW50XS5wdXNoKGhhbmRsZXIpO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnNvbGUud2FybihcIlVuc3VwcG9ydGVkIGV2ZW50IFwiICsgZXZlbnQgKyBcIi5cIik7XG5cdH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG9uOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcbnZhciB1c2UgPSBleHBvcnRzLnVzZSA9IGZ1bmN0aW9uIHVzZShwbHVnaW4pIHtcblx0aWYgKCFwbHVnaW4uaXNTd3VwUGx1Z2luKSB7XG5cdFx0Y29uc29sZS53YXJuKCdOb3Qgc3d1cCBwbHVnaW4gaW5zdGFuY2UgJyArIHBsdWdpbiArICcuJyk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dGhpcy5wbHVnaW5zLnB1c2gocGx1Z2luKTtcblx0cGx1Z2luLnN3dXAgPSB0aGlzO1xuXHRpZiAodHlwZW9mIHBsdWdpbi5fYmVmb3JlTW91bnQgPT09ICdmdW5jdGlvbicpIHtcblx0XHRwbHVnaW4uX2JlZm9yZU1vdW50KCk7XG5cdH1cblx0cGx1Z2luLm1vdW50KCk7XG5cblx0cmV0dXJuIHRoaXMucGx1Z2lucztcbn07XG5cbnZhciB1bnVzZSA9IGV4cG9ydHMudW51c2UgPSBmdW5jdGlvbiB1bnVzZShwbHVnaW4pIHtcblx0dmFyIHBsdWdpblJlZmVyZW5jZSA9IHZvaWQgMDtcblxuXHRpZiAodHlwZW9mIHBsdWdpbiA9PT0gJ3N0cmluZycpIHtcblx0XHRwbHVnaW5SZWZlcmVuY2UgPSB0aGlzLnBsdWdpbnMuZmluZChmdW5jdGlvbiAocCkge1xuXHRcdFx0cmV0dXJuIHBsdWdpbiA9PT0gcC5uYW1lO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHBsdWdpblJlZmVyZW5jZSA9IHBsdWdpbjtcblx0fVxuXG5cdGlmICghcGx1Z2luUmVmZXJlbmNlKSB7XG5cdFx0Y29uc29sZS53YXJuKCdObyBzdWNoIHBsdWdpbi4nKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRwbHVnaW5SZWZlcmVuY2UudW5tb3VudCgpO1xuXG5cdGlmICh0eXBlb2YgcGx1Z2luUmVmZXJlbmNlLl9hZnRlclVubW91bnQgPT09ICdmdW5jdGlvbicpIHtcblx0XHRwbHVnaW5SZWZlcmVuY2UuX2FmdGVyVW5tb3VudCgpO1xuXHR9XG5cblx0dmFyIGluZGV4ID0gdGhpcy5wbHVnaW5zLmluZGV4T2YocGx1Z2luUmVmZXJlbmNlKTtcblx0dGhpcy5wbHVnaW5zLnNwbGljZShpbmRleCwgMSk7XG5cblx0cmV0dXJuIHRoaXMucGx1Z2lucztcbn07XG5cbnZhciBmaW5kUGx1Z2luID0gZXhwb3J0cy5maW5kUGx1Z2luID0gZnVuY3Rpb24gZmluZFBsdWdpbihwbHVnaW5OYW1lKSB7XG5cdHJldHVybiB0aGlzLnBsdWdpbnMuZmluZChmdW5jdGlvbiAocCkge1xuXHRcdHJldHVybiBwbHVnaW5OYW1lID09PSBwLm5hbWU7XG5cdH0pO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfaGVscGVycyA9IHJlcXVpcmUoJy4uL2hlbHBlcnMnKTtcblxudmFyIHJlbmRlclBhZ2UgPSBmdW5jdGlvbiByZW5kZXJQYWdlKHBhZ2UsIHBvcHN0YXRlKSB7XG5cdHZhciBfdGhpcyA9IHRoaXM7XG5cblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWxlYXZpbmcnKTtcblxuXHR2YXIgaXNDdXJyZW50UGFnZSA9IHRoaXMuZ2V0Q3VycmVudFVybCgpID09PSBwYWdlLnVybDtcblx0aWYgKCFpc0N1cnJlbnRQYWdlKSByZXR1cm47XG5cblx0Ly8gcmVwbGFjZSBzdGF0ZSBpbiBjYXNlIHRoZSB1cmwgd2FzIHJlZGlyZWN0ZWRcblx0dmFyIHVybCA9IG5ldyBfaGVscGVycy5MaW5rKHBhZ2UucmVzcG9uc2VVUkwpLmdldFBhdGgoKTtcblx0aWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSAhPT0gdXJsKSB7XG5cdFx0d2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHtcblx0XHRcdHVybDogdXJsLFxuXHRcdFx0cmFuZG9tOiBNYXRoLnJhbmRvbSgpLFxuXHRcdFx0c291cmNlOiAnc3d1cCdcblx0XHR9LCBkb2N1bWVudC50aXRsZSwgdXJsKTtcblxuXHRcdC8vIHNhdmUgbmV3IHJlY29yZCBmb3IgcmVkaXJlY3RlZCB1cmxcblx0XHR0aGlzLmNhY2hlLmNhY2hlVXJsKF9leHRlbmRzKHt9LCBwYWdlLCB7IHVybDogdXJsIH0pKTtcblx0fVxuXG5cdC8vIG9ubHkgYWRkIGZvciBub24tcG9wc3RhdGUgdHJhbnNpdGlvbnNcblx0aWYgKCFwb3BzdGF0ZSB8fCB0aGlzLm9wdGlvbnMuYW5pbWF0ZUhpc3RvcnlCcm93c2luZykge1xuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpcy1yZW5kZXJpbmcnKTtcblx0fVxuXG5cdHRoaXMudHJpZ2dlckV2ZW50KCd3aWxsUmVwbGFjZUNvbnRlbnQnLCBwb3BzdGF0ZSk7XG5cdC8vIHJlcGxhY2UgYmxvY2tzXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgcGFnZS5ibG9ja3MubGVuZ3RoOyBpKyspIHtcblx0XHRkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXN3dXA9XCInICsgaSArICdcIl0nKS5vdXRlckhUTUwgPSBwYWdlLmJsb2Nrc1tpXTtcblx0fVxuXHQvLyBzZXQgdGl0bGVcblx0ZG9jdW1lbnQudGl0bGUgPSBwYWdlLnRpdGxlO1xuXHR0aGlzLnRyaWdnZXJFdmVudCgnY29udGVudFJlcGxhY2VkJywgcG9wc3RhdGUpO1xuXHR0aGlzLnRyaWdnZXJFdmVudCgncGFnZVZpZXcnLCBwb3BzdGF0ZSk7XG5cblx0Ly8gZW1wdHkgY2FjaGUgaWYgaXQncyBkaXNhYmxlZCAoYmVjYXVzZSBwYWdlcyBjb3VsZCBiZSBwcmVsb2FkZWQgYW5kIHN0dWZmKVxuXHRpZiAoIXRoaXMub3B0aW9ucy5jYWNoZSkge1xuXHRcdHRoaXMuY2FjaGUuZW1wdHkoKTtcblx0fVxuXG5cdC8vIHN0YXJ0IGFuaW1hdGlvbiBJTlxuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoIXBvcHN0YXRlIHx8IF90aGlzLm9wdGlvbnMuYW5pbWF0ZUhpc3RvcnlCcm93c2luZykge1xuXHRcdFx0X3RoaXMudHJpZ2dlckV2ZW50KCdhbmltYXRpb25JblN0YXJ0Jyk7XG5cdFx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYW5pbWF0aW5nJyk7XG5cdFx0fVxuXHR9LCAxMCk7XG5cblx0Ly8gaGFuZGxlIGVuZCBvZiBhbmltYXRpb25cblx0aWYgKCFwb3BzdGF0ZSB8fCB0aGlzLm9wdGlvbnMuYW5pbWF0ZUhpc3RvcnlCcm93c2luZykge1xuXHRcdHZhciBhbmltYXRpb25Qcm9taXNlcyA9IHRoaXMuZ2V0QW5pbWF0aW9uUHJvbWlzZXMoJ2luJyk7XG5cdFx0UHJvbWlzZS5hbGwoYW5pbWF0aW9uUHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0X3RoaXMudHJpZ2dlckV2ZW50KCdhbmltYXRpb25JbkRvbmUnKTtcblx0XHRcdF90aGlzLnRyaWdnZXJFdmVudCgndHJhbnNpdGlvbkVuZCcsIHBvcHN0YXRlKTtcblx0XHRcdF90aGlzLmNsZWFudXBBbmltYXRpb25DbGFzc2VzKCk7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0dGhpcy50cmlnZ2VyRXZlbnQoJ3RyYW5zaXRpb25FbmQnLCBwb3BzdGF0ZSk7XG5cdH1cblxuXHQvLyByZXNldCBzY3JvbGwtdG8gZWxlbWVudFxuXHR0aGlzLnNjcm9sbFRvRWxlbWVudCA9IG51bGw7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSByZW5kZXJQYWdlOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcbnZhciB0cmlnZ2VyRXZlbnQgPSBmdW5jdGlvbiB0cmlnZ2VyRXZlbnQoZXZlbnROYW1lLCBvcmlnaW5hbEV2ZW50KSB7XG5cdC8vIGNhbGwgc2F2ZWQgaGFuZGxlcnMgd2l0aCBcIm9uXCIgbWV0aG9kIGFuZCBwYXNzIG9yaWdpbmFsRXZlbnQgb2JqZWN0IGlmIGF2YWlsYWJsZVxuXHR0aGlzLl9oYW5kbGVyc1tldmVudE5hbWVdLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZXIpIHtcblx0XHR0cnkge1xuXHRcdFx0aGFuZGxlcihvcmlnaW5hbEV2ZW50KTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG5cdFx0fVxuXHR9KTtcblxuXHQvLyB0cmlnZ2VyIGV2ZW50IG9uIGRvY3VtZW50IHdpdGggcHJlZml4IFwic3d1cDpcIlxuXHR2YXIgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3N3dXA6JyArIGV2ZW50TmFtZSwgeyBkZXRhaWw6IGV2ZW50TmFtZSB9KTtcblx0ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSB0cmlnZ2VyRXZlbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG52YXIgdXBkYXRlVHJhbnNpdGlvbiA9IGZ1bmN0aW9uIHVwZGF0ZVRyYW5zaXRpb24oZnJvbSwgdG8sIGN1c3RvbSkge1xuXHQvLyB0cmFuc2l0aW9uIHJvdXRlc1xuXHR0aGlzLnRyYW5zaXRpb24gPSB7XG5cdFx0ZnJvbTogZnJvbSxcblx0XHR0bzogdG8sXG5cdFx0Y3VzdG9tOiBjdXN0b21cblx0fTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHVwZGF0ZVRyYW5zaXRpb247IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xudmFyIHF1ZXJ5ID0gZXhwb3J0cy5xdWVyeSA9IGZ1bmN0aW9uIHF1ZXJ5KHNlbGVjdG9yKSB7XG5cdHZhciBjb250ZXh0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBkb2N1bWVudDtcblxuXHRpZiAodHlwZW9mIHNlbGVjdG9yICE9PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiBzZWxlY3Rvcjtcblx0fVxuXG5cdHJldHVybiBjb250ZXh0LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xufTtcblxudmFyIHF1ZXJ5QWxsID0gZXhwb3J0cy5xdWVyeUFsbCA9IGZ1bmN0aW9uIHF1ZXJ5QWxsKHNlbGVjdG9yKSB7XG5cdHZhciBjb250ZXh0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBkb2N1bWVudDtcblxuXHRpZiAodHlwZW9mIHNlbGVjdG9yICE9PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiBzZWxlY3Rvcjtcblx0fVxuXG5cdHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcbn07XG5cbnZhciBlc2NhcGVDc3NJZGVudGlmaWVyID0gZXhwb3J0cy5lc2NhcGVDc3NJZGVudGlmaWVyID0gZnVuY3Rpb24gZXNjYXBlQ3NzSWRlbnRpZmllcihpZGVudCkge1xuXHRpZiAod2luZG93LkNTUyAmJiB3aW5kb3cuQ1NTLmVzY2FwZSkge1xuXHRcdHJldHVybiBDU1MuZXNjYXBlKGlkZW50KTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gaWRlbnQ7XG5cdH1cbn07IiwiLyoqIEtlZXBzIHRyYWNrIG9mIHJhdyBsaXN0ZW5lcnMgYWRkZWQgdG8gdGhlIGJhc2UgZWxlbWVudHMgdG8gYXZvaWQgZHVwbGljYXRpb24gKi9cbmNvbnN0IGxlZGdlciA9IG5ldyBXZWFrTWFwKCk7XG5mdW5jdGlvbiBlZGl0TGVkZ2VyKHdhbnRlZCwgYmFzZUVsZW1lbnQsIGNhbGxiYWNrLCBzZXR1cCkge1xuICAgIHZhciBfYSwgX2I7XG4gICAgaWYgKCF3YW50ZWQgJiYgIWxlZGdlci5oYXMoYmFzZUVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgZWxlbWVudE1hcCA9IChfYSA9IGxlZGdlci5nZXQoYmFzZUVsZW1lbnQpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBuZXcgV2Vha01hcCgpO1xuICAgIGxlZGdlci5zZXQoYmFzZUVsZW1lbnQsIGVsZW1lbnRNYXApO1xuICAgIGlmICghd2FudGVkICYmICFsZWRnZXIuaGFzKGJhc2VFbGVtZW50KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHNldHVwcyA9IChfYiA9IGVsZW1lbnRNYXAuZ2V0KGNhbGxiYWNrKSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogbmV3IFNldCgpO1xuICAgIGVsZW1lbnRNYXAuc2V0KGNhbGxiYWNrLCBzZXR1cHMpO1xuICAgIGNvbnN0IGV4aXN0ZWQgPSBzZXR1cHMuaGFzKHNldHVwKTtcbiAgICBpZiAod2FudGVkKSB7XG4gICAgICAgIHNldHVwcy5hZGQoc2V0dXApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc2V0dXBzLmRlbGV0ZShzZXR1cCk7XG4gICAgfVxuICAgIHJldHVybiBleGlzdGVkICYmIHdhbnRlZDtcbn1cbmZ1bmN0aW9uIGlzRXZlbnRUYXJnZXQoZWxlbWVudHMpIHtcbiAgICByZXR1cm4gdHlwZW9mIGVsZW1lbnRzLmFkZEV2ZW50TGlzdGVuZXIgPT09ICdmdW5jdGlvbic7XG59XG5mdW5jdGlvbiBzYWZlQ2xvc2VzdChldmVudCwgc2VsZWN0b3IpIHtcbiAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBUZXh0KSB7XG4gICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgRWxlbWVudCAmJiBldmVudC5jdXJyZW50VGFyZ2V0IGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgICAvLyBgLmNsb3Nlc3QoKWAgbWF5IG1hdGNoIGFuY2VzdG9ycyBvZiBgY3VycmVudFRhcmdldGAgYnV0IHdlIG9ubHkgbmVlZCBpdHMgY2hpbGRyZW5cbiAgICAgICAgY29uc3QgY2xvc2VzdCA9IHRhcmdldC5jbG9zZXN0KHNlbGVjdG9yKTtcbiAgICAgICAgaWYgKGNsb3Nlc3QgJiYgZXZlbnQuY3VycmVudFRhcmdldC5jb250YWlucyhjbG9zZXN0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGNsb3Nlc3Q7XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyBUaGlzIHR5cGUgaXNuJ3QgZXhwb3J0ZWQgYXMgYSBkZWNsYXJhdGlvbiwgc28gaXQgbmVlZHMgdG8gYmUgZHVwbGljYXRlZCBhYm92ZVxuZnVuY3Rpb24gZGVsZWdhdGUoYmFzZSwgc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgLy8gSGFuZGxlIFNlbGVjdG9yLWJhc2VkIHVzYWdlXG4gICAgaWYgKHR5cGVvZiBiYXNlID09PSAnc3RyaW5nJykge1xuICAgICAgICBiYXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChiYXNlKTtcbiAgICB9XG4gICAgLy8gSGFuZGxlIEFycmF5LWxpa2UgYmFzZWQgdXNhZ2VcbiAgICBpZiAoIWlzRXZlbnRUYXJnZXQoYmFzZSkpIHtcbiAgICAgICAgY29uc3Qgc3Vic2NyaXB0aW9ucyA9IEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChiYXNlLCAoZWxlbWVudCkgPT4gZGVsZWdhdGUoZWxlbWVudCwgc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrLCBvcHRpb25zKSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkZXN0cm95KCkge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgc3Vic2NyaXB0aW9uIG9mIHN1YnNjcmlwdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICAvLyBgZG9jdW1lbnRgIHNob3VsZCBuZXZlciBiZSB0aGUgYmFzZSwgaXQncyBqdXN0IGFuIGVhc3kgd2F5IHRvIGRlZmluZSBcImdsb2JhbCBldmVudCBsaXN0ZW5lcnNcIlxuICAgIGNvbnN0IGJhc2VFbGVtZW50ID0gYmFzZSBpbnN0YW5jZW9mIERvY3VtZW50ID8gYmFzZS5kb2N1bWVudEVsZW1lbnQgOiBiYXNlO1xuICAgIC8vIEhhbmRsZSB0aGUgcmVndWxhciBFbGVtZW50IHVzYWdlXG4gICAgY29uc3QgY2FwdHVyZSA9IEJvb2xlYW4odHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnID8gb3B0aW9ucy5jYXB0dXJlIDogb3B0aW9ucyk7XG4gICAgY29uc3QgbGlzdGVuZXJGbiA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBkZWxlZ2F0ZVRhcmdldCA9IHNhZmVDbG9zZXN0KGV2ZW50LCBzZWxlY3Rvcik7XG4gICAgICAgIGlmIChkZWxlZ2F0ZVRhcmdldCkge1xuICAgICAgICAgICAgZXZlbnQuZGVsZWdhdGVUYXJnZXQgPSBkZWxlZ2F0ZVRhcmdldDtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoYmFzZUVsZW1lbnQsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gRHJvcCB1bnN1cHBvcnRlZCBgb25jZWAgb3B0aW9uIGh0dHBzOi8vZ2l0aHViLmNvbS9mcmVnYW50ZS9kZWxlZ2F0ZS1pdC9wdWxsLzI4I2Rpc2N1c3Npb25fcjg2MzQ2NzkzOVxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgZGVsZXRlIG9wdGlvbnMub25jZTtcbiAgICB9XG4gICAgY29uc3Qgc2V0dXAgPSBKU09OLnN0cmluZ2lmeSh7IHNlbGVjdG9yLCB0eXBlLCBjYXB0dXJlIH0pO1xuICAgIGNvbnN0IGlzQWxyZWFkeUxpc3RlbmluZyA9IGVkaXRMZWRnZXIodHJ1ZSwgYmFzZUVsZW1lbnQsIGNhbGxiYWNrLCBzZXR1cCk7XG4gICAgY29uc3QgZGVsZWdhdGVTdWJzY3JpcHRpb24gPSB7XG4gICAgICAgIGRlc3Ryb3koKSB7XG4gICAgICAgICAgICBiYXNlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyRm4sIG9wdGlvbnMpO1xuICAgICAgICAgICAgZWRpdExlZGdlcihmYWxzZSwgYmFzZUVsZW1lbnQsIGNhbGxiYWNrLCBzZXR1cCk7XG4gICAgICAgIH0sXG4gICAgfTtcbiAgICBpZiAoIWlzQWxyZWFkeUxpc3RlbmluZykge1xuICAgICAgICBiYXNlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyRm4sIG9wdGlvbnMpO1xuICAgIH1cbiAgICByZXR1cm4gZGVsZWdhdGVTdWJzY3JpcHRpb247XG59XG5leHBvcnQgZGVmYXVsdCBkZWxlZ2F0ZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgTWluaU1hc29ucnkgZnJvbSBcIm1pbmltYXNvbnJ5XCI7XG5pbXBvcnQgU3d1cCBmcm9tICdzd3VwJztcbmltcG9ydCBTd3VwRmFkZVRoZW1lIGZyb20gJ0Bzd3VwL2ZhZGUtdGhlbWUnO1xuXG5mdW5jdGlvbiBmcmVlTWFzb25zKCkge1xuICBcbiAgdmFyIG1hc29ucnkgPSBuZXcgTWluaU1hc29ucnkoe1xuICAgIGNvbnRhaW5lcjogJy5ibG9nLWFydGljbGVzJyxcbiAgICBndXR0ZXI6IDE2LFxuICAgIGJhc2V3aWR0aDogMjk0XG4gIH0pOyBcbiAgXG4gIG1hc29ucnkubGF5b3V0KCk7XG5cbn1cblxuY29uc3Qgc3d1cCA9IG5ldyBTd3VwKHtcbiAgbGlua1NlbGVjdG9yOiAnYS50YWdsaW5rJyxcbiAgcGx1Z2luczogW1xuICAgIG5ldyBTd3VwRmFkZVRoZW1lKClcbiAgXVxufSk7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGZyZWVNYXNvbnMoKTtcbiAgdGFnTGluZSgpO1xufVxuXG5zd3VwLm9uKCdjb250ZW50UmVwbGFjZWQnLCBpbml0KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKXtcbiAgZnJlZU1hc29ucygpO1xuICB0YWdMaW5lKCk7XG59KTtcblxuZnVuY3Rpb24gdGFnTGluZSgpIHtcbiAgY29uc3QgY29udGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3d1cCcpO1xuICBsZXQgY3VycmVudFRhZyA9IGNvbnRhLmRhdGFzZXQudGFnO1xuICBcbiAgaWYoY3VycmVudFRhZyAhPSAnYWxsJykge1xuICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG9waWZ5LXNlY3Rpb24uaW1hZ2VfYmFubmVyJykpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG9waWZ5LXNlY3Rpb24uaW1hZ2VfYmFubmVyJykuY2xhc3NMaXN0LmFkZCgndmlzdWFsbHktaGlkZGVuJyk7XG4gICAgfVxuICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibG9nX2ludHJvJykpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibG9nX2ludHJvJykuY2xhc3NMaXN0LmFkZCgndmlzdWFsbHktaGlkZGVuJyk7XG4gICAgfVxuICAgIGlmKGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwid2hpdGVfbG9nb1wiKSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwid2hpdGVfbG9nb1wiKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcIndoaXRlX2xvZ29faGlkZGVuXCIpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvcGlmeS1zZWN0aW9uLmltYWdlX2Jhbm5lcicpKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvcGlmeS1zZWN0aW9uLmltYWdlX2Jhbm5lcicpLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc3VhbGx5LWhpZGRlbicpO1xuICAgIH1cbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmxvZ19pbnRybycpKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmxvZ19pbnRybycpLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc3VhbGx5LWhpZGRlbicpO1xuICAgIH1cbiAgICBpZihkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcIndoaXRlX2xvZ29faGlkZGVuXCIpKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJ3aGl0ZV9sb2dvXCIpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwid2hpdGVfbG9nb19oaWRkZW5cIik7XG4gICAgfVxuICB9XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hcnRpY2xlX3RhZ3MgYScpLmZvckVhY2goIGZ1bmN0aW9uKHRhZ05hdikge1xuICAgIGlmKHRhZ05hdi5kYXRhc2V0LnRhZyA9PSBjdXJyZW50VGFnKSB7XG4gICAgICB0YWdOYXYuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhZ05hdi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9XG4gIH0pO1xuICBcbn0iXSwibmFtZXMiOlsiTWluaU1hc29ucnkiLCJTd3VwIiwiU3d1cEZhZGVUaGVtZSIsImZyZWVNYXNvbnMiLCJtYXNvbnJ5IiwiY29udGFpbmVyIiwiZ3V0dGVyIiwiYmFzZXdpZHRoIiwibGF5b3V0Iiwic3d1cCIsImxpbmtTZWxlY3RvciIsInBsdWdpbnMiLCJpbml0IiwidGFnTGluZSIsIm9uIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29udGEiLCJxdWVyeVNlbGVjdG9yIiwiY3VycmVudFRhZyIsImRhdGFzZXQiLCJ0YWciLCJjbGFzc0xpc3QiLCJhZGQiLCJib2R5IiwiY29udGFpbnMiLCJyZW1vdmUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInRhZ05hdiJdLCJzb3VyY2VSb290IjoiIn0=