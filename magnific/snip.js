$('.slider-consult__more-info').on('click', function (e) {
    e.preventDefault();

    $.magnificPopup.open({
        items: {
            src: '.consult-info-pop-up'
        },
        type: 'inline',
        showCloseBtn: false,
        mainClass: 'consult-pop-up-overlay',
        callbacks: {
            open: function () {
                $('body').addClass('overflow-hidden');
            },
            close: function () {
                $('body').removeClass('overflow-hidden');
            }
        }
    });
});

$('.js-hide-popup').on('click', function (e) {
    e.preventDefault();

    $.magnificPopup.close();
});


