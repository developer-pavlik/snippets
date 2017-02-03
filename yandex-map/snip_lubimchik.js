/* eslint-disable no-undef */

let stores = [
    {
        name: 'Магаз 1',
        coordinates: [55.751574, 37.573856],
        active: true
    },
    {
        name: 'Магаз 2',
        coordinates: [55.784, 37.573836]
    },
    {
        name: 'Магаз 3',
        coordinates: [55.7984, 37.518836]
    }
];



if ($('#js-stores1').length) {

    ymaps.ready(function () {

        let stores1 = new ymaps.Map('js-stores1', {
            center: [55.751574, 37.573856],
            zoom: 12,
            controls: []
        });

        let geoObjectsCollection = new ymaps.GeoObjectCollection();

        for (let i = 0; i < stores.length; i++) {

            let icon;
            let iconSize;

            if (stores[i].active) {
                icon = '/static/img/assets/map-block/point-active.svg';
                iconSize = [26, 42];
            } else {
                icon = '/static/img/assets/map-block/point.svg';
                iconSize = [26, 26];
            }



            let shop = new ymaps.Placemark(stores[i].coordinates, {
            }, {
                iconLayout: 'default#image',
                iconImageHref: icon,
                iconImageSize: iconSize
            });

            geoObjectsCollection.add(shop);

        }

        stores1.geoObjects.add(geoObjectsCollection);

    });

}
