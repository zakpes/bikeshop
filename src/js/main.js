import $ from "jquery";

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
    $("a[href='#presentation']").click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
        }
    });

    // give navbar background on scroll
    $(window).scroll(function () {

        var $window = $(window);
        var wScroll = $window.scrollTop();
        var windowW = $window.width();

        if (windowW >= 768) {

            if ($("#hero").offset().top + 20 < wScroll) {
                $(".navbar").css({"background-color": "hsla(0, 0%, 0%, 0.3)", "padding-top": "8px", "padding-bottom": "8px"});
                $(".navbar-brand > img").css("width", "100%");
            } else if ($("#hero").offset().top + 20 > wScroll) {
                $(".navbar").css({"background-color": "hsla(0, 0%, 0%, 0)", "padding-top": "16px", "padding-bottom": "16px"});
                $(".navbar-brand > img").css("width", "100%");
            }
        } else {
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

        // #hero bg parallax
        // $("section[data-type='background']").each(function() {
        //     var $this = $(this);
        //
        //     $window.scroll(function() {
        //        var yPos = ($window.scrollTop() / $this.data("speed"));
        //
        //        var coords = "50% -" + yPos + "px";
        //
        //        $this.css({backgroundPosition: coords});
        //     });
        // });

        bgParallax();
    });

    function bgParallax() {

        var settings = {
            slow: 10,
            normal: 5,
            fast: 2
        };

        var wScroll = $(window).scrollTop() / settings.normal;

        $("#hero").css("background-position", "center -" + wScroll + "px");
    }

    $("html").niceScroll({
        zindex: 9999,
        cursorcolor: "hsl(0, 0%, 13%)",
        cursorwidth: "10px",
        cursorborder: "0",
        autohidemode: false,
        background: "hsl(0, 0%, 40%)"
    });


