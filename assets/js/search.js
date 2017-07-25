 function filter() {
    
    term = document.getElementById("search").value.toLowerCase();

    pattern = new RegExp(term);
    elements = document.getElementsByTagName("P");

        for (var i = 0; i < elements.length; i++){
            
        if (!pattern.test(elements[i].id.toLowerCase())) {
            elements[i].parentNode.style.display = 'none';
        } else {
            elements[i].parentNode.style.display = 'block';

        }
        
    }
}