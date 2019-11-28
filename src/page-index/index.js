import "bootstrap";
import $ from "jquery";
import Flickity from "flickity";
import "../js/main";
// import "../css/main.scss";
import "./index.scss";



// $(window).scroll(function() {
//   bgParallax();
// });

// flickity fix for iOS
(function() {
    var touchingCarousel = false,
      touchStartCoords;

    document.body.addEventListener('touchstart', function(e) {
      if (e.target.closest('.flickity-slider')) {
        touchingCarousel = true;
      } else {
        touchingCarousel = false;
        return;
      }

      touchStartCoords = {
        x: e.touches[0].pageX,
        y: e.touches[0].pageY
      }
    });

    document.body.addEventListener('touchmove', function(e) {
      if (!(touchingCarousel && e.cancelable)) {
        return;
      }

      var moveVector = {
        x: e.touches[0].pageX - touchStartCoords.x,
        y: e.touches[0].pageY - touchStartCoords.y
      };

      if (Math.abs(moveVector.x) > 7)
        e.preventDefault()

    }, {passive: false});
})();

const carouselBike = document.querySelector('.flickity-carousel-bike');
const flkty = new Flickity( carouselBike, {
  // options
  cellAlign: 'center',
  contain: true,
  wrapAround: true,
  touchVerticalScroll: false,
  dragThreshold: 1
});

const carouselAcc = document.querySelector('.flickity-carousel-accessories');
const flktyAcc = new Flickity( carouselAcc, {
  // options
  cellAlign: 'left',
  contain: true,
  wrapAround: true,
  touchVerticalScroll: false,
  dragThreshold: 1
});
