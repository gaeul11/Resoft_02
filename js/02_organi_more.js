window.addEventListener('DOMContentLoaded',function(){
    fn_organiShow();
});

function fn_organiShow() {
    const organiAppear = document.getElementsByClassName('organi_container');
    $(organiAppear).hide();
};

function valueChange() {
    let click = 1;
    const divValue = document.getElementsByClassName('organi_click')
    if(divValue.value == 'false') {
        divValue.value = 'true';
        click = 1;
    } else {
        divValue.value ='false';
        click = 0;
    }
    appear(click);
}

function appear(data) {
    const organiAppear = document.getElementsByClassName('organi_container');
    if(!!data){        
        $(organiAppear).fadeOut(400)
        data = false;
    } else {
        $(organiAppear).fadeIn(800)
        data = true;
    }
};