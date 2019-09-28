import "bootstrap";
import Flickity from "flickity";
import NiceScroll from "jquery.nicescroll";
import "../js/main";
import "../css/main.scss";
import "./index.scss";

let carouselBike = document.querySelector('.flickity-carousel-bike');
let flkty = new Flickity( carouselBike, {
  // options
  cellAlign: 'left',
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
