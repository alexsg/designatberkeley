$(document).ready(function(){
  $.scrollIt({
    topOffset: -64           // offste (in px) for fixed top navigation
  });

  var $nav = $('.scroll-nav');


  /**
   ** Create and append responses to 'Design is' so that
   ** JS loading slowly won't result in a block of text showing up on the page
   **/
  var $rotate = $('#rotate');
  if ($rotate) {
    $rotate.text("the perfect fusion of creativity and logic|a way of thinking, a pursuit, a process|interdisciplinary problem-solving|iterating on a problem to find the best solution|a way to enhance people's lives");
  }


  /**
   ** animation: You can pick the way it animates when rotating through words. 
   ** Options are dissolve (default), fade, flip, flipUp, flipCube, 
   ** flipCubeUp and spin.
   **
   ** separator: If you don't want commas to be the separator, you can define 
   ** a new separator (|, &, * etc.) by yourself using this field.
   **
   ** speed: milliseconds until the next word show.
   **/
  $rotate.textrotator({
    animation: 'dissolve', 
    separator: '|', 
    speed: 3500 
  });



  $(window).scroll(function(){
    if($(window).scrollTop() > window.innerHeight-250){ // position of menu from the top 
      $nav.addClass('active');
    } else{
      $nav.removeClass('active');
    }
  });

  var pull        = $('#pull');
      menu        = $('nav ul');
      menuHeight  = menu.height();


  var width = $(window).width();
  if (width <= 667) {
    menu.hide();
  }

  $(pull).on('click', function(e) {
      e.preventDefault();
      menu.slideToggle();
      if($('.mid').css("z-index")=="-1"){
        $('.mid').css("z-index","0");
      }else{
        $('.mid').css("z-index","-1");
      }
  });

  // var w = $(window).width();
  // if (w < 667) {
  //   $('li.dropdown').on('click', function(e) {
  //       e.preventDefault();
  //       $(this).find("ul").slideToggle();
  //   });
  // }

  $(window).resize(function(){
      var w = $(window).width();
      if(w > 667 && menu.is(':hidden')) {
          menu.removeAttr('style');
          $('.mid').css("z-index","0");
      }
  });

/*
  var bgImages = new Array(
    "url(https://scontent-ord.xx.fbcdn.net/hphotos-xaf1/t31.0-8/10636818_798585763513551_8512243890731656208_o.jpg)",
    "url(http://c4.staticflickr.com/4/3891/15161747008_00f52509cf_b.jpg)", 
    "url(http://c4.staticflickr.com/4/3924/15159558857_a1ffd166f9_h.jpg)"
  )

  var $hero = $('.hero-homepage');

  var curr = 0;
  function switchHero() {
    $hero.animate({marginLeft: -100%}, 1000, function() {
      $(this)
        .css('background-image', bgImages[curr])
        .animate({opacity: 1});
    });
    if (curr == bgImages.length-1) {
      curr = 0;
    } else {
      curr += 1;
    }
  };

  setInterval(switchHero, 3000);
*/
});
