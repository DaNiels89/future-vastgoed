$(document).ready(function () {
	$(".mobile-center-slider").slick({
		centerMode: true,
		centerPadding: "30px",
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					dots: true,
					autoplay: true,
					centerMode: true,
					centerPadding: "40px",
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 576,
				settings: {
					arrows: false,
					dots: true,
					autoplay: true,
					centerMode: true,
					centerPadding: "40px",
					slidesToShow: 1,
				},
			},
		],
	});
});
