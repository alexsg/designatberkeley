$(document).ready(function(){
	$nav = $('.nav');
	$nav.data('size', 'big');

	$(window).scroll(function(){
		if($(window).scrollTop() > window.innerHeight){ // position of menu from the top 
			$nav.addClass('fixedClass');
			if ($nav.data('size') == 'big') {
				$nav.data('size','small').stop().animate({height:'7%'}, 300);
			}
		} else{
			$nav.removeClass('fixedClass');
			if ($nav.data('size') == 'small') {
				$nav.data('size','big').stop().animate({height:'15%'}, 300);
			}
		}
	});

	$(".rotate").textrotator({
 	 	animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
  	separator: "|", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
  	speed: 3500 // How many milliseconds until the next word show.
	});

});