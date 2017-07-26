//Variable in which we will append data
var car_blocks = document.getElementById('cars');

//Static json.data Ajax call
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        var ourData = JSON.parse(xhr.responseText);
        renderData(ourData);
    }

}
xhr.open('GET', 'data.json', true);
xhr.send(null);

//Function which render json data into div with id cars
function renderData(data) {

    //An empty string in which we will store data 
    var carString = "";

    //Loop for passing through all data
    for (i = 0; i < data.cars.length; i++) {
        carString += '<div class="car col-sm-6 col-md-4">';
        carString += '<a href="#">';
        carString += '<img src="'+data.cars[i].image+'">';
        carString += '<p>'+data.cars[i].name+'</p>';
        carString += '</a>'
        carString += '</div>';
    }

    //Inserting data in HTML page
    car_blocks.insertAdjacentHTML('beforeend', carString);
} 


//The filtering function
function filter() {

    //The term the user is looking for
    term = document.getElementById("search").value.toLowerCase();

    //Regular expression term
    pattern = new RegExp(term);

    //The element that filters the function
    elements = document.getElementsByTagName("p");

    //The search loop goes through the text on the page and show the filtering cars
    for (var i = 0; i < elements.length; i++) {
        
        if (!pattern.test(elements[i].innerHTML.toLowerCase())) {
            elements[i].parentNode.parentNode.style.display = 'none';
        } else {
            elements[i].parentNode.parentNode.style.display = 'block';
        }
    }
}
