
$('#nav').on('click', function() {
    $('#left').css('-webkit-transform','translateX(200px)');
    $('#nav1').css('display','block');
    $('#nav').css('display','none');
   
    $('#hight').css('opacity','1');
    $('.col-xs-12').css('filter','blur(3px)');
    });
    
$('#nav1').on('click', function() {
    $('#left').css('-webkit-transform','translateX(0)');
    $('#nav').css('display','block');
    $('#nav1').css('display','none');
    $('#left').css('opacity','1');
    $('.col-xs-12').css('filter','blur(0px)');
});


    




$(document).ready(function() {
	$('#slide').rhinoslider({
		showTime: 2000,
		effectTime: 3000,
		controlsMousewheel: false,
		controlsKeyboard: false,
		controlsPrevNext: false,
		controlsPlayPause: false,
		autoPlay: true,
		pauseOnHover: false,
		showBullets: 'never',
		showControls: 'never'
	});
});



$(document).ready(function(){
    $("#oborudovanie").click(function(){
        $("#oborudovanie h2").slideDown("slow");
        $("#oborudovanie h5").css('display','none');
        $("#oborudovanie h6").css('display','block');
        $("#oborudovanie").css('background-position', 'bottom');
        return false;
    });
});
$(document).ready(function(){
    $("#oborudovanie h6").click(function(){
        $("#oborudovanie h2").slideUp("slow");
        $("#oborudovanie h6").css('display','none');
        $("#oborudovanie h5").css('display','block');
        $("#oborudovanie").css('background-position', 'top');
        return false;
    });
});

$(document).ready(function(){
    $("#mashin").click(function(){
        $("#mashin h2").slideDown("slow");
        $("#mashin h5").css('display','none');
        $("#mashin h6").css('display','block');
        $("#mashin").css('background-position', 'bottom');
        return false;
    });
});
$(document).ready(function(){
    $("#mashin h6").click(function(){
        $("#mashin h2").slideUp("slow");
        $("#mashin h6").css('display','none');
        $("#mashin h5").css('display','block');
        $("#mashin").css('background-position', 'top');
        return false;
    });
});

  


$(document).ready(function(){
    $("#his_sh").click(function(){
        $("#history_show").slideDown("slow");
        $("#his_sh").css('opacity','0');
        return false;
    });
});


$(document).ready(function(){
    $("#his_cl").click(function(){
        $("#history_show").slideUp("slow");
         $("#his_sh").css('opacity','1');
        return false;
    });
});


function slowScroll (id) {
  var offset = 0;
  $('html, body').animate({
    scrollTop: $(id).offset().top - offset}, 800);
  $('#left').css('-webkit-transform','translateX(0)');
      $('#nav').css('display','block');
    $('#nav1').css('display','none');
  $('.col-xs-12').css('filter','blur(0px)');
  return false;
} 