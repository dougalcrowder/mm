/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./js/scripts.js ***!
  \***********************/
// function distanceScrolled() {
//   if (pageYOffset > 32) {
//     document.body.classList.add("hideNav");
//   } else {
//     document.body.classList.remove("hideNav");
//   }
// }
// 
// window.addEventListener('scroll', function () {
//   distanceScrolled();
// });

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
var navbar = document.getElementById("MainContent");
var sticky = 120;
function distanceScrolled() {
  if (window.pageYOffset >= sticky) {
    document.body.classList.add("hidenav");
  } else {
    document.body.classList.remove("hidenav");
  }
}
distanceScrolled();
function viewport() {
  window.addEventListener("scroll", throttle(distanceScrolled, 10));
}
viewport();
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
  var mobSearchClose = document.getElementById('mobSearchClose');

  // button.addEventListener('click', function (){
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
/******/ })()
;