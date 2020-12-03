// Initialise AOS Library
AOS.init();

// Smooth Link Scrolling
$(".smooth-scroll").click(function () {
    $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        },
        800
    );
    return false;
});