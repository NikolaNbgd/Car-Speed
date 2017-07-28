$(document).ready(function () {

	$('.flip-container .back').find('.back-img').click(function (e) {
		e.preventDefault();

		//Appeding selected images
		var picture = $(this).next().clone();
		picture.css('height', '50px');
		$('#show-data1').find('.scale:first').append(picture);
		

		//For better user experiance
		$('html, body').animate({
	        scrollTop: $("#show-data1").offset().top
	    }, 1500);

	});

	$.getJSON('data.json', function (response) {

		//Variable for distance value
		var dist = response.distance;

		//Creating a scale
		var scale1 = '<div class="scale" style="width: '+dist+'px; height: '+dist+'px;"></div>';
		var scale2 = '<div class="scale" style="width: '+dist+'px; height: '+dist+'px;"></div>';
		var scale3 = '<div class="scale" style="width: '+dist+'px; height: '+dist+'px;"></div>';

			for (var i = 0; i < 10; i++) {
				$('#show-data1').append(scale1);
				$('#show-data2').append(scale2);
				$('#show-data3').append(scale3);
			}
		
	});

	//Validate input field
	$(document).on('click', '.action .start', function () {
		var speed = $('#carSpeed').val();
		if ( isNaN(speed) || speed.length == "" ) {
			$('.flash-message').fadeIn();
		}
	});

	$(document).on('click', '.close-message', function (e) {
		e.preventDefault();
		$(this).parent().fadeOut();
	});

});