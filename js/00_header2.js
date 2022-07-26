$(document).ready(function(){
    $('.menubar').click(function(){
        if($('.nav_menu').hasClass('close')){
            $('.nav_menu').addClass('more').removeClass('close');
        }else if($('.nav_menu').hasClass('more')){
            $('.nav_menu').addClass('close').removeClass('more');
        }
    });
});