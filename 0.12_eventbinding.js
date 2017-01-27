$(document).ready(function() {
	$('#on li').on('click', function(){
		$(this).hide();
	})
	$('off li').on('click', function(){
		$(this).hide();
		$('#off li').off('click');
	})
	$('#off li').click(function(){
		$(this).hide();
		$('#off li').off('click');
	})

});

