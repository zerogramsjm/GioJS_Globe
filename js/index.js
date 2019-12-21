var container = document.getElementById( "globalArea" );

var controller = new GIO.Controller( container );

$(document).ready(function(){
    $("#button_area").fadeIn(2000);

var vids = $("video"); 
$.each(vids, function(){
       this.controls = false; 
}); 

});

$(".click1").click(function(){
  //INFO
  $(".info").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit");
  $(this).css("display", "none"); 
  $( "#globalArea" ).fadeTo( "slow" , 1, function() {
  })
  $(".click2").fadeIn(500);
setTimeout(
  function() 
  {
controller.addData( data_IN );
  }, 0);  
  $(".info").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit");
});

$(".click2").click(function(){
  $('.staging_vid').fadeIn(500);
  $('video').trigger('play');
  $("#globalArea").fadeOut(1000);
  $(".button_area").fadeOut(1000);
  //INFO
  // $(".info").text("Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ");
  //BUTTONS
  $(this).css("display", "none"); 
  $(".clickrestart").fadeIn(1000);
});

video.addEventListener("timeupdate", function(){
    if(this.currentTime >= 23 ) {
        $(".button_area").fadeIn(1000);
        $(".info").text("Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ");
        $(".click3").fadeIn(1000);
        // $(".clickrestart").fadeIn(1000);
    }
});

$(".clickrestart").click(function(){ 
    video.load();
    video.play();
    $(".button_area").fadeOut(1000);
})

$(".click3").click(function(){
  $(".clickrestart").css("display", "none"); 
  $(".clickrestart").fadeOut(500);
  $('.staging_vid').fadeOut(500);
  $("#globalArea").fadeIn(1000);
  //INFO
setTimeout(
  function() 
  {
  controller.addData( data_OUT );
  }, 0);  
  $(".info").text("Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium");
  $(this).css("display", "none"); 
  $(".click_end").fadeIn(500);
});

    var containerOriginal = document.getElementById( "originalArea" );
    var containerChanged = document.getElementById( "changedArea" );
    var controllerOriginal = new GIO.Controller( containerOriginal );
    var controllerChanged = new GIO.Controller( containerChanged );

    controllerOriginal.lightenMentioned(true);
    controllerChanged.lightenMentioned(true);
    // use the adjustMentionedBrightness() API to set the brightness of the mentioned countries, the brightness range is from 0 - 1
    controllerChanged.adjustMentionedBrightness( 1 );

controller.init();
controller.setInitCountry("SELECTEDCA");