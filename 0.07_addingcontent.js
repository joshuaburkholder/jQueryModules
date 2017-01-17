$(document).ready(function(){

	//content to be added
	var content = "<p style='color: red'>You can add me anywhere in the DOM using different jQuery methods!</p>";
	var content2 = "You can add me anywhere in the DOM using different jQuery methods!";

	//apend
	$("#append-example").append(content);

	//prepend
	$("prepend-example").prepend(content);	

})