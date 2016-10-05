$('.js-info-box').waypoint({
    handler: function () {
        var filter = $(this.element).attr('data-filter');
        $('.js-scroll-button').addClass('btn-default').removeClass('btn-primary');
        $('.js-scroll-button[data-filter =' + filter + ']').addClass('btn-primary').removeClass('btn-default');

    }
});


/////////////////////Все вместе////////////////////////////////////////////////////



$(document).on('click', '.js-scroll-button', function () {
    var filter = $(this).data('filter');

    $('.js-scroll-button').addClass('btn-default').removeClass('btn-primary');
    $(this).addClass('btn-primary').removeClass('btn-default');

    var topOffset = $('.js-info-box[data-filter =' + filter + ']').offset().top;

    Waypoint.disableAll();
    toBlock(topOffset);
});

function toBlock(offset) {
    $('html, body').stop().animate({scrollTop: offset}, 500, enableWaypoint);

}


$('.js-info-box').waypoint({
    handler: function () {
        var filter = $(this.element).attr('data-filter');
        $('.js-scroll-button').addClass('btn-default').removeClass('btn-primary').trigger('blur');
        ;
        $('.js-scroll-button[data-filter =' + filter + ']').addClass('btn-primary').removeClass('btn-default');

    }
});

function enableWaypoint() {
    Waypoint.enableAll();
}