(function ($) {

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

})(jQuery);
