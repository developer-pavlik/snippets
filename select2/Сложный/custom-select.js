import 'select2';

function formatSelectOptions(state) {
    if (!state.id) {
        return state.text;
    }
    
    var bigData = state.text;
    var subData = $(state.element).attr('data-sub-info');
    
    var $state = $(
        '<span class="custom-select-data">' +
            (bigData ? '<span class="custom-select-big-data">' + bigData + '</span>' : '') +
            (subData ? '<span class="custom-select-sub-data">' + subData + '</span>' : '') +
        '</span>'
    );
    
    
    return $state; 
};


function formatCurrentOptions(data, container) {
    
    var bigData = data.text;
    var subData = $(data.element).attr('data-sub-info');
    
    var $state = $(
        '<span class="custom-select-data">' +
            (bigData ? '<span class="custom-select-big-data">' + bigData + '</span>' : '') +
            (subData ? '<span class="custom-select-sub-data">' + subData + '</span>' : '') +
        '</span>'
    );
    
    return $state;
}




$('.js-custom-select').select2({
    templateResult: formatSelectOptions,
    templateSelection: formatCurrentOptions,
    theme: 'buy-select',
    minimumResultsForSearch: Infinity
});