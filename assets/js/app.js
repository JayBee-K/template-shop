(function ($) {
	'use strict';
	let windowWidth = $(window).width();

	const handleSliderHero = function () {
		new Swiper('#slider-hero .swiper', {
			speed: 1500,
			slidesPerView: 1,
			preloadImages: false,
			effect: 'slide',
			loop: true,
			autoplay: {
				delay: 8000,
				disableOnInteraction: false,
			},
			pagination: {
				el: "#slider-hero .hero-pagination",
				clickable: true,
			},
		});
	}


	$(function () {
		handleSliderHero();


		$(window).resize(() => {
			windowWidth = $(window).width();
		});
	});
})(jQuery);
