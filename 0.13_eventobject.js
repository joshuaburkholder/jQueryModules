$(document).ready(function() {
	$("*").click(function(e){
		console.log(e.target);
		console.log("the X Coordinates are " + e.pageX);
		e.stopPropagation();
	})
});

