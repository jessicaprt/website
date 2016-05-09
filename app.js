$(document).ready(function () {
    
    // ********** SHARED **********
    $('.items').mouseenter(function() {
        $(this).fadeTo(200, 0.4);
    });
    
    $('.items').mouseleave(function() {
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
    
    $('.home-curr').mouseenter(function() {
        $(this).fadeTo(200, 0.4);
    });
    
    $('.home-curr').mouseleave(function() {
        $(this).fadeTo(200,1);
    });
    
    $('.jessica').mouseenter(function() {
        $(this).fadeTo(200, 0.6);
    });
    $('.jessica').mouseleave(function() {
        $(this).fadeTo(200, 1);
    });
    
    $('a').mouseenter(function() {
        $(this).fadeTo(200, 0.4);
    });
    $('a').mouseleave(function() {
        $(this).fadeTo(200, 1);
    });
    
    $('.hide1').hide();
    $('.hide2').hide();
    $('.hide3').hide();
    $('.prj-hide1').hide();
    $('.prj-hide2').hide();
    
    $('.blog-el-travel').mouseenter(function(){
        $('.hide1').show();
    });
    
    $('.blog-el-travel').mouseleave(function(){
        $('.hide1').hide();
    });
    
    $('.blog-el-school').mouseenter(function(){
        $('.hide2').show();
    });
    
    $('.blog-el-school').mouseleave(function(){
        $('.hide2').hide();
    });
    
    $('.blog-el-tech').mouseenter(function(){
        $('.hide3').show();
    });
    
    $('.blog-el-tech').mouseleave(function(){
        $('.hide3').hide();
    });
    
    $('.prj1').mouseenter(function(){
        $('.prj-hide1').show();
    });
    
    $('.prj1').mouseleave(function(){
        $('.prj-hide1').hide();
    });

    $('.prj2').mouseenter(function(){
        $('.prj-hide2').show();
    });
    
    $('.prj2').mouseleave(function(){
        $('.prj-hide2').hide();
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

$(window).scroll(function() {
    var stickynav = $('.home-nav'),
        scroll = $(window).scrollTop();
    
    if (scroll >= 300) stickynav.addClass('fixed-nav');
    else stickynav.removeClass('fixed-nav');
});