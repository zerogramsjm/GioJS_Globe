var vid1 = document.getElementById("video1"); 
function playVid_1() {
  vid1.play();
} 

var vid2 = document.getElementById("video2"); 
function playVid_2() {
  vid2.play();
} 

var vid3 = document.getElementById("video3"); 
function playVid_3() {
  vid3.play();
} 

var vid4 = document.getElementById("video1-mobile"); 
function playVid_4() {
  vid4.play();
} 

var vid5 = document.getElementById("video2-mobile"); 
function playVid_5() {
  vid5.play();
} 

var vid6 = document.getElementById("video3-mobile"); 
function playVid_6() {
  vid6.play();
} 

//BUTTON 1
$('#play_video_1').click(function(){

  $(".info-inner").html("When a devices fails, PiiComm has built up an efficient and well tested repair management program. <br/><br/> We ensure that a companys resources are provided a replacement device while we determine what the right process is to get the defective device up and running as soon as possible. <br/><br/> We have established excellent relationships with all major manufacturers of mobile equipment and transparently work behind the scenes to establish the best pathway towards rapid repair. <br/><br/> Thanks to the large number of devices that enter our facility on a daily basis, our technicians are very effective at diagnosing issues and getting the device into a repaired state. <br/><br/> Our process is flexible on a per client basis / each client has different warranty programs that they use. <br/><br/> We manage that relationship with the manufacturer. All of our clients needs are in constant evolution. Deployment after deployments, manufacturers, devices levels start to vary drastically. Our systems and tools combined with the clients needs allow us to adapt the processes in place for each client.");
  $(".scroll").css("color", "#EB5933"); 
      $('#video1').trigger('play');
      $('#video1-mobile').trigger('play');
    $('.video1').fadeIn(1000);
    $('.video1-mobile').fadeIn(1000);
    $('#play_video_1').fadeOut(100);
    $("#info").scrollTop(0);
});

//VIDEO 1 ENDS
$('#video1').on('ended',function(){
  $('.info').fadeOut(1000);
    // alert('video 1 ended');
    $('.video1').fadeOut(1000);
    $('.video1-mobile').fadeOut(1000);
    $('#play_video_2').fadeIn();
});

$('#video1-mobile').on('ended',function(){
  $('.info').fadeOut(1000);
    // alert('video 1 ended');
    $('.video1').fadeOut(1000);
    $('.video1-mobile').fadeOut(1000);
    $('#play_video_2').fadeIn();
});

//BUTTON 2
$('#play_video_2').click(function(){
$('.info').fadeIn(1000);
    $(".info-inner").html("The AIM Portal is the repository for all of the data that we collect. <br/><br/> Its the entry point for all of our customers to initiate a ticket or to get status updates on existing tickets. <br/><br/> This portal also allows them to run reports on a variety of aspects of their organization. <br/> <br/> We dont operate in a bubble, the AIM Portal is a bridge to help communicate and transfer data back and forth. This data can then be used to drive analytics on the performance of your devices. <br/><br/> Like mobility products, the AIM portal is constantly evolving to meet our clients needs and help them run their business more efficiently.");
      $('#video2').trigger('play');
      $('#video2-mobile').trigger('play');
    $('#play_video_2').fadeOut(100);
    $('.video2').fadeIn(1000);
    $('.video2-mobile').fadeIn(1000);
    $("#info").scrollTop(0);
});

//VIDEO 2
$('#video2').on('ended',function(){
  $('.info').fadeOut(1000);
    // alert('video 2 ended');
    $('.video2').fadeOut(1000);
    $('.video2-mobile').fadeOut(1000);
    $('#play_video_3').fadeIn();
});

$('#video2-mobile').on('ended',function(){
  $('.info').fadeOut(1000);
    // alert('video 2 ended');
    $('.video2').fadeOut(1000);
    $('.video2-mobile').fadeOut(1000);
    $('#play_video_3').fadeIn();
});

//BUTTON 3
$('#play_video_3').click(function(){
  $('.info').fadeIn(1000);
  $(".info-inner").html("We track product inventory during and after our clients deployments. <br/><br/> Whether devices are allocated to a specific country or province, our customers maintain full visibility through our AIM portal. In addition, we manage the inventory level of non-assetized items such as consumable products, styluses and cases. <br/> <br/> Precise inventory tracking allows our clients to cycle products out of production and to then re-deploy them where they are most needed. <br/><br/> We have developed the systems and processes to keep with orderly and organized. Clients have visibility on all devices.");
      $('#video3').trigger('play');
      $('#video3-mobile').trigger('play');
    $('#play_video_3').fadeOut(100);
    $('.video3').fadeIn(1000);
    $('.video3-mobile').fadeIn(1000);
    $("#info").scrollTop(0);
});

//VIDEO 3
$('#video3').on('ended',function(){
  $('.info').fadeOut(1000);
  $('#info').fadeOut(100);
    // alert('video 3 ended');
    // $('.video3').fadeOut(1000);
    // $('.video3-mobile').fadeOut(1000);
    $('#play_videos_again').fadeIn();
    $('#play_move_on').fadeIn();
});

$('#video3-mobile').on('ended',function(){
  $('.info').fadeOut(1000);
    // alert('video 3 ended');
    // $('.video3').fadeOut(1000);
    // $('.video3-mobile').fadeOut(1000);
    $('#play_videos_again').fadeIn();
    $('#play_move_on').fadeIn();
});

//BUTTON RESTART
$('#play_videos_again').click(function(){
    $('.video3').fadeOut(100);
    $('.video3-mobile').fadeOut(100);
  $('.info').fadeIn(1000);
    $(".info-inner").html("When a devices fails, PiiComm has built up an efficient and well tested repair management program. We ensure that a companys resources are provided a replacement device while we determine what the right process is to get the defective device up and running as soon as possible. We have established excellent relationships with all major manufacturers of mobile equipment and transparently work behind the scenes to establish the best pathway towards rapid repair. <br/><br/> Thanks to the large number of devices that enter our facility on a daily basis, our technicians are very effective at diagnosing issues and getting the device into a repaired state. <br/><br/> Our process is flexible on a per client basis / each client has different warranty programs that they use. We manage that relationship with the manufacturer. All of our clients needs are in constant evolution. Deployment after deployments, manufacturers, devices levels start to vary drastically. Our systems and tools combined with the clients needs allow us to adapt the processes in place for each client.");
    $('.video1').fadeIn(1000);
    $('.video1-mobile').fadeIn(1000);
    $('#play_videos_again').fadeOut(100);
    $('#play_move_on').fadeOut(100);
    $("#info").scrollTop(0);
});

//BUTTON NEXT
$('#play_move_on').click(function(){

});
