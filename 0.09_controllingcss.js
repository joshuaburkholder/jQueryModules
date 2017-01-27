$(document).ready(function(){
	
	console.log($("#read-css").css("font-size"));

	$("#change-css-example").css("color", "blue");

	$("#change-css-object-example").css({
		"color": "green",
		"background-color": "yellow",
		"border": "2px solid red"
	});

});