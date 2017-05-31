$(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 200) {
            $(".header").addClass('smaller');
        } else {
            $(".header").removeClass("smaller");
        }
    });
});
