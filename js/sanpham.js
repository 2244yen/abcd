(function ($) {

	var a = $('#qty').val();
	b = parseInt(a);
	$("#add").click(function() {
		b = b + 1;
		$('#qty').val(b);
	});
	$("#subtract").click(function() {
		if (b > 1) {
			b = b - 1;
			$('#qty').val(b);
		};
	});

	/**
	* Product Gallery
	*/

	$('.previews a').click(function(){
	  var largeImage = $(this).attr('data-full');
	  $('.selected').removeClass();
	  $(this).addClass('selected');
	  $('.full img').hide();
	  $('.full img').attr('src', largeImage);
	  $('.full img').fadeIn();


	}); // closing the listening on a click
	$('.full img').on('click', function(){
	  var modalImage = $(this).attr('src');
	  $.fancybox.open(modalImage);
	});

	/**
		Fix order product
	*/

	$(".order-btn-right").click(function(e) {
		e.preventDefault();
		$(".product-on-cart-fix").css({
			'right': '-220px'
		});
		$('.order-btn-left').show();
		$('.order-btn-right').hide();
	});

	$(".order-btn-left").click(function(e) {
		e.preventDefault();
		$(".product-on-cart-fix").css({
			'right': '0'
		});
		$('.order-btn-left').hide();
		$('.order-btn-right').show();
	});

})(jQuery);