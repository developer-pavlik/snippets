$('.js-shop-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<div class="shop-slider__prev-btn">Предыдущий</div>',
    nextArrow: '<div class="shop-slider__next-btn">Следующий</div>'
});


$('.js-big-slider').slick({
    infinite: true,
    autoplay:true,
    autoplaySpeed:1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    appendDots: $('.big-slider__pagination')
});


$('.js-big-slider').slick({    
    dots: true,
    appendDots: $('.big-slider__pagination'),
    customPaging: function(slider, i) {
      // this example would render "tabs" with titles
      return '<span class="dot"></span>';
    },
    dotsClass:'имя класса обложки'
});


////Всякие команы для сбороса

$('.block').slick('refresh');
$('.block').slick('reinit');

//{
//    breakpoint: 767,
//    settings: "unslick"
//}

//https://jsfiddle.net/simeydotme/9nm4ctv9/