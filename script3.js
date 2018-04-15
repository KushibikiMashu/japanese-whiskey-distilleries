$(function(){
	$('nav a').click(function(){
		var id = $(this).attr('href');
		var adjust = -56;
		var position = $(id).offset().top + adjust;
		$('html, body').animate({
			'scrollTop': position
		}, 500);
	});









});