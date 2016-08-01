function shopMaps() {
    var self = this;

    ymaps.ready(function () {

        self.shopsMap = new ymaps.Map('shops-map', {
            center: shops[0].coordinates,
            zoom: 12,
            controls: ['zoomControl', 'fullscreenControl', 'typeSelector']
        });

        var geoObjectsCollection = new ymaps.GeoObjectCollection();

        for (var i = 0; i < shops.length; i++) {

            var balloonContent =
                    '<div class="shop-map-balloon-content">' +
                    '<p class="shop-map-balloon-content__name">' + shops[i].name + '</p>' +
                    '<p class="shop-map-balloon-content__address">' + shops[i].address + '</p>' +
                    '</div>'
                    ;

            var shop = new ymaps.Placemark(shops[i].coordinates, {
                balloonContent: balloonContent
            });

            geoObjectsCollection.add(shop);

        }

        self.shopsMap.geoObjects.add(geoObjectsCollection);

    });

    this.setCenter = function (id) {
        this.shopsMap.setCenter(shops[id].coordinates);
    }

}

