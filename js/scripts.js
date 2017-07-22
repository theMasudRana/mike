(function($) {
    'use strict';

    // All JavaScript pluging initialization code here

    
    // WoW
	new WOW().init();

	// CounterUp
	$(".counter").counterUp({
		delay: 10,
		time: 1000
	});

	$(".testimonial-wrapper").slick({
		autoplay: false,
        speed: 300,
        autoplayspeed: 3000,
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 991, settings: { slidesToShow: 1 } },
            { breakpoint: 767, settings: { slidesToShow: 1 } },
            { breakpoint: 479, settings: { slidesToShow: 1 } },
        ]
	});


    

})(jQuery)
