//화면이 로드될때 조직도가 보여지는 방법
window.addEventListener('DOMContentLoaded',function(){
    fn_organiView();
});

//위에서 선언한 함수로 처음 로드될 때 보이지 않는 상태로 띄움
function fn_organiView() {
    const organiAppear = document.getElementsByClassName('organi_container');
    $(organiAppear).hide();
};

//onclick 함수로 클릭할때마다 value값 변경
function valueChange() {
    const divValue = document.getElementsByClassName('organi_click')
    if(divValue.value == false) {
        divValue.value = true;
    } else {
        divValue.value = false;
    }
    appear(divValue.value);
}

//divValue.value 값을 가져와서 클릭시마다 조직도가 보이기, 숨기기 상태로 바뀌게 구현
function appear(data) {
    const organiAppear = document.getElementsByClassName('organi_container');
    if(!!data){        
        $(organiAppear).fadeOut(400)
        data = true;
    } else {
        $(organiAppear).fadeIn(800)
        data = false;
    }
};