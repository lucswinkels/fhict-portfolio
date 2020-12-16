window.onload = function () {

    // Versie 1
    var elementv1c1 = document.querySelectorAll('.logo-v1 .circle-1');
    var elementv1c2 = document.querySelectorAll('.logo-v1 .circle-2');
    var elementv1c3 = document.querySelectorAll('.logo-v1 .circle-3');
    // Roze
    var preloaderv1c1 = anime({
        targets: elementv1c1,
        translateX: 50,
        translateY: -50,
        easing: 'easeInOutCubic',
        duration: 1000,
        direction: 'alternate',
        loop: true
    });
    // Paars
    var preloaderv1c2 = anime({
        targets: elementv1c2,
        translateX: -50,
        translateY: -50,
        easing: 'easeInOutCubic',
        duration: 1000,
        direction: 'alternate',
        loop: true
    });
    // Blauw
    var preloaderv1c3 = anime({
        targets: elementv1c3,
        translateY: 50,
        easing: 'easeInOutCubic',
        duration: 1000,
        direction: 'alternate',
        loop: true
    });

    // Versie 2
    var elementv2c1 = document.querySelectorAll('.logo-v2 .circle-1');
    var elementv2c2 = document.querySelectorAll('.logo-v2 .circle-2');
    var elementv2c3 = document.querySelectorAll('.logo-v2 .circle-3');

    // Roze
    var preloaderv2c1 = anime({
        targets: elementv2c1,
        translateX: 40,
        translateY: -40,
        easing: 'easeInOutCubic',
        duration: 600,
        direction: 'alternate',
        delay: 50,
        endDelay: 350,
        loop: true
    });
    // Paars
    var preloaderv2c2 = anime({
        targets: elementv2c2,
        translateX: -40,
        translateY: -40,
        easing: 'easeInOutCubic',
        duration: 600,
        direction: 'alternate',
        delay: 400,
        endDelay: 100,
        loop: true
    });
    // Blauw
    var preloaderv2c3 = anime({
        targets: elementv2c3,
        translateY: 80,
        easing: 'easeInOutCubic',
        duration: 600,
        direction: 'alternate',
        delay: 200,
        endDelay: 200,
        loop: true
    });

    // Versie 3
    var elementv3c1 = document.querySelectorAll('.logo-v3 .circle-1');
    var elementv3c2 = document.querySelectorAll('.logo-v3 .circle-2');
    var elementv3c3 = document.querySelectorAll('.logo-v3 .circle-3');

    // Roze
    var preloaderv3c1 = anime({
        targets: elementv3c1,
        translateY: [{
                duration: 1000,
                value: '-=60px',
            },
            {
                duration: 1000,
                value: '+=60px',
            }, {
                duration: 1000,
                value: '+=0',
            },
        ],
        translateX: [{
                duration: 1000,
                value: '-=40px',
            }, {
                duration: 1000,
                value: '-=40px',
            },
            {
                duration: 1000,
                value: '+=80px',
            }
        ],
        loop: true,
        easing: 'easeInOutElastic(1, .6)'
    });

    // Paars
    var preloaderv3c2 = anime({
        targets: elementv3c2,
        translateY: [{
                duration: 1000,
                value: '+=0px',
            },
            {
                duration: 1000,
                value: '-=60px',
            },
            {
                duration: 1000,
                value: '+=60px',
            }
        ],
        translateX: [{
                duration: 1000,
                value: '+=80px',
            },
            {
                duration: 1000,
                value: '-=40px',
            },
            {
                duration: 1000,
                value: '-=40px',
            }
        ],
        loop: true,
        easing: 'easeInOutElastic(1, .6)'
    });
    // Blauw
    var preloaderv3c3 = anime({
        targets: elementv3c3,
        translateY: [{
                duration: 1000,
                value: '+=60px',
            },
            {
                duration: 1000,
                value: '+=0px',
            },
            {
                duration: 1000,
                value: '-=60px',
            }
        ],
        translateX: [{
                duration: 1000,
                value: '-=40px',
            },
            {
                duration: 1000,
                value: '+=80px',
            },
            {
                duration: 1000,
                value: '-=40px',
            }
        ],
        loop: true,
        easing: 'easeInOutElastic(1, .6)'
    });

    // Demo versie
    var elementc1 = document.querySelectorAll('.preloader-demo .circle1');
    var elementc2 = document.querySelectorAll('.preloader-demo .circle2');
    var elementc3 = document.querySelectorAll('.preloader-demo .circle3');

    // Roze
    var preloaderc1 = anime({
        targets: elementc1,
        translateY: [{
                duration: 1000,
                value: '-=60px',
            },
            {
                duration: 1000,
                value: '+=60px',
            }, {
                duration: 1000,
                value: '+=0',
            },
        ],
        translateX: [{
                duration: 1000,
                value: '-=40px',
            }, {
                duration: 1000,
                value: '-=40px',
            },
            {
                duration: 1000,
                value: '+=80px',
            }
        ],
        loop: true,
        easing: 'easeInOutElastic(1, .6)'
    });
    // Paars
    var preloaderc2 = anime({
        targets: elementc2,
        translateY: [{
                duration: 1000,
                value: '+=0px',
            },
            {
                duration: 1000,
                value: '-=60px',
            },
            {
                duration: 1000,
                value: '+=60px',
            }
        ],
        translateX: [{
                duration: 1000,
                value: '+=80px',
            },
            {
                duration: 1000,
                value: '-=40px',
            },
            {
                duration: 1000,
                value: '-=40px',
            }
        ],
        loop: true,
        easing: 'easeInOutElastic(1, .6)'
    });
    // Blauw
    var preloaderc3 = anime({
        targets: elementc3,
        translateY: [{
                duration: 1000,
                value: '+=60px',
            },
            {
                duration: 1000,
                value: '+=0px',
            },
            {
                duration: 1000,
                value: '-=60px',
            }
        ],
        translateX: [{
                duration: 1000,
                value: '-=40px',
            },
            {
                duration: 1000,
                value: '+=80px',
            },
            {
                duration: 1000,
                value: '-=40px',
            }
        ],
        loop: true,
        easing: 'easeInOutElastic(1, .6)'
    });

}