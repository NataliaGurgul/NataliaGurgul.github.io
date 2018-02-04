// arrow up
$(document).ready(function() {
   $('#gototop').hide();
   $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
         $('#gototop').fadeIn(500);
      }
      else {
         $('#gototop').fadeOut(500);
      }
   });
   $('#gototop').click(function() {
      $('html, body').animate( { scrollTop: 0 }, 1000);
      return false;
   });
});

// buttons
$(document).ready(function() {
      $('.contact-button, .exp-button').css('cursor', 'pointer');
      $('.contact-button, .exp-button').hover(function() { 
      $('.contact-button, .exp-button').stop().animate( {'opacity': 0.5}, "slow");
      $(this).stop().animate( {'opacity': 0.5}, "slow"); 
      },function() { 
      $('.contact-button, .exp-button').stop().animate( {'opacity': 1}, "slow");
      });
   });