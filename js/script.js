console.log('js');
// $('.top__navegation--menu').hide();
// $('.blue-block').hide();
// $('.socials').hide();

// $(document).ready(function(){

//   $('.menu-icon').click(function(){
//     console.log('Funciona');
//     $('.navigation-menu').toggleClass('active');
    
//   });


// });  //end

function accion() {
  console.log("click");
  const ancla = document.getElementsByClassName('nav-link');
  for(var i = 0; i < ancla.length; i++){
    ancla[i].classList.toggle('.disappear');
  }
  
}