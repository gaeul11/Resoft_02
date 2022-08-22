$(document).ready(function(){
    $('.menubar').click(function(){
        const nav_menu = document.getElementsByClassName('nav_menu')
        if($(nav_menu).hasClass('close')){
            $(nav_menu).addClass('more').removeClass('close');
        }else if($(nav_menu).hasClass('more')){
            setTimeout(function() { $(nav_menu).addClass('close').removeClass('more');}, 500);
        }
    });
    
    $('header #nav_gnb nav > ul ul a').click(function() {
         $('.nav_menu').addClass('close');
         setTimeout(function() { $('.nav_menu').addClass('close').removeClass('more');}, 500);
    });
});