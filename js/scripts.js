(function($) {
    'use strict';

    // All JavaScript pluging initialization code here

    //Scroll to bottom
    $(".scroll-btn").on('click', function() {
        $('html,body').animate({
                scrollTop: $("#about").offset().top
            },
            'slow');
    });


    // WoW
    new WOW().init();

    // CounterUp
    $(".counter").counterUp({
        delay: 10,
        time: 1000
    });

    //Slider
    $(".slider-home-1").slick({
        autoplay: false,
        speed: 300,
        autoplayspeed: 3000,
        dots: true,
        arrows: false,
        fade: true,
        easing: 'linear',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    //Testimonial
    $(".brand-logo-slider").slick({
        autoplay: false,
        speed: 300,
        autoplayspeed: 3000,
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 991, settings: { slidesToShow: 1 } },
            { breakpoint: 767, settings: { slidesToShow: 1 } },
            { breakpoint: 479, settings: { slidesToShow: 1 } },
        ]
    });

    //Blog post thumbnail
    $(".blog-post-wrapper").slick({
        autoplay: false,
        speed: 300,
        autoplayspeed: 3000,
        dots: true,
        arrows: false,
        fade: true,
        easing: 'linear',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    //Single Portfolio
    $(".single-portfolio-wrapper").slick({
        autoplay: false,
        speed: 300,
        autoplayspeed: 3000,
        dots: true,
        arrows: true,
        fade: true,
        easing: 'linear',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    //Venobox
    $('.venobox').venobox();

    // Portfolio activation
    $('.portfolio-section').imagesLoaded(function() {
        var $grid = $('.portfolio-items').isotope({
            itemSelector: '.single-portfolio-item',
            percentPosition: true,
        })

        // Portfolio filtering activation
        $('.portfolio-filter li a').on('click', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });

        // Filter menu active class addition  
        $('.portfolio-filter li').on('click', function(event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });

        // LOAD MORE BUTTON FOR PORTFOLIO
        $('.load-more-btn').on('click', function(event) {
            $('.single-portfolio-item').removeClass('hidden');
            var $grid = $('.portfolio-items').isotope();
            $(this).hide();
            $('.portfolio-section .load-more').append('<a class="button-link" href="javascript:void(0)">No More Items</a>')
            event.preventDefault();
        });
    });

    /*-------------------------------------------
      SCROLL TO TOP BUTTON
    ---------------------------------------------*/
    $('body').append('<a id="back-to-top" class="to-top-btn" href="#"><i class="fa fa-angle-up"></i></a>');
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('to-top-show');
                } else {
                    $('#back-to-top').removeClass('to-top-show');
                }
            };
        backToTop();
        $(window).on('scroll', function() {
            backToTop();
        });
        $('#back-to-top').on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 500);
        });
    };


    /*-----------------------------------------------------------------------------------
      PARALLAX ACTIVATION FOT VAITOUS SECTION 
    /*-----------------------------------------------------------------------------------*/
    $.stellar({
        horizontalScrolling: false,
        scrollProperty: 'scroll',
        positionProperty: 'position',
        verticalOffset: 40
    });

})(jQuery)