function stopScroll() {
    $('body').on('scroll touchmove mousewheel', function (e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    });
}

function startScroll() {
    $('body').off('scroll touchmove mousewheel');
}