$(document).ready(function () {

    //An empty array in which cars id are being pushed
    var carArr = [];

    //Json data
    var data;

    $.getJSON('data.json', function (response) {
        data = response;
    })

    //Counder for appending cars in different field
    fieldNumber = 1;

    // Function for appending picture
    $('.flip-container .back').find('.back-img').click(function (e) {
        e.preventDefault();

        if (carArr.length < 3) {

            carArr.push($(this).next().clone().attr('id'));

            // Cloning picture on click
            var picture = $(this).next().clone();
            picture.css('height', '50px');

            //Appending picure on click
            $('#show-data' + fieldNumber).find('.scale:first').append(picture);
            fieldNumber += 1;

            //For better user experiance
            $('html, body').animate({
                scrollTop: $("#show-data1").offset().top
            }, 1500);
        }

    });

    //Function that triggers the race on click
    $(document).on('click', '.start', function () {

        var elem = [];
        var carOne;
        var carTwo;
        var carThree;
        var helparr = []

        for (var i = 0; i < 3; i++) {
            elem.push(data.cars[carArr[i]]);
            helparr.push(data.cars[carArr[i]].speed)
        }

        //Here sorts the speeds from the smallest to the highest and depending on which background color it will depend on
        // Checked in if, and else-if down below
        helparr = helparr.sort();

        // The essence is in this: 450 / (data.cars[carArr[0]].speed)) * 1000
        // The faster car will finish the animation first
        $("#show-data1 .scale img").animate({
            left: "450"
        }, (450 / (data.cars[carArr[0]].speed)) * 1000, function () {

            //Colors are assigned here, depending on the position
            if (data.cars[carArr[0]].speed === helparr[0]) {
                carOne = "#cc6633"
            } else if (data.cars[carArr[0]].speed === helparr[1]) {
                carOne = "#C0C0C0"
            } else {
                carOne = "#FFD700"
            }
            $("#show-data1").css('background-color', carOne);
        });

        $("#show-data2 .scale img").animate({
            left: "450"
        }, (450 / (data.cars[carArr[1]].speed)) * 1000, function () {
            if (data.cars[carArr[1]].speed === helparr[0]) {
                carTwo = "#cc6633"
            } else if (data.cars[carArr[1]].speed === helparr[1]) {
                carTwo = "#C0C0C0"
            } else {
                carTwo = "#FFD700"
            }
            $("#show-data2").css('background-color', carTwo)
        });

        $("#show-data3 .scale img").animate({
            left: "450"
        }, (450 / (data.cars[carArr[2]].speed)) * 1000, function () {
            if (data.cars[carArr[2]].speed === helparr[0]) {
                carThree = "#cc6633"
            } else if (data.cars[carArr[2]].speed === helparr[1]) {
                carThree = "#C0C0C0"
            } else {
                carThree = "#FFD700"
            }
            $("#show-data3").css('background-color', carThree)
        });
    });


    $.getJSON('data.json', function (response) {

        //Variable for distance value
        var dist = response.distance;

        //Creating a scale
        var scale1 = '<div class="scale" style="width: ' + dist + 'px; height: ' + dist + 'px;"></div>';
        var scale2 = '<div class="scale" style="width: ' + dist + 'px; height: ' + dist + 'px;"></div>';
        var scale3 = '<div class="scale" style="width: ' + dist + 'px; height: ' + dist + 'px;"></div>';

        for (var i = 0; i < 10; i++) {
            $('#show-data1').append(scale1);
            $('#show-data2').append(scale2);
            $('#show-data3').append(scale3);
        }

    });
});