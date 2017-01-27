$(document).ready(function(){

	//content to be added
	var content = "You can add me anywhere!"
	var content2 = "You can add me, too!"

	//apend
	$("#append-example").append(content);

	//html method
	$("html-example").html(content);

	//text method
	$("text-example").text(content2);

});