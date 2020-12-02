window.onload = function () {
    // Elementen die beinvloed worden definiëren
    var elements = document.querySelectorAll('.logo circle');

    var preloader = anime({
        // Definiëren welke elementen geanimeerd worden
        targets: elements,
        // Animatie properties
        translateX: 50,
        easing: 'easeInOutSine',
        duration: 500,
        // Manier van animeren zodat het herhalen soepel verloopt
        direction: 'alternate',
        // Oneindig herhalen
        loop: true
    });
}