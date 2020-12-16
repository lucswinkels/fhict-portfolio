jQuery(document).ready(function ($) {
    var Body = $('body');
    Body.addClass('preloader-site');
});
$(window).load(function () {
    $('.preloader-wrapper').delay(2000).fadeOut("slow");
    $('body').removeClass('preloader-site');
});