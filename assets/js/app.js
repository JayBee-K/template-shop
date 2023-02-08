(function ($) {
	'use strict';
	let windowWidth = $(window).width();

	const handleSliderHero = function () {
		if ($('#slider-hero').length) {
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
	}

	const handleSliderFeedback = function () {
		if ($('#slider-feedback').length) {
			new Swiper('#slider-feedback .swiper', {
				slidesPerView: 1.5,
				spaceBetween: 30,
				speeds: 750,
				loop: true,
				autoplay: {
					delay: 6000,
				},
				navigation: {
					nextEl: '#slider-feedback .button-next',
					prevEl: '#slider-feedback .button-prev',
				},
				breakpoints: {
					375: {
						slidesPerView: 2.5
					},
					992: {
						slidesPerView: 3.5
					},
					1200: {
						slidesPerView: 4
					}
				}
			});
		}
	}


	$(function () {
		handleSliderHero();
		handleSliderFeedback();

		$(window).resize(() => {
			windowWidth = $(window).width();
		});
	});
})(jQuery);
