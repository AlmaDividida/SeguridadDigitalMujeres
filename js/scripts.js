/* TOOGLE ANIMATION ON CLICK */
$(document).ready(function() {
    if ($('header').width() < 1200) {
        $("#nav").hide();
    } else {
        $("#nav").show();
    }
    $("#menu-toogle").click(function() {
        $("#nav").toggle("linear");
        $("#toogle").toggleClass('rotate');

    });
});

/* HIDE TOOGLE RESPONSIVE WEB DESIGN */
$(window).resize(function() {
    if ($('header').width() < 1200) {
        $("#nav").hide();
    } else {
        $("#nav").show();
    }
});

/* BACKGROUNG HEADER TRANSPARENCY ON SCROLL */
$(window).scroll(function() {
    $(".home").css("transition", ".4s");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        $(".home").css("background", "#111111");
    } else {
        $(".home").css("background", "none");
    }
});