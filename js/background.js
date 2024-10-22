function cycleImages() {
    var $active = $('#background .active');
    var $next = ($('#background .active').next().length > 0) ? $('#background .active').next() : $('#background img:first');
    $next.css('z-index', 2);//move the next image up the pile
	$active.fadeOut(1500, function() {//fade out the top image
        $active.css('z-index', 1).show().removeClass('active');//reset the z-index and unhide the image
        $next.css('z-index', 3).addClass('active');//make the next image the top one
    });
}

function cycleImage() {
    $(this).removeClass('background1');
    $(this).addClass('background2');
    
    setInterval('cycleImage2()', 7000);
}

function cycleImage2() {
    $(this).removeClass('background2');
    $(this).addClass('background3');
    
    setInterval('cycleImage()', 7000);
}

$(window).load(function(){
	$('#background').fadeIn(1500);
    // run every 7s
    setInterval('cycleImages()', 7000);
})