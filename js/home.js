(function ($) {

	/*slider product in home*/

	$('.cate-slider').slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
  		infinite: true,
  		arrows: false,
  		autoplaySpeed: 2000
	});

	/**
	* RESPONSIVE
	*/

	/**
	* Search Input
	*/
	$('#search-res').on( 'input', function() {
		$(this).css('width','100%').trigger('input'); 
	});

	/**
	* Categories Slider In Footer Of Mobile Devices
	*/
	$('.list-cate-slider').slick({
		dots: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: false,
  		infinite: true,
  		arrows: false,
  		responsive: [
		    {
		     	breakpoint: 520,
		     	settings: {
		        	slidesToShow: 4,
					slidesToScroll: 1,
					autoplay: false,
		      	}
		    }
  		]
	});

	/**
	* Logo Slider In Footer Of Mobile Devices
	*/
	$('.logo-trade-slider').slick({
		dots: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: false,
  		autoplaySpeed: 2000,
  		infinite: true,
  		arrows: false,
  		responsive: [
		    {
		     	breakpoint: 480,
		     	settings: {
		        	slidesToShow: 2,
					slidesToScroll: 1,
					autoplay: false,
		      	}
		    }
  		]
	});
	
})(jQuery);