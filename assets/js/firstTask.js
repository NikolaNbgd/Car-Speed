//Variable in which we will append data
var carBlocks = document.getElementById('cars');

//Ajax call
var jsonRequest = new XMLHttpRequest();
jsonRequest.open('POST', 'data.json');
jsonRequest.onload = function () {
	var ourData = JSON.parse(jsonRequest.responseText);
	renderHTML(ourData);
}
jsonRequest.send();

	
function renderHTML(data) {

	//An empty string in which we will store data 
	var carString = "";

	//Loop for passing through all data
	for (i = 0; i < data.length; i++) {
		carString += '<p>'+data[i].cars.name+'</p>';
	}

	carBlocks.insertAdjacentHTML('beforeend',carString);

}