if ($('.js-city-select-input').length) {
    $(".js-city-select-input").select2({
        dropdownCssClass: "custom-city-select-dropdown",
    })

    $(".js-city-select-input").on("select2:open", function () {
        if (!$('.custom-city-select-dropdown .select2-results').hasClass('mCustomScrollbar')) {
            $('.custom-city-select-dropdown .select2-results').mCustomScrollbar();
            $('.custom-city-select-dropdown ul.select2-results__options').off('mousewheel');
        }
    });
}

