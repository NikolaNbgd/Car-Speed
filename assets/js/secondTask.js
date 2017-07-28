// //The filtering function
// function filter() {

//     //The term the user is looking for
//     term = document.getElementById("search").value.toLowerCase();

//     //Regular expression term
//     pattern = new RegExp(term);

//     //The element that filters the function
//     elements = document.getElementsByTagName("p");

//     //The search loop goes through the text on the page and show the filtering cars
//     for (var i = 0; i < elements.length; i++) {
        
//         if (!pattern.test(elements[i].innerHTML.toLowerCase())) {
//             elements[i].parentNode.style.display = 'none';
//         } else {
//             elements[i].parentNode.style.display = 'block';
//         }
//     }
// }