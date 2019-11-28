/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([28,2]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/bootstrap/dist/js/bootstrap.js
var bootstrap = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__(0);
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);

// EXTERNAL MODULE: ./node_modules/flickity/js/index.js
var js = __webpack_require__(5);
var js_default = /*#__PURE__*/__webpack_require__.n(js);

// EXTERNAL MODULE: ./node_modules/jquery.nicescroll/jquery.nicescroll.js
var jquery_nicescroll = __webpack_require__(21);

// CONCATENATED MODULE: ./src/js/bg-parallax.js

var bg_parallax_bgParallax = function bgParallax() {
  var settings = {
    slow: 10,
    normal: 5,
    fast: 2
  };
  var wScroll = jquery_default()(window).scrollTop() / settings.normal;
  jquery_default()("#hero").css("background-position", "center -" + wScroll + "px");
};
// CONCATENATED MODULE: ./src/js/smooth-scroll.js
// smooth scroll
function scrollTo() {
  var links = document.querySelectorAll('.scroll');
  links.forEach(function (each) {
    return each.onclick = scrollAnchors;
  });
}

function scrollAnchors(e) {
  var respond = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  var distanceToTop = function distanceToTop(el) {
    return Math.floor(el.getBoundingClientRect().top);
  };

  e.preventDefault();
  var targetID = respond ? respond.getAttribute('href') : this.getAttribute('href');
  var targetAnchor = document.querySelector(targetID);
  if (!targetAnchor) return;
  var originalTop = distanceToTop(targetAnchor);
  window.scrollBy({
    top: originalTop,
    left: 0,
    behavior: 'smooth'
  });
  var checkIfDone = setInterval(function () {
    var atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;

    if (distanceToTop(targetAnchor) === 0 || atBottom) {
      targetAnchor.tabIndex = '-1';
      targetAnchor.focus();
      window.history.pushState('', '', targetID);
      clearInterval(checkIfDone);
    }
  }, 100);
}
// CONCATENATED MODULE: ./src/js/main.js




var mediaLG = window.matchMedia("(max-width: 1199px)");
var mediaMD = window.matchMedia("(max-width: 991px)");
var mediaSM = window.matchMedia("(max-width: 767px)");
var mediaXS = window.matchMedia("(max-width: 576px)"); // navbar toggle hamburger menu btn X

jquery_default()(".navbar-toggle").mouseenter(function () {
  jquery_default()(".icon-bar").css("background-color", "#ccc");
}).mouseleave(function () {
  jquery_default()(".icon-bar").css("background-color", "#fff");
}); // navbar toggle hamburger menu btn X

jquery_default()(".navbar-toggle").click(function () {
  jquery_default()(".bar-top").toggleClass("bar-top-x");
  jquery_default()(".bar-mid").toggleClass("bar-mid-x");
  jquery_default()(".bar-bot").toggleClass("bar-bot-x");
}); // smooth scrolling between sections
// smoothScroll(1000);
// function smoothScroll(duration) {
//     $("a[href*='#']").click(function(event) {
//         var target = $( $(this).attr("href") );
//         if (target.length) {
//             event.preventDefault();
//             $("html, body").animate({
//                 scrollTop: target.offset().top
//             }, duration);
//         }
//     });
// }

(function () {
  scrollTo();
})(); // give navbar background on scroll


jquery_default()(window).scroll(function () {
  var $window = jquery_default()(window);
  var wScroll = $window.scrollTop();
  var windowW = $window.width();

  if (windowW >= 768) {
    if (jquery_default()("#hero").offset().top + 20 < wScroll) {
      jquery_default()(".navbar").css({
        "background-color": "hsla(0, 0%, 0%, 0.3)",
        "padding-top": "0px",
        "padding-bottom": "0px"
      });
      jquery_default()(".navbar-brand > img").css("width", "50%");
    } else if (jquery_default()("#hero").offset().top + 20 > wScroll) {
      jquery_default()(".navbar").css({
        "background-color": "hsla(0, 0%, 0%, 0)",
        "padding-top": "16px",
        "padding-bottom": "16px"
      });
      jquery_default()(".navbar-brand > img").css("width", "100%");
    }
  } else if (windowW < 768) {
    if (jquery_default()("#hero").offset().top + 20 < wScroll) {
      jquery_default()(".navbar").css({
        "background-color": "hsla(0, 0%, 0%, 0.3)",
        "padding-top": "2px",
        "padding-bottom": "2px"
      });
      jquery_default()(".navbar-brand").css("padding", "6px 6px 6px 15px");
      jquery_default()(".navbar-brand > img").css("width", "120px");
      jquery_default()(".navbar-toggle").css("margin", "5px 15px 0 0");
    } else if (jquery_default()("#hero").offset().top + 20 > wScroll) {
      jquery_default()(".navbar").css({
        "background-color": "hsla(0, 0%, 0%, 0)",
        "padding-top": "8px",
        "padding-bottom": "8px"
      });
      jquery_default()(".navbar-brand").css("padding", "4px 15px 15px");
      jquery_default()(".navbar-brand > img").css("width", "160px");
      jquery_default()(".navbar-toggle").css("margin", "8px 15px 8px 0");
    }
  }

  bg_parallax_bgParallax();
}); // nicescroll
// mediaSmChange();
// mediaSM.addEventListener("change", mediaSmChange);
// function mediaSmChange() {
//     if (!mediaSM.matches) {
//         niceScrollMain();
//     } else {
//         return;
//     }
// }

function loadNiceScroll() {
  if (window.innerWidth < 768) {
    return;
    console.log("nicescroll activated");
  } else {
    console.log("nicescroll disabled");
    niceScrollMain();
  }
}

loadNiceScroll();
window.addEventListener("resize", loadNiceScroll);

function niceScrollMain() {
  jquery_default()("body").niceScroll({
    zindex: 9999,
    cursorcolor: "hsl(0, 0%, 23%)",
    cursorwidth: "10px",
    cursorborder: "0",
    autohidemode: false,
    background: "hsla(0, 0%, 69%, 0.2)"
  });
} // copyright year


var date = new Date();
var copyright = document.querySelector(".copyright-year");
copyright.textContent = date.getFullYear();
// EXTERNAL MODULE: ./src/page-index/index.scss
var page_index = __webpack_require__(22);

// CONCATENATED MODULE: ./src/page-index/index.js



 // import "../css/main.scss";

 // $(window).scroll(function() {
//   bgParallax();
// });
// flickity fix for iOS

(function () {
  var touchingCarousel = false,
      touchStartCoords;
  document.body.addEventListener('touchstart', function (e) {
    if (e.target.closest('.flickity-slider')) {
      touchingCarousel = true;
    } else {
      touchingCarousel = false;
      return;
    }

    touchStartCoords = {
      x: e.touches[0].pageX,
      y: e.touches[0].pageY
    };
  });
  document.body.addEventListener('touchmove', function (e) {
    if (!(touchingCarousel && e.cancelable)) {
      return;
    }

    var moveVector = {
      x: e.touches[0].pageX - touchStartCoords.x,
      y: e.touches[0].pageY - touchStartCoords.y
    };
    if (Math.abs(moveVector.x) > 7) e.preventDefault();
  }, {
    passive: false
  });
})();

var carouselBike = document.querySelector('.flickity-carousel-bike');
var flkty = new js_default.a(carouselBike, {
  // options
  cellAlign: 'center',
  contain: true,
  wrapAround: true,
  touchVerticalScroll: false,
  dragThreshold: 1
});
var carouselAcc = document.querySelector('.flickity-carousel-accessories');
var flktyAcc = new js_default.a(carouselAcc, {
  // options
  cellAlign: 'left',
  contain: true,
  wrapAround: true,
  touchVerticalScroll: false,
  dragThreshold: 1
});

/***/ })

/******/ });