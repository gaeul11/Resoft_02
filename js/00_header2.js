$(document).ready(function(){
    $('.menubar').click(function(){
<<<<<<< HEAD
        const nav_menu = document.getElementsByClassName("nav_menu");
=======
        const nav_menu = document.getElementsByClassName('nav_menu');
>>>>>>> upstream/main
        if($(nav_menu).hasClass('close')){
            $(nav_menu).addClass('more').removeClass('close');
        }else if($(nav_menu).hasClass('more')){
            $(nav_menu).addClass('close').removeClass('more');
        }
    });
});