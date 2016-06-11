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
    /*
    $('a').mouseenter(function() {
        $(this).fadeTo(200, 0.4);
    });
    $('a').mouseleave(function() {
        $(this).fadeTo(200, 1);
    }); */
    
    $('.abt-hide').hide();
    $('#shown').hide();
    $('#2').hide();
    $('#3').hide();
    $('#4').hide();
    $('#5').hide();
    $('#6').hide();
    
    $('.img1').click(function() {
        $('#1').show();
        $('#2').hide();
        $('#3').hide();
        $('#4').hide();
        $('#5').hide();
        $('#6').hide();
    });
    
    $('.img2').click(function() {
        $('#2').show();
        $('#1').hide();
        $('#3').hide();
        $('#4').hide();
        $('#5').hide();
        $('#6').hide();
    });
    
    $('.img3').click(function() {
        $('#3').show();
        $('#1').hide();
        $('#2').hide();
        $('#4').hide();
        $('#5').hide();
        $('#6').hide();
    });
    
    $('.img4').click(function() {
        $('#4').show();
        $('#1').hide();
        $('#2').hide();
        $('#3').hide();
        $('#5').hide();
        $('#6').hide();
    });
    
    $('.img5').click(function() {
        $('#5').show();
        $('#1').hide();
        $('#2').hide();
        $('#3').hide();
        $('#4').hide();
        $('#6').hide();
    });
    
    $('.img6').click(function() {
        $('#6').show();
        $('#1').hide();
        $('#2').hide();
        $('#3').hide();
        $('#4').hide();
        $('#5').hide();
    });
    
    $('#hidden').click(function() {
        $('.abt-hide').show();
        $('#hidden').hide();
        $('#shown').show();
    });
    
    $('#shown').click(function() {
        $('.abt-hide').hide();
        $('#hidden').show();
        $('#shown').hide();
    });
    
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
    
    $('.blog-el-rand').mouseenter(function(){
        $('.hide4').show();
    });
    
    $('.blog-el-rand').mouseleave(function(){
        $('.hide4').hide();
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