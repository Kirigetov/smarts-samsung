$(document).ready(function() {

	$('.js-hero-slider').on('init', function(event, slick){

	    var	btn = $('<button/>', { class: 'btn-nav js-slick-trigger' });
		var slider = $('.js-hero-slider');
		var dots = slider.find('.slick-dots');
		
		dots.prepend(btn).before();
	}); 

	$('.js-hero-slider').slick({
		autoplay: true,
		autoplaySpeed: 800,
		dots: true,
		arrows: false,
		pauseOnFocus: false,
		pauseOnHover: false
	})

	$(".js-slick-trigger").on("click", function(){
		
		if ($(this).hasClass('is-paused')) {
			$(this).removeClass('is-paused');
			$('.js-hero-slider').slick('slickPlay');
		} else {
			$(this).addClass('is-paused');
			$('.js-hero-slider').slick('slickPause');		
		}
	});


	$('.js-main-video').slick({
        fade: true,
        asNavFor: '.js-nav-video',
        dots: false,
        arrows: false
	});

	$('.js-nav-video').slick({
		slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        asNavFor: '.js-main-video',
        arrows: false,
        focusOnSelect: true,
        infinite: false
	});
});