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

// let btn_click = $(".button").click
// if(matchMedia("screen and (max-width: 768px)").matches) {
//     $(document).ready(function(){
//         if(this.value === '더보기') {
//             $(".button").click(function(){
//                 $(".certifi_img_wrap").css({"height":"auto"})
//                 $(".certifi_container").css({"height":"auto"})
//                 $(".certifi_container>.certifi_grid").css({"height":"330px"})
//                 $(".certifi_container>.certifi_front").css({"height":"330px"})
//                 $('.certifi_container>.certifi_grid').hide();
//                 $('.certifi_container>.certifi_front').hide();
//                 $('.certifi_container>.certifi_grid').slice(0,6).show();
//                 $('.certifi_container>.certifi_front').slice(0,6).show();             
//             })
//             this.value='원래대로';
//         } else {            
//             $(".certifi_img_wrap").css({"height":"auto"})    
//             $(".certifi_container").css({"height":"auto"})
//             $(".btn").css({"margin-top":"30px"})
//             function more(){
//                 $('.certifi_container>.certifi_grid').slice(6,9).show();
//                 $('.certifi_container>.certifi_front').slice(6,9).show();
//             }
//         }
        
//     });
// } else {}

let grid_diplay_chk = $('.certifi_container>.certifi_grid').is(':visible');
console.log('grid_diplay_chk : ',grid_diplay_chk)
if(matchMedia("screen and (max-width: 768px)").matches) {
    if(!!grid_diplay_chk) {
        $(".certifi_img_wrap").css({"height":"auto"})
        $(".certifi_container").css({"height":"auto"})
        $(".certifi_container>.certifi_grid").css({"height":"330px"})
        $(".certifi_container>.certifi_front").css({"height":"330px"})
    } else if(!grid_diplay_chk) {
        $(".certifi_img_wrap").css({"height":"auto"})    
        $(".certifi_container").css({"height":"auto"})
        $(".btn").css({"margin-top":"30px"})
    }
} else {}
