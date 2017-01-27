$(document).ready(function(){
	$("#animate").click(function(){
		$(this).animate({
			"height": "200px",
			"width" : "300px"
		});
	});

	$("#animate-time").click(function(){
		$(this).animate({
			"height": "200px",
			"width": "300px"
		}, 4000);
	});

	$("#animate-callback").click(function(){
		$(this).animate({
			"height": "200px",
			"width": "300px"
		}, 2500, function(){
			$(this).animate({"background-color": "red"});
		});
	});
	
	function changeColor(){
		$(this).animate({"background-color": "red"});
	}
	$("animate-callback").click(function(){
		$(this).animate({
			"height": "300px",
			"width": "300px"
		}, 2500, changeColor);
	});
});