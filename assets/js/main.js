$(function(){

	// スクロールバーを作成する
	$('nav a').click(function(){
		var id = $(this).attr('href');

		if(id == '#main'){
			var adjust = 73;
			var position = $(id).offset().top - adjust;

			$('html, body').animate({
				'scrollTop' : position
			}, 600);

		} else if( id == '#others'){
			var adjust = 56;
			var position = $(id).offset().top - adjust;

			$('html, body').animate({
				'scrollTop' : position
			}, 600);
		};
	});

	// leadの画像を固定する
	$(window).scroll(function() {
		var dy = $(this).scrollTop();
		console.log(dy);

		if(dy > 1752){
			$('#lead-image').css('background-position', '0 '+(dy-1752)+'px');
		} else {
			$('#lead-image').css('background-position', '0 0');
		}
	});

	// lead文が浮き上がる
	// （cssで0にしたopacityを1にする）
	var word = $('#word');

	$(window).scroll(function(){
		if($(this).scrollTop() > 1200){
			word.slideDown().animate({
				'opacity' : 1,
			}, 'slow');
		}
	});

	// twitterアイコンに色をつける
	$('#twitter-icon').hover(function(){
		$(this).removeClass('text-white');
		$(this).addClass('change-color');
	}, function(){
		$(this).addClass('text-white');
	});
});
