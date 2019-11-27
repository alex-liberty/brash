
/* Background Images
-------------------------------------------------------------------*/
var  pageTopImage = jQuery('#page-top').data('background-image');
var  aboutImage = jQuery('#about').data('background-image');
var  subscribeImage = jQuery('#subscribe').data('background-image');
var  contactImage = jQuery('#contact').data('background-image');

if (pageTopImage) {  jQuery('#page-top').css({ 'background-image':'url(' + pageTopImage + ')' }); };
if (aboutImage) {  jQuery('#about').css({ 'background-image':'url(' + aboutImage + ')' }); };
if (subscribeImage) {  jQuery('#subscribe').css({ 'background-image':'url(' + subscribeImage + ')' }); };
if (contactImage) {  jQuery('#contact').css({ 'background-image':'url(' + contactImage + ')' }); };

/* Background Images End
-------------------------------------------------------------------*/



/* Document Ready function
-------------------------------------------------------------------*/
jQuery(document).ready(function($) {
	"use strict";


    /* Window Height Resize
    -------------------------------------------------------------------*/
    var windowheight = jQuery(window).height();
    if(windowheight > 650)
    {
         $('.pattern').removeClass('height-resize');
    }
    /* Window Height Resize End
    -------------------------------------------------------------------*/





	/* Time Countdown
	-------------------------------------------------------------------*/

  $('#time_countdown').countdown('2019/12/14', function(event) {
    $('#day').html(event.strftime('%D'))
    $('#hour').html(event.strftime('%H'))
    $('#minutes').html(event.strftime('%M'))
    $('#seconds').html(event.strftime('%S'))
  });

	/* Next Section
	-------------------------------------------------------------------*/
	$('.next-section .go-to-about').click(function() {
    	$('html,body').animate({scrollTop:$('#about').offset().top}, 1000);
  	});
  	$('.next-section .go-to-subscribe').click(function() {
    	$('html,body').animate({scrollTop:$('#subscribe').offset().top}, 1000);
  	});
  	$('.next-section .go-to-contact').click(function() {
    	$('html,body').animate({scrollTop:$('#contact').offset().top}, 1000);
  	});
  	$('.next-section .go-to-page-top').click(function() {
    	$('html,body').animate({scrollTop:$('#page-top').offset().top}, 1000);
  	});

  	/* Next Section End
	-------------------------------------------------------------------*/




});

/* Document Ready function End
-------------------------------------------------------------------*/


/* Preloder
-------------------------------------------------------------------*/
$(window).load(function () {
    "use strict";
    $("#loader").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
});
 /* Preloder End
-------------------------------------------------------------------*/
