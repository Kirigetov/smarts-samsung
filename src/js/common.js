$(document).ready(function() {

	var	btn = $('<button/>', { class: 'btn-nav js-slick-trigger' });

	var owl = $('.js-hero-slider');
		owl.owlCarousel({
		    items:1,
		    loop:true,
		    margin:0,
		    autoplay:true,
		    autoplayTimeout:2000,
		    autoplayHoverPause:false,
		    dots: true,
			callbacks: true,
			onInitialized: moveNav
		});

		function moveNav() {
		  btn.appendTo('.owl-stage-outer');
		}

		$('.js-slick-trigger').on('click',function(){
			if ($(this).hasClass('is-paused')) {
				$(this).removeClass('is-paused');
			    owl.trigger('play.owl.autoplay',[2000]);
			} else {
				$(this).addClass('is-paused');
			    owl.trigger('stop.owl.autoplay');
			}
		})
});