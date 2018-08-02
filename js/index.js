// NAVBAR SCROLL ANIMATION
$(window).on('scroll', function() {
  if($(window).scrollTop()) {
    $('nav').addClass('black');
  }
  else {
    $('nav').removeClass('black');
  }
});

// RESPONSIVE MENU
$(document).ready(function() {
  $(".menu p").click(function() {
    $("nav ul").toggleClass("active");
  });
});