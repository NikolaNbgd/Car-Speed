$(document).ready(function () {

	$('#search').keyup(function () {
    var value = $(this).val().toLowerCase().trim();

    $('#cars .car').each(function (index) {
    	if (!index) return;
    	$(this).find('p').each(function () {
    		var id = $(this).text().toLowerCase().trim();
    		var not_found = (id.indexOf(value) == -1);
    		$(this).closest('.car').toggle(!not_found);
    		return not_found;
    		});
    	});
	});
});