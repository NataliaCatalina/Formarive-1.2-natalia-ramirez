console.log('js');
// $('.top__navegation--menu').hide();
// $('.blue-block').hide();
// $('.socials').hide();

$(document).ready(function(){

  $('.menu-icon').click(function(){
    console.log('clicked');
    $('.top__navegation--menu').toggleClass('active');
  });


});  //end
