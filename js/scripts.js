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

	$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})



    

})(jQuery)
