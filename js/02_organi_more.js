//화면이 로드될때 조직도가 보여지는 방법
window.addEventListener('DOMContentLoaded', function () {
	fn_organiView();
});

//위에서 선언한 함수로 처음 로드될 때 보이지 않는 상태로 띄움
function fn_organiView() {
	const organiAppear = document.getElementsByClassName('organi_container');
	$(organiAppear).hide();
}

//onclick 함수로 클릭할때마다 value값 변경
function valueChange() {
	let inputVal = document.getElementById('organi_chk');
	let valChange = true;
	// console.log('inputVal     최초00000 : ', inputVal.value)
	if (inputVal.value == 'false') {
		inputVal.value = true;
		valChange = true;
		// console.log('inputVal     11111 : ', inputVal.value)
	} else {
		inputVal.value = false;
		valChange = false;
		// console.log('inputVal     22222 : ', inputVal.value)
	}
	appear(valChange);
	console.log('type', typeof inputVal.value);
	// console.log('inputVal     33333 : ', inputVal.value)
}

//valChange 값을 가져와서 클릭시마다 조직도가 보이기, 숨기기 상태로 바뀌게 구현
function appear(data) {
	const organiAppear = document.getElementsByClassName('organi_container');
	// console.log('data     최초44444 : ', data)
	if (!!data) {
		$(organiAppear).fadeOut(400);
		// console.log('data     55555 : ', data)
	} else {
		$(organiAppear).fadeIn(800);
		// console.log('data     66666 : ', data)
	}
	// console.log('data     77777 : ', data)
}
