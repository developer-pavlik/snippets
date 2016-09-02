if ($('#claims-map').length) {

    ymaps.ready(function () {
        
        var claimsMap = new ymaps.Map('claims-map', {
            center: [55.751574, 37.573856],
            zoom: 12,
            controls: []
        });
                
        var ZoomLayout = ymaps.templateLayoutFactory.createClass(
            '<div class="map__custom-controls">' +
                '<div id="location" class="map__custom-btn map__custom-btn_location"></div>' +
                '<div id="zoom-in" class="map__custom-btn map__custom-btn_zoom-in"></div>' +
                '<div id="zoom-out" class="map__custom-btn map__custom-btn_zoom-out"></div>' +
            '</div>', {
                build: function () {

                    ZoomLayout.superclass.build.call(this);

                    this.zoomInCallback = ymaps.util.bind(this.zoomIn, this);
                    this.zoomOutCallback = ymaps.util.bind(this.zoomOut, this);

                    $('#zoom-in').bind('click', this.zoomInCallback);
                    $('#zoom-out').bind('click', this.zoomOutCallback);
                },
                clear: function () {
                    $('#zoom-in').unbind('click', this.zoomInCallback);
                    $('#zoom-out').unbind('click', this.zoomOutCallback);

                    ZoomLayout.superclass.clear.call(this);
                },
                zoomIn: function () {
                    var map = this.getData().control.getMap();

                    this.events.fire('zoomchange', {
                        oldZoom: map.getZoom(),
                        newZoom: map.getZoom() + 1
                    });
                },
                zoomOut: function () {
                    var map = this.getData().control.getMap();
                    this.events.fire('zoomchange', {
                        oldZoom: map.getZoom(),
                        newZoom: map.getZoom() - 1
                    });
                }
        });
        
        var zoomControl = new ymaps.control.ZoomControl({ 
            options: { 
                layout: ZoomLayout,
                position:{
                    top: '41.25rem',
                    right: '5.625rem'
                }
            } 
        });
        
        
        claimsMap.controls.add(zoomControl);
        
        $('#claims-map').on('click', '#location',  function(){
            ymaps.geolocation.get({
                provider: 'browser',
                mapStateAutoApply: true
            }).then(function (result) {
                claimsMap.geoObjects.add(result.geoObjects);
            });
        });
        
        
        // Добавление меток на карту
        
        var customBalloonTampalate = ymaps.templateLayoutFactory.createClass(
            '<div class="map__custom-baloon">' +
                '<div class="map__baloon-link-wrapper js-balloon-link">' +
                    '<a class="map__baloon-link" href="#">Отсутствие в аптеках льгот и ещё много текста</a>' +
                '</div>'+
            '</div>'
        );
        
        var claimPoint  = new ymaps.Placemark(claimsMap.getCenter(), {
            hintContent: 'Кастомный значек',
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'static/img/assets/map/map-point.png',
            iconImageSize: [54, 61],
            iconImageOffset: [-27, -61],
            hideIconOnBalloonOpen: false,
            zIndexActive: 761,
            pane: 'balloon',
            balloonShadow: false,
            balloonLayout: customBalloonTampalate,
            balloonPanelMaxMapArea: 0,
            balloonOffset: [-5, -65]
        });
        
        
            
        claimPoint.events.add('click', function (e) {
            var point = e.get('target');
            point.options.set('iconImageSize', [76, 89]);
            point.options.set('iconImageOffset', [-39, -80]);
        });
        
        claimPoint.events.add('balloonopen', function () {
            $('.js-balloon-link').dotdotdot();
        });
                
        claimsMap.geoObjects.add(claimPoint);

       
        // Добавления супер метки
        
//        var superPointTamplate = ymaps.templateLayoutFactory.createClass(
//            '<div class="map__custom-point js-custom-point"></div>'
//        );
//
//        var squarePlacemark = new ymaps.Placemark(
//            claimsMap.getCenter(), 
//            {
//                hintContent: 'Это супер кастомная метка',
//                balloonContent: '<div>Туду ду</div>'
//            }, 
//            {
//                iconLayout: superPointTamplate,
//                iconShape: {
//                    type: 'Rectangle',
//                    coordinates: [
//                        [0, 0], [54, 61]
//                    ]
//                }
//            }
//        );
//
//        claimsMap.geoObjects.add(squarePlacemark);
                          
    });


}