$(function(){
	$('nav a').click(function(){
		var id = $(this).attr('href');
		var position = $(id).offset().top - 50;
		$('html, body').animate({
			scrollTop : position
		}, 500);
	});
});