$(document).ready(function () {
    
    // ********** SHARED **********
    $('.items').mouseenter(function() {
        $(this).fadeTo(200, 0.4);
    });
    
    $('.items').mouseleave(function() {
        $(this).fadeTo(200,1);
    });
        
    $('.description a').mouseenter(function() {
        $(this).fadeTo(200, 0.6);
    });
    
    $('.description a').mouseleave(function() {
        $(this).fadeTo(200,1);
    });
           
    $('#nav-img').mouseenter(function() {
        $(this).fadeTo(200, 0.6);
    });
    $('#nav-img').mouseleave(function() {
        $(this).fadeTo(200, 1);
    });
    
    // ********** HOME **********    
    $('#background').load(function() {
        $(this).fadeIn(1500);
        
        setInterval(function() {
            $(this).removeClass('background1');
            $(this).addClass('background2')
        }, 3000);
        
    });
    
    $('.home-items').mouseenter(function() {
        $(this).fadeTo(200, 0.4);
    });
    
    $('.home-items').mouseleave(function() {
        $(this).fadeTo(200,1);
    });
    
    $('.jessica').mouseenter(function() {
        $(this).fadeTo(200, 0.6);
    });
    $('.jessica').mouseleave(function() {
        $(this).fadeTo(200, 1);
    });
    
     $('.links a').mouseenter(function() {
        $(this).fadeTo(200, 0.4);
    });
    $('.links a').mouseleave(function() {
        $(this).fadeTo(200, 1);
    });
    // ********** ABOUT ME **********
    $('#pic').mouseenter(function() {
        $(this).removeClass('photo');
        $(this).addClass('photo3');
    });
    
    $('#pic').mouseleave(function() {
        $(this).removeClass('photo3');
        $(this).addClass('photo');
    });
    // ********** LINKS **********
    $('.lnk-pic').mouseenter(function() {
        $(this).fadeTo(200,0.5);
    });
    $('.lnk-pic').mouseleave(function() {
        $(this).fadeTo(200, 1);
    });
});