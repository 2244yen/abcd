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
	* Slider Product
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

	/*Banner footer for mobile*/
	
	/*var data1 = $('#data1').text();
	var text1 = data1.length - 2;
	var res = data1.substring(0,text1);
	var n = res.replace(/,/g,"");
	num1 = parseInt(n);
	var qtn1 = $('#qtn1').val();
	num2 =parseInt(qtn1);
	document.getElementById("data2").innerHTML = num1 * num2;*/

	/**
	* Product slider
	*/

})(jQuery);