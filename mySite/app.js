$(function () {
    //Fixed header//
    let header = $('#header');
    let intro = $('#intro');
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $('#nav');
    let navToggle = $('#navToggle');

    $(window).on('scroll resize', function () {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        checkScroll(scrollPos, introH);
    });
    function checkScroll(scrollPos, introH) {
        if (scrollPos > introH) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    }
    //Smooth scroll//
    $('[data-scroll]').on('click', function (e) {
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
        nav.removeClass('show');
        $('html,body').animate({
            scrollTop: elementOffset - 115
        }, 700)
        e.preventDefault();
    });
    //Nav Toggle
    navToggle.on('click', function (e) {
        nav.toggleClass('show');
        e.preventDefault();
    });
    //Reviews : https://kenwheeler.github.io/slick/
    let slider = $('#reviewsSlider');
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:false,
        arrows:false,
        dots:true
    });
});