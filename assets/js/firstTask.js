
//Variable in which we will append data
var car_blocks = document.getElementById('cars');

//Ajax call
var jsonRequest = new XMLHttpRequest();
jsonRequest.open('GET', 'data.json');
jsonRequest.onreadystatechange = function () {
	var ourData = JSON.parse(jsonRequest.responseText);
	//Call renderData function
	renderData(ourData);
}

jsonRequest.send();

function renderData(data) {

	//An empty string in which we will store data 
	var carString = "";

	//Loop for passing through all data
	for (i = 0; i < data.cars.length; i++) {
				var carString = '<div class="col-sm-4">';
				carString += '<img src="'+data.cars[i].image+'">';
				carString += '<p>'+data.cars[i].name+'</p>';
				carString += '</div>';
		}
		
	car_blocks.insertAdjacentHTML('beforeend', carString);
}