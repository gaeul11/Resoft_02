// console.clear();
        $('.slide').slick({
            autoplay: true,
            autoplaySpeed:1500,
            
            prevArrow:$('.slick-prev'),
            nextArrow:$('.slick-next'),
        });
        
        $('.start').click(function(){
            $('.slide').slick('slickPlay');
            $('.start').hide();
            $('.stop').show();
        });
        
        $('.stop').click(function(){
            $('.slide').slick('slickPause');
            $('.stop').hide();
            $('.start').show();
        });