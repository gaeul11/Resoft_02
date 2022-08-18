$(window).on('scroll', function () {
	const fix_header = document.getElementsByClassName('header');
	if ($(window).scrollTop()) {
		$(fix_header).addClass('active');
	} else {
		$(fix_header).removeClass('active');
	}
});
