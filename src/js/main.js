import $ from "jquery";
import NiceScroll from "jquery.nicescroll";
import {bgParallax} from "../page-index/index";
import {scrollTo} from "./smooth-scroll";

// navbar toggle hamburger menu btn X
$(".navbar-toggle").mouseenter(function() {
    $(".icon-bar").css("background-color", "#ccc");
}).mouseleave(function () {
    $(".icon-bar").css("background-color", "#fff");
});

// navbar toggle hamburger menu btn X
$(".navbar-toggle").click(function() {
    $(".bar-top").toggleClass("bar-top-x");
    $(".bar-mid").toggleClass("bar-mid-x");
    $(".bar-bot").toggleClass("bar-bot-x");
});

// smooth scrolling between sections
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
(function() {
	scrollTo();
})();

// give navbar background on scroll
$(window).scroll(function () {

    var $window = $(window);
    var wScroll = $window.scrollTop();
    var windowW = $window.width();
    console.log(wScroll);
    

    if (windowW >= 768) {

        if ($("#hero").offset().top + 20 < wScroll) {
            $(".navbar").css({"background-color": "hsla(0, 0%, 0%, 0.3)", "padding-top": "0px", "padding-bottom": "0px"});
            $(".navbar-brand > img").css("width", "50%");
        } else if ($("#hero").offset().top + 20 > wScroll) {
            $(".navbar").css({"background-color": "hsla(0, 0%, 0%, 0)", "padding-top": "16px", "padding-bottom": "16px"});
            $(".navbar-brand > img").css("width", "100%");
        }

    } else if (windowW < 768) {
        if ($("#hero").offset().top + 20 < wScroll) {
            $(".navbar").css({"background-color": "hsla(0, 0%, 0%, 0.3)", "padding-top": "2px", "padding-bottom": "2px"});
            $(".navbar-brand").css("padding", "6px 6px 6px 15px");
            $(".navbar-brand > img").css("width", "120px");
            $(".navbar-toggle").css("margin", "5px 15px 0 0");
        } else if ($("#hero").offset().top + 20 > wScroll) {
            $(".navbar").css({"background-color": "hsla(0, 0%, 0%, 0)", "padding-top": "8px", "padding-bottom": "8px"});
            $(".navbar-brand").css("padding", "4px 15px 15px");
            $(".navbar-brand > img").css("width", "160px");
            $(".navbar-toggle").css("margin", "8px 15px 8px 0");
        }
    }
    bgParallax();
});

// nicescroll
$("body").niceScroll({
    zindex: 9999,
    cursorcolor: "hsl(0, 0%, 23%)",
    cursorwidth: "10px",
    cursorborder: "0",
    autohidemode: false,
    background: "hsla(0, 0%, 69%, 0.2)"
});

// copyright year
const date = new Date();
const copyright = document.querySelector(".copyright-year");
copyright.textContent = date.getFullYear();
