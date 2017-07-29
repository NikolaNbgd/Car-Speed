$(document).ready(function () {

	//Counder for appending cars in different field
	fieldNumber = 1;

	$('.flip-container .back').find('.back-img').click(function (e) {
		e.preventDefault();

		//Appeding selected images
		var picture = $(this).next().clone();
		picture.css('height', '50px');
		$('#show-data'+fieldNumber).find('.scale:first').append(picture);
		fieldNumber+=1;

		//For better user experiance
		$('html, body').animate({
	        scrollTop: $("#show-data1").offset().top
	    }, 1500);

	});

	// field = 1;
	$(document).on('click', '.start', function () {

		// var ss = $('#show-data' + field).find('.scale:first');
		// field+=1;
		// 	if (ss.has('img')) {
		// 		for (var i = 0; i < ss.length; i++) {
		// 			ss.find('img').each(function () {
		// 				$(this).addClass('move');
		// 			})

		// 		}
		// 	}
	
			// index = 0;
			// carSpeeds = 0;
			$.getJSON('data.json', function (response) {
				$.each(response.cars, function (r,car) {
					// $('.grandParent').find('img:eq('+index+')').css({
					// 	'transform' : 'translateX(450px)',
					// 	'transition' : '1s'
					// 	// 'transition' : '.'+car+'s'
					// });
					// index++;
					// carSpeeds++;
					// console.log(car);



				})
			})
		});

	//Static ajax call for calculating speed for each car
	$.post('data.json', function (data) {
		for (var i = 0; i < data.cars.length; i++) {

			var finalPutno = 450 / ((data.cars[0].speed * 1000) / 3600);
			var finalMazda = 450 / ((data.cars[1].speed * 1000) / 3600);
			var finalMercedes = 450 / ((data.cars[2].speed * 1000) / 3600);
			var finalHonda = 450 / ((data.cars[3].speed * 1000) / 3600);
			var finalSmart = 450 / ((data.cars[4].speed * 1000) / 3600);


		}
	})

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
	// $(document).on('click', '.action .start', function () {
	// 	var speed = $('#carSpeed').val();
	// 	if ( isNaN(speed) || speed.length == "" ) {
	// 		$('.flash-message').fadeIn();
	// 	}
	// });

	// $(document).on('click', '.close-message', function (e) {
	// 	e.preventDefault();
	// 	$(this).parent().fadeOut();
	// });

});