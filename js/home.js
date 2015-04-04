$(document).ready(function(){
  var $nav = $('#main-nav');
  $nav.data('size', 'big');


  /**
   ** Create and append responses to 'Design is' so that
   ** JS loading slowly won't result in a block of text showing up on the page
   **/
  var $rotate = $('.rotate');
  $rotate.text("the perfect fusion of creativity and logic|a way of thinking, a pursuit, a process|interdisciplinary problem-solving|everywhere, everything|iterating on a problem to find the best solution|a way to enhance people's lives");


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
    if($(window).scrollTop() > window.innerHeight-100){ // position of menu from the top 
      $nav.addClass('fixedClass');
    } else{
      $nav.removeClass('fixedClass');
    }
  });

});
