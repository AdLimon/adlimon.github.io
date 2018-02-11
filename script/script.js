                //СЛАЙДШОУ

$(document).ready(function() {
  $('#slider').rhinoslider({
    showTime: 3000,
    effectTime: 3000,
    controlsMousewheel: false,
    controlsPrevNext: false,
    controlsPlayPause: false,
     pauseOnHover: false,
    autoPlay: true,
    showBullets: 'never'
  });
});

$(document).ready(function() {
  $('#slider_text').rhinoslider({
    showTime: 3000,
    effectTime: 3000,
    controlsMousewheel: false,
    controlsPrevNext: false,
    controlsPlayPause: false,
     pauseOnHover: false,
    autoPlay: true,
    showBullets: 'never'
  });
});
              //ПАРАЛАКС

$(window).scroll(function(){

var sh = $(this).scrollTop();

$("#shesterni").css({
  "transform" : "translate(0%, "+sh/50+"%"
});
});


                              /////Читать далее
$(document).ready(function(){
    $(".dalle").click(function(){
        $("#read").slideToggle("slow");
      
    });
});


                                                      //readmore
$(document).ready(function() {
  $( ".dalle" ).click( function() {
    document.getElementById('text').style.display = 'none'
    document.getElementById('text1').style.display = 'block'
    if ($(".dalle").css('transform') == 'none') {
      $(".dalle").css({'transform': 'rotate(-180deg)'});
    } else {
      document.getElementById('text').style.display = 'block'
      document.getElementById('text1').style.display = 'none'
      $(".dalle").css({'transform': ''});
    };
  });
});


          //yakor
  function slowScroll (id) {
  var offset = 0;
  $('html, body').animate({
    scrollTop: $(id).offset().top - offset}, 800);
  return false;
} 


                ////Прелоадер

                document.body.onload = function(){

  setTimeout(function(){
    var preloader = document.getElementById('page-preloader');
    if(!preloader.classList.contains('done'))
    {
      preloader.classList.add('done');
    }
  }, 1000)

}

