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

/***/ "./js/scripts.js":
/*!***********************!*\
  !*** ./js/scripts.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

// when scrolling lets not kill the processor
function throttle(fn, wait) {
  var time = Date.now();
  return function () {
    if (time + wait - Date.now() < 0) {
      fn();
      time = Date.now();
    }
  };
}

function distanceScrolled() {
  if (pageYOffset > 60) {
    document.body.classList.add("hidenav");
  } else {
    document.body.classList.remove("hidenav");
  }
}

function viewport() {
  window.addEventListener("scroll", throttle(distanceScrolled, 10));
}

distanceScrolled();
var navCloser = document.getElementById("navCloser");
var hamburger = document.querySelector(".hamburger");
var nav = document.querySelector(".nav-section");
hamburger.addEventListener("click", function () {
  if (nav.classList.contains("active")) {
    hamburger.classList.remove("is-active");
    nav.classList.remove("active");
    document.body.classList.remove("nav-active");
  } else {
    hamburger.classList.add("is-active");
    nav.classList.add("active");
    document.body.classList.add("nav-active");
  }
});
navCloser.addEventListener('click', function () {
  hamburger.classList.remove("is-active");
  nav.classList.remove("active");
  document.body.classList.remove("nav-active");
});

function bodyCloser() {
  var nav = document.getElementById('accessibleNav');
  var heeder = document.querySelector('.header-wrapper');
  var button = document.getElementById('menuTrigger');
  var main = document.querySelector('main');

  if (heeder.classList.contains('nav-out')) {
    main.addEventListener("click", function () {
      button.classList.remove('nav-open');
      nav.classList.remove('active');
      heeder.classList.remove('nav-out');
      document.body.classList.remove('mob-nav-out');
    }, false);
    nav.addEventListener("click", function (ev) {
      ev.stopPropagation();
    }, false);
  }
}

var mobNav = window.matchMedia("(max-width: 960px)");

function closeNav() {
  var nav = document.getElementById("accessibleNav");
  var button = document.getElementById('menuTrigger');
  var heeder = document.querySelector('.header-wrapper');
  button.classList.remove('nav-open');
  nav.classList.remove('active');
  heeder.classList.remove('nav-out');
  document.body.classList.remove('mob-nav-out');
}

function mobNavigation() {
  var nav = document.getElementById("accessibleNav");
  var button = document.getElementById('menuTrigger');
  var heeder = document.querySelector('.header-wrapper');
  var searchToggle = document.getElementById('searchToggle');
  var headerSearch = document.getElementById('headerSearch');
  var mobSearchClose = document.getElementById('mobSearchClose'); // button.addEventListener('click', function (){
  //   if (nav.classList.contains('active')) {
  //     //console.log("close");
  //     button.classList.remove('nav-open');
  //     nav.classList.remove('active');
  //     heeder.classList.remove('nav-out');
  //     document.body.classList.remove('mob-nav-out');
  //   } else {
  //     //console.log("open");
  //     button.classList.add('nav-open');
  //     nav.classList.add('active');
  //     heeder.classList.add('nav-out');
  //     document.body.classList.add('mob-nav-out');
  //     bodyCloser();
  //   }
  // });
  // dropdown togglers

  document.querySelectorAll('.mega-nav .hasmega').forEach(function (dropLevel1) {
    dropLevel1.querySelector('a.level1_parent').addEventListener('click', function () {
      if (dropLevel1.classList.contains('active')) {
        dropLevel1.classList.remove("active");
      } else {
        dropLevel1.classList.add("active");
      }

      ;

      if (mobNav.matches) {
        event.preventDefault();
      }
    });
  });
  document.querySelectorAll('.mega-nav .hasmega .level2_item.isparent').forEach(function (dropLevel2) {
    dropLevel2.addEventListener('click', function () {
      if (dropLevel2.classList.contains('active')) {
        dropLevel2.classList.remove("active");
      } else {
        dropLevel2.classList.add("active");
      }
    });
  });
}

mobNavigation();

/***/ }),

/***/ 1:
/*!*****************************!*\
  !*** multi ./js/scripts.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dougalcrowder/Sites/MM/mm-src/js/scripts.js */"./js/scripts.js");


/***/ })

/******/ });