$(document).ready(function(){
	$("#p1").click(function(){
		$(this).hide()
	});

	$("h3").css({border: "3px solid blue"});

	$("li:lt(1)").css("background-color", "black");
});