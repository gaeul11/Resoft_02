/**
 * di 더보기 접기 구현
 * @param {} event 
 */
//현재 화면에 보이는 웹 브라우저 페이지 크기
window.onresize = function(event) {
    const innerWidth = window.innerWidth;
    const pageWidth = 768;
    if(innerWidth<pageWidth) {
        fn_screenMax768();
    } else{
        fn_screenMin768();
    }
}


/**
 * load는 돔트리,리소스까지 로드되고 실행
 * DOMContentLoaded는 돔트리만 로드되고 실행
 */

//768px 이하 width로 로드되었을때 보여지는 특허&인증 카드갯수
window.addEventListener('DOMContentLoaded', function(){
    const innerWidth = window.innerWidth;
    const pageWidth = 768;
    if(innerWidth<pageWidth) {
        fn_screenMax768();
    } else{
        fn_screenMin768();
    }
});

function fn_screenMin768() {
    $('.certifi_container>.certifi_grid').show();
    $('.certifi_container>.certifi_front').show();
};

function fn_screenMax768() {
    const btn = document.getElementById('more_btn');
    btn.value='더보기';
    const x = 6;
    const y = 9;
    $('.certifi_container>.certifi_grid').slice(x,y).hide();
    $('.certifi_container>.certifi_front').slice(x,y).hide();
}

function changeText() {
    const btn = document.getElementById('more_btn');
    let runData = 1
    if(btn.value === '더보기') {
        btn.value = '접기';
        runData = 0;
    } else {
        btn.value = '더보기';
        runData = 1;
    }
    fn_more_less(runData)
}

function fn_more_less(data) {    
    const x = 6;
    const y = 9;
    const fadeAppear = 600;
    const fadeDisappear =300;
    const cardBack = document.getElementsByClassName('certifi_grid');
    const cardFront = document.getElementsByClassName('certifi_front');
    if(data !== 1) {
        $(".certifi_img_wrap").css({"height":"auto"});
        $(".certifi_container").css({"height":"auto"});
        $(cardBack).slice(x,y).fadeIn(fadeAppear);
        $(cardFront).slice(x,y).fadeIn(fadeAppear);
    } else {
        $(cardBack).slice(x,y).fadeOut(fadeDisappear);
        $(cardFront).slice(x,y).fadeOut(fadeDisappear);
    }
}
