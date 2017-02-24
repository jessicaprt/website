$(document).ready(function () {        
    // ********** HOME **********    
	$('#CEsite').mouseenter(function() {
		$(this).removeClass('prjdes');
		$(this).addClass('CEsite');
	});
	
	$('#CEsite').mouseleave(function() {
		$(this).removeClass('CEsite');
		$(this).addClass('prjdes');
	});
	
	$('#TTT').mouseenter(function() {
		$(this).removeClass('prjdes');
		$(this).addClass('TTT');
	});
	
	$('#TTT').mouseleave(function() {
		$(this).removeClass('TTT');
		$(this).addClass('prjdes');
	});
	
	$('#FireEscape').mouseenter(function() {
		$(this).removeClass('prjdes');
		$(this).addClass('FireEscape');
	});
	
	$('#FireEscape').mouseleave(function() {
		$(this).removeClass('FireEscape');
		$(this).addClass('prjdes');
	});
	
	$('#BinClock').mouseenter(function() {
		$(this).removeClass('prjdes');
		$(this).addClass('BinClock');
	});
	
	$('#BinClock').mouseleave(function() {
		$(this).removeClass('BinClock');
		$(this).addClass('prjdes');
	});
	
	$('#Snake').mouseenter(function() {
		$(this).removeClass('prjdes');
		$(this).addClass('Snake');
	});
	
	$('#Snake').mouseleave(function() {
		$(this).removeClass('Snake');
		$(this).addClass('prjdes');
	});
	
	$('.info-img').mouseenter(function() {
		$(this).fadeTo(200, 0.4);
	});
	
	$('.info-img').mouseleave(function() {
		$(this).fadeTo(200,1);
	});
	
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 800);
        return false;
      }
    }
  });
});

$(window).scroll(function() {
    var stickynav = $('.home-nav'),
        scroll = $(window).scrollTop();
    
    if (scroll >= 300) stickynav.addClass('fixed-nav');
    else stickynav.removeClass('fixed-nav');
});