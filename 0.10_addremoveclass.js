$(document).ready(function(){

	$(".font-color-change").removeClass("font-color-change");

	$("#add-class").addClass("font-color-change");

	$("#toggle-button").click(function(){
		$("#toggle-class p").toggleClass("font-color-change");
	});
});