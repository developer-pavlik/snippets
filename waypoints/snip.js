$('.js-info-box').waypoint({
    handler: function () {
        var filter = $(this.element).attr('data-filter');
        $('.js-scroll-button').addClass('btn-default').removeClass('btn-primary');
        $('.js-scroll-button[data-filter =' + filter + ']').addClass('btn-primary').removeClass('btn-default');

    }
});


