//======================================================
//
//	Custom jQuery scripts for Typefolio
//
//	Only simple scripts go here
//
//======================================================

// debulked onresize handler
// https://github.com/louisremi/jquery-smartresize
function on_resize(c,t){onresize=function(){clearTimeout(t);t=setTimeout(c,100)};return c};


$(document).ready(function(){

	// Simple hover functions
	$('.hoverMe').fadeTo(0, 0.5);
	$('.hoverMe').hover(function () {
		$(this).stop().fadeTo(200, 1);
	}, function () {
		$(this).stop().fadeTo(200, 0.5);
	});

	// Table odd & even functions
	$('table').each(function() {
		$(this).children('tbody').find('tr:odd').addClass('odd');
		$(this).children('tbody').find('tr:even').addClass('even');

		$(this).find('tr').each(function() {
			$(this).children('td').last().addClass('last');
		});
	});

	// Table odd & even functions
	$('ul').each(function() {
		$(this).children('li:last-child').addClass('.last-child');
	});

	// Stackgrid show item information on hover
	$('.stackgrid.images-only .item').hover(function () {
		$(this).find('.box-desc').stop().fadeIn();
	}, function () {
		$(this).find('.box-desc').stop().fadeOut();
	});



	// initialize typeMenu
	// this plugin was specifically written for Typefolio
	$('.sticky').typeSticky();

	// initialize typeMenu
	// this plugin was specifically written for Typefolio
	$('#nav').typeMenu();
});

//preloader
$(window).on('load', function() { // makes sure the whole site is loaded
  $('#status').fadeOut(); // will first fade out the loading animation
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
  $('body').delay(350).css({'overflow':'visible'});
});
