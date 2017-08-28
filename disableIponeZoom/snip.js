function disableIosZoom() {
    $('meta[name=viewport]').attr('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
}

function enableDefaultZoom() {
    $('meta[name=viewport]').attr('content', 'width=device-width, initial-scale=1');
}


