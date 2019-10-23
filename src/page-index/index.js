import "bootstrap";
import $ from "jquery";
import Flickity from "flickity";
import "../js/main";
// import "../css/main.scss";
import "./index.scss";

export const bgParallax = function() {

  var settings = {
      slow: 10,
      normal: 5,
      fast: 2
  };

  var wScroll = $(window).scrollTop() / settings.normal;

  $("#hero").css("background-position", "center -" + wScroll + "px");
}

// $(window).scroll(function() {
//   bgParallax();
// });

let carouselBike = document.querySelector('.flickity-carousel-bike');
let flkty = new Flickity( carouselBike, {
  // options
  cellAlign: 'center',
  contain: true,
  wrapAround: true
});

let carouselAcc = document.querySelector('.flickity-carousel-accessories');
let flktyAcc = new Flickity( carouselAcc, {
  // options
  cellAlign: 'left',
  contain: true,
  wrapAround: true
});
