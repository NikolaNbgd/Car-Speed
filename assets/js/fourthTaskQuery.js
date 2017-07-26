$(document).ready(function () {

	$('.flip-container').find('img').click(function () {
		$(this).css('height', '50px');
		$('#show-data1').find('.scale:first').append(this);
	})

	$.getJSON('data.json', function (response) {

		var dist = response.distance;

		var someDiv1 = '<div class="scale" style="width: '+dist+'px; height: '+dist+'px;"></div>';
		var someDiv2 = '<div class="scale" style="width: '+dist+'px; height: '+dist+'px;"></div>';
		var someDiv3 = '<div class="scale" style="width: '+dist+'px; height: '+dist+'px;"></div>';

			for (var y = 0; y < 10; y++) {
				$('#show-data1').append(someDiv1);
				$('#show-data2').append(someDiv2);
				$('#show-data3').append(someDiv3);
			}
		
	});

	$(document).on('click', '.start', function () {
		var speed = $('#carSpeed').val();
		if (isNaN(speed) || speed.length == " ") {
			alert('Ovo polje je obavezno i uneta vrednost mora biti broj');
		}
	})

})
