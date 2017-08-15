if (google) { // eslint-disable-line no-undef
    const labelTemplate = '<div class="p-contacts__map-label">Federation tower East</div>';

    let myOptions = {
        content: labelTemplate,
        disableAutoPan: true,
        position: new google.maps.LatLng(55.7501635, 37.5382627), // eslint-disable-line no-undef
        closeBoxURL: '',
        isHidden: false,
        pane: 'mapPane',
        enableEventPropagation: true
    };

    let ibLabel = new InfoBox(myOptions); // eslint-disable-line no-undef
    ibLabel.open(map);
}

google.maps.event.addDomListener(window, 'resize', function () { // eslint-disable-line no-undef
    centerMapSelector();
    google.maps.event.trigger(map, 'resize'); // eslint-disable-line no-undef
    map.setCenter(new google.maps.LatLng(centerMapCoordinates[0], centerMapCoordinates[1])); // eslint-disable-line no-undef
});


// https://github.com/googlemaps/v3-utility-library  
// https://github.com/googlemaps/v3-utility-library/tree/master/infobox