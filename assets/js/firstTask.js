
//Variable in which we will append data
var car_blocks = document.getElementById('cars');

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
    	var ourData = JSON.parse(xhr.responseText);
        console.log(ourData);
        renderData(ourData);
    }

}
xhr.open('GET', 'data.json', true);
xhr.send(null);

function renderData(data) {

	//An empty string in which we will store data 
	var carString = "";

	//Loop for passing through all data
	for (i = 0; i < data.cars.length; i++) {
		carString += '<div class="col-sm-4">';
		carString += '<img src="'+data.cars[i].image+'">';
		carString += '<p>'+data.cars[i].name+'</p>';
		carString += '</div>';
	}

	car_blocks.insertAdjacentHTML('beforeend', carString);
}