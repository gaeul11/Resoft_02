

if(matchMedia("screen and (max-width: 768px)").matches) {
    $(document).ready(function(){
        $('.certifi_container>.certifi_grid').hide();
        $('.certifi_container>.certifi_front').hide();
        $('.certifi_container>.certifi_grid').slice(0,6).show();
        $('.certifi_container>.certifi_front').slice(0,6).show();
    })

    function more(){
        $('.certifi_container>.certifi_grid').slice(6,9).show();
        $('.certifi_container>.certifi_front').slice(6,9).show();
    }
} else {}

let grid_diplay_chk = $('.certifi_container>.certifi_grid').is(':visible');
console.log('grid_diplay_chk : ',grid_diplay_chk)
if(!!grid_diplay_chk) {
    // console.log('111111111111')
    $(".certifi_img_wrap").css({"height":"auto"})
    $(".certifi_container").css({"height":"auto"})
    $(".certifi_container>.certifi_grid").css({"height":"330px"})
    $(".certifi_container>.certifi_front").css({"height":"330px"})
} else if(!grid_diplay_chk) {
    // console.log('222222222222222')
    $(".certifi_img_wrap").css({"height":"auto"})    
    $(".certifi_container").css({"height":"auto"})
    $(".btn").css({"margin-top":"30px"})
}
