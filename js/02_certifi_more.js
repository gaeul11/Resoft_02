/**
 * di 더보기 접기 구현
 * @param {} event 
 */
//현재 화면에 보이는 웹 브라우저 페이지 크기
window.onresize = function(event) {
    const innerWidth = window.innerWidth;
    const pageViewWidth = 769;
    if(innerWidth<pageViewWidth) {
        fn_screenMax769();
    } else{
        fn_screenMin769();
    }
}


/**
 * load는 돔트리,리소스까지 로드되고 실행
 * DOMContentLoaded는 돔트리만 로드되고 실행
 */

//768px 이하 width로 로드되었을때 보여지는 특허&인증 카드갯수
window.addEventListener('DOMContentLoaded', function(){
    const innerWidth = window.innerWidth;
    const pageViewWidth = 769;
    if(innerWidth<pageViewWidth) {
        fn_screenMax769();
    } else{
        fn_screenMin769();
    }
});

//최소가 769px이고 그 이상일때 보여지는 특허&인증
function fn_screenMin769() {
    $('.certifi_container>.certifi_grid').show();
    $('.certifi_container>.certifi_front').show();
};

//최대가 768px이고 그 이하일때 버튼 value 새로고침과 보여지는 특허&인증 카드갯수
function fn_screenMax769() {
    const btn = document.getElementById('more_btn');
    btn.value='더보기';
    const x = 6;
    const y = 9;
    $('.certifi_container>.certifi_grid').slice(x,y).hide();
    $('.certifi_container>.certifi_front').slice(x,y).hide();
}

//버튼 value를 클릭했을때 변하는 value값 설정
function changeText() {
    const btn = document.getElementById('more_btn');
    let runData = 1;
    if(btn.value === '더보기') {
        btn.value = '접기';
        runData = 0;
    } else {
        btn.value = '더보기';
        runData = 1;
    }
    fn_more_less(runData)
}

/**
 * changeText에서 runData값을 받아 더보기를 눌렀을때 보여지는 height의 높이와
 * 카드가 나타나는 속도, 사라지는 속도를 지정
 */
function fn_more_less(data) {    
    const x = 6;
    const y = 9;
    const spdAppear = 600;
    const spdDisappear =300;
    const cardBack = document.getElementsByClassName('certifi_grid');
    const cardFront = document.getElementsByClassName('certifi_front');
    if(data !== 1) {
        $(".certifi_img_wrap").css({"height":"auto"});
        $(".certifi_container").css({"height":"auto"});
        $(cardBack).slice(x,y).fadeIn(spdAppear);
        $(cardFront).slice(x,y).fadeIn(spdAppear);
    } else {
        $(cardBack).slice(x,y).fadeOut(spdDisappear);
        $(cardFront).slice(x,y).fadeOut(spdDisappear);
    }
}
