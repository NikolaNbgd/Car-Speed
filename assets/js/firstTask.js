//Variable in which we will append data
var car_blocks = document.getElementById('cars');

//Ajax call
var jsonRequest = new XMLHttpRequest();
jsonRequest.open('GET', 'data.json');
jsonRequest.onload = function () {
	var ourData = JSON.parse(jsonRequest.responseText);
	
	//Call renderData function
	renderData(ourData);
}

jsonRequest.send();

	
function renderData(data) {

	//An empty string in which we will store data 
	var carString = "";

	//Loop for passing through all data
	for (i = 0; i < data.length; i++) {
		carString += '<p>'+data.cars.name[i]+'</p>';
	}

	car_blocks.insertAdjacentHTML('beforeend',carString);
}