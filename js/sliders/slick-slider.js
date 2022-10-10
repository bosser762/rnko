$(document).ready(function () {
    $('.slider-nav').slick({
        pauseOnHover: false,
        variableWidth: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        infinite: true,
        focusOnSelect: true,
        appendDots: $('.slider-dots-box'),
        dotsClass: 'slider-dots',
    });

    $('.main-blog-carousel').slick({
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 5000,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $(".main-blog-prev-arrow"),
        nextArrow: $(".main-blog-next-arrow"),
        responsive: [
            {
                breakpoint: 1196,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 860,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 832,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

// On before slide change
$('.slider-nav').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $('.slider-dots-box button').html('');

}).trigger('beforeChange');

// On before slide change
$('.slider-nav').on('afterChange', function (event, slick, currentSlide) {
    var backgorund = ['url("https://bosser762.github.io/rnko.github.io/images/illustrations/pomosh_v_rabote.png") no-repeat center left, linear-gradient(180deg, #EBFAF1 0%, #CCE7D6 100%)','url("https://bosser762.github.io/rnko.github.io/images/illustrations/popolnenie_kart.png") no-repeat center left, linear-gradient(180deg, #F7EBE7 0%, #E7CFC7 100%)']
    $('#main-slider').css('background', backgorund[currentSlide]);
    //console.log('index=' + currentSlide);
    $('.slider-dots-box button').html('');
    $('.slider-dots-box .slick-active button')
        .html(`<svg class="progress-svg" width="18" height="18">
		<g transform="translate(20,20)">
      <circle class="circle-go" r="8" cx="-11" cy="-11"></circle>
      <text class="circle-tx" x="0" y="4" alignment-baseline="middle" stroke-width="0" text-anchor="middle"></text>
		</g>
    </svg>`);
}).trigger('afterChange');

$('.main-blog-carousel').on('afterChange', function (event, slick, currentSlide) {
    var leftArrow = $('.main-blog-prev-arrow');
    var rightArrow = $('.main-blog-next-arrow');
    if (leftArrow.hasClass('slick-disabled')){
        leftArrow.html('<img src="images/icons/arrows/arrow-left-light.svg" alt="">');
    }else{
        leftArrow.html('<img src="images/icons/arrows/arrow-left-black.svg" alt="">');
    }
    if (rightArrow.hasClass('slick-disabled')){
        rightArrow.html('<img src="images/icons/arrows/arrow-right-light.svg" alt="">');
    }else{
        rightArrow.html('<img src="images/icons/arrows/arrow-right-black.svg" alt="">');
    }
}).trigger('afterChange');