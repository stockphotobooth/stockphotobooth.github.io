function openHamburgerdesktop() {
document.body.classList.toggle("open-desktop")
}

$(document).ready(() => {
	$('.stock').css("transform", "translateY(0)");
$('.photo').css("transform", "translateY(0)");
  $('.booth').css("transform", "translateY(0)");
  $('.main-photo').css("transform", "translateX(0)");
});


$(window).scroll(function(){
    if ($(window).scrollTop() >= 500) {
        $('.bw1').css("transform", "none");
       $('.bw2').css("transform", "none");
       $('.bw3').css("transform", "none");
       $('.bw4').css("transform", "none");
    }
    else {
        $('.bw1').css("transform", "translateX(300%)");
      $('.bw2').css("transform", "translateX(300%)");
       $('.bw3').css("transform", "translateX(300%)");
       $('.bw4').css("transform", "translateX(300%)");
    }
  if ($(window).scrollTop() >= 400) {
        $('.main-photo').css("transform", "translateX(100%)");
    }
    else {
        $('.main-photo').css("transform", "none");
    }
  if ($(window).scrollTop() >= 50) {
        $('.title').css("transform", "translateY(-2.7rem)");
    }
    else {
         $('.title').css("transform", "none");
    }
  
  if ($(window).scrollTop() >= 1000) {
        $('.kendrajian-coverphoto').css("transform", "none");
       
    }
    else {
        $('.kendrajian-coverphoto').css("transform", "translateX(200%)");
      
    }
});

$(function(){
$( ".kendrajian-container" ).click(function(){

  $('.kendrajian-album').toggleClass("hi");
});

$( ".kendrajian-album" ).click(function(){

  $('.kendrajian-album').toggleClass("hi");
});

$( ".hamburger-sticky" ).click(function(){
  $('.kendrajian-album').removeClass("hi");
});

$( ".kennyjian" ).click(function(){
  $('body').removeClass("open-desktop");
  $('body,html').animate({
        scrollTop : 1750                    
    }, 500);
  $('.kendrajian-album').toggleClass("hi");
});
});
