(function ($) {
	("use strict");

	// Btn area start here ***
	$(".button_su_inner").mouseenter(function (e) {
		var parentOffset = $(this).offset();

		var relX = e.pageX - parentOffset.left;
		var relY = e.pageY - parentOffset.top;
		$(this).prev(".su_button_circle").css({ left: relX, top: relY });
		$(this).prev(".su_button_circle").removeClass("desplode-circle");
		$(this).prev(".su_button_circle").addClass("explode-circle");
	});
	$(".button_su_inner").mouseleave(function (e) {
		var parentOffset = $(this).offset();

		var relX = e.pageX - parentOffset.left;
		var relY = e.pageY - parentOffset.top;
		$(this).prev(".su_button_circle").css({ left: relX, top: relY });
		$(this).prev(".su_button_circle").removeClass("explode-circle");
		$(this).prev(".su_button_circle").addClass("desplode-circle");
	});
	// Btn area end here ***

	var swiper = new Swiper(".brand__slider", {
		loop: "true",
		spaceBetween: 50,
		speed: 1000,
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".testimonial-two__dot",
			clickable: true,
		},
		navigation: {
			nextEl: ".testimonial-two__arry-next",
			prevEl: ".testimonial-two__arry-prev",
		},
		breakpoints: {
			1500: {
				slidesPerView: 6,
			},
			1200: {
				slidesPerView: 3,
			},
			767: {
				slidesPerView: 2,
			},
		},
	});
})(jQuery);
