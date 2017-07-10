$(document).ready(function() {

	$('.js-thumb-img').slick({

		slidesToShow: 6,
		slidesToScroll: 1,
		asNavFor: '.js-gallery',
		dots: false,
		infinity: false,
		// focusOnSelect: true,
		arrows: true,
		prevArrow: $('.image-thumb_prev'),
		nextArrow: $('.image-thumb_next')
		
	})

	$('.js-gallery').slick({
		fade: true,
		slidesToShow: 1,
		asNavFor: '.js-thumb-img',
		dots: false,
		prevArrow: $('.image-gallery_prev'),
		nextArrow: $('.image-gallery_next')
	})

	$('.js-tabs span').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.js-tabs span').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

	$('.js-photo-mode button').click(function(){
		var mode_id = $(this).attr('data-mode');

		$('.js-photo-mode button').removeClass('on');
		$('.mode-content').removeClass('show');

		$(this).addClass('on');
		$("#"+mode_id).addClass('show');

	})

});