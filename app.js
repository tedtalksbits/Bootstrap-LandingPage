$(document).ready(function () {

   // mobile menu
   $("#menu").hide();
   $("#toggler").click(function (e) {
      e.preventDefault();

      $(this).toggleClass('clicked');

      let target = $(this).attr('href');
      $(target).toggle("blind", 500);
      $(target).toggleClass('menu-toggle');
      $(".mobile-links").toggleClass('animate__slideInLeft');
      $("#toggler").toggleClass('open');


   });

   // slider 
   $(".t-container").click(function () {

      $(".circle").toggleClass("toggle-move");
      $("body").toggleClass("dark-mode");

   });

   // pull out for slider
   $("#circle").on('click', function () {
      $(this).toggleClass('clicked');
      $("#toggle-container").toggleClass('show-toggle');
   })


});