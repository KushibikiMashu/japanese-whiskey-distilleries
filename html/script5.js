$(function(){
	$('nav a').click(function(){
		var id = $(this).attr('href');
		var position = $(id).offset().top - 50;
		console.log(id);
		$('html, body').animate({
			scrollTop : position
		}, 500);
		console.log(position);
		console.log(position + 50);
	});
});