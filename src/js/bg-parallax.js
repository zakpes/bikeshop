import $ from "jquery";

export const bgParallax = function() {

    var settings = {
        slow: 10,
        normal: 5,
        fast: 2
    };
  
    var wScroll = $(window).scrollTop() / settings.normal;
  
    $("#hero").css("background-position", "center -" + wScroll + "px");
  }