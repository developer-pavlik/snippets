jQuery.extend(jQuery.fn.dataTableExt.oSort, {
    "de_date-asc": function (dataA, dataB) {

        var a = $($.parseHTML(dataA)).attr('data-date');
        var b = $($.parseHTML(dataB)).attr('data-date');

        var x, y;
        if (jQuery.trim(a) !== '') {
            var deDatea = jQuery.trim(a).split('.');
            x = (deDatea[2] + deDatea[1] + deDatea[0]) * 1;
        } else {
            x = Infinity; // = l'an 1000 ...
        }

        if (jQuery.trim(b) !== '') {
            var deDateb = jQuery.trim(b).split('.');
            y = (deDateb[2] + deDateb[1] + deDateb[0]) * 1;
        } else {
            y = Infinity;
        }
        var z = ((x < y) ? -1 : ((x > y) ? 1 : 0));
        return z;
    },
    "de_date-desc": function (dataA, dataB) {

        var a = $($.parseHTML(dataA)).attr('data-date');
        var b = $($.parseHTML(dataB)).attr('data-date');

        var x, y;
        if (jQuery.trim(a) !== '') {
            var deDatea = jQuery.trim(a).split('.');
            x = (deDatea[2] + deDatea[1] + deDatea[0]) * 1;
        } else {
            x = Infinity;
        }

        if (jQuery.trim(b) !== '') {
            var deDateb = jQuery.trim(b).split('.');
            y = (deDateb[2] + deDateb[1] + deDateb[0]) * 1;
        } else {
            y = Infinity;
        }
        var z = ((x < y) ? 1 : ((x > y) ? -1 : 0));
        return z;
    }
});


if ($('.js-data-table').length) {
    $('.js-data-table').DataTable({
        paging: false,
        searching: false,
        info: false,
        autoWidth: false,
        order: [],
        aoColumnDefs: [
            {type: 'de_date', targets: [2]},
            {'bSortable': false, 'aTargets': [1]}
        ]
    });
}

