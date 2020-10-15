$(window).on("load", function(e) {
	$(".cont-loader").fadeOut('slow')
})

$(document).ready( function () {

    $(window).scroll(function() {
		if($(this).scrollTop() > 150) {
			$('header').addClass('fixed')
		} else if ($(this).scrollTop() < 10) {
			$('header').removeClass('fixed')
		}
	})

    $('.slide-home').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true,
        speed: 1000,
        pauseOnFocus: false,
        pauseOnHover: false
    })

    $('.banner-slide').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        arrows: false,
        dots: true,
        pauseOnFocus: false,
        pauseOnHover: false
    })

    $('.slide-product').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 10000,
        arrows: false,
        dots: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    })

    $('.slide-marcas').slick({
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 5,
        slidesToScroll: 1,
        swipe: false,
        arrows: false,
        speed: 5000,
        pauseOnFocus: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    })

})