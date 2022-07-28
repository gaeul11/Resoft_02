/*ecoce 부분에 스크롤을 내리면 ecoce파트가 화면에서 나타남.*/
$(document).ready(function(){
    /*윈도우 스크롤*/
    $(window).scroll(function(){
        /*에코스가 나타나게 하는데, 필요한 계산식*/
        $('#ecoce').each(function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();/*오브젝트의 위치*/
            var bottom_of_window = $(window).scrollTop() + $(window).height();/*윈도우창의 스크롤과 높이*/
            /*윈도우 창 밑부분이 오브젝트 바닥보다 높으면 opacity가 1로 바뀐다.*/
            if(bottom_of_window > bottom_of_object/1){
                $(this).animate({'opacity':'1'},500);
            }
        });
    });
});
/*moado 부분에 스크롤을 내리면 moado파트가 화면에서 나타남*/
$(document).ready(function(){
    /*윈도우 스크롤*/
    $(window).scroll(function(){
        /*모아두가 나타나게 하는데, 필요한 계산식*/
        $('#moado').each(function(){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();/*오브젝트의 위치*/
            var bottom_of_window = $(window).scrollTop() + $(window).height();/*윈도우창의 스크롤과 높이*/
            /*윈도우 창 밑부분이 오브젝트 바닥보다 높으면 opacity가 1로 바뀐다.*/
            if(bottom_of_window > bottom_of_object/1){
                $(this).animate({'opacity':'1'},600);
            }
        });
    });
});
/*etc 부분에 스크롤을 내리면 etc 파트가 화면에서 나타남.*/
$(document).ready(function(){
    /*윈도우 스크롤*/
    $(window).scroll(function(){
        /*2*/
        $('#etc').each(function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();/*오브젝트의 위치*/
            var bottom_of_window = $(window).scrollTop() + $(window).height();/*윈도우창의 스크롤과 높이*/
            /*윈도우 창 밑부분이 오브젝트 바닥보다 높으면 opacity가 1로 바뀐다.*/
            if(bottom_of_window > bottom_of_object/1){
                $(this).animate({'opacity':'1'},700);
            }
        });
    });
});