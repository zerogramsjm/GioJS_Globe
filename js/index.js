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
  $(".scroll").css("color", "#EB5933"); 
  $(".info").scrollTop(-1000,0);
  //INFO
  $(".info").text("");
  $(this).css("display", "none"); 
  $( "#globalArea" ).fadeTo( "slow" , 1, function() {
  })
  $(".click2").fadeIn(500);
setTimeout(
  function() 
  {
controller.addData( data_IN );
  }, 0);  
  $(".info").html("Each project is unique and requires many components from various manufacturers to be successful. <br/><br/>  Items such as cases and accessories are often overlooked in mobility deployment projects. <br/><br/> At PiiComm we have a team of ressource specialists that will ensure that no item is missed and therefore make your project successful.");
});

$(".click2").click(function(){
  $(".info").scrollTop(-1000,0);
  $(".button_area").hide();
  $('.staging_vid_mobile').fadeIn(500);
  $('.staging_vid').fadeIn(500);

  $('video').trigger('play');
  $('video_mobile').trigger('play');
  $(this).css("display", "none"); 
  $(".clickrestart").fadeIn(1000);
        $(".button_area").fadeIn(1000);
        $(".info").html("At PiiComm we have development specific processes and tools to provide staging excellence. <br/><br/> This includes creating a bug-free image created following the specs of our clients. <br/><br/> Our tools then allow us to scale staging to hundred or thousands of devices under very tight time-frames. <br/><br/> We are recognized as one of the most trusted and competent mobility specialists in Canada.");
        $(".click3").fadeIn(1000);
        // $(".clickrestart").fadeIn(1000);
    });

$(".clickrestart").click(function(){ 
    video.load();
    video.play();
})

$(".click3").click(function(){
  $(".info").scrollTop(-200);
  $(".clickrestart").css("display", "none"); 
  $(".clickrestart").fadeOut(500);
  $('.staging_vid').fadeOut(500);
  $('.staging_vid_mobile').fadeOut(500);
  $("#globalArea").fadeIn(1000);
  //INFO
setTimeout(
  function() 
  {
  controller.addData( data_OUT );
  }, 0);  
  $(".info").html("Many sites, Many locations, countless moving parts provide for a challenging deployment. <br/><br/> Our team of experts are able to apply our know-how to ensure that we are working with our clients to scheduling. <br/><br/> Timing is important, it’s likely not the first device out in the field. <br/><br/> We can even facility the reverse logistics of getting legacy or older devices out of the hands of the user. We have a 100% track record of success with some of the largest and most demanding deployments in Canada. <br/><br/> Each project is unique, requiring use to work closely with our client to ensure that all the elements of a successful project are in place for a successful project. <br/><br/> We become an extension of the client’s team and work collaboratively to ensure success. <br/><br/>  We work with all the major couriers, we have the tools, we strongly established relationships with the courier industry to ensure we choose the best and most cost-effective route.");
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