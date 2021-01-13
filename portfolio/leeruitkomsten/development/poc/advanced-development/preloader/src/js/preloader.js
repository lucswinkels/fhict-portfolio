jQuery(document).ready(function ($) {
    var Body = $('body');
    Body.addClass('preloader-site');
});
$(window).load(function () {
    $('.preloader-wrapper').delay(3000).fadeOut(1000);
    $('body').removeClass('preloader-site');
});