// Продключение packery

//Способ 1
var Packery = require('packery');

var pckry = new Packery( '.js-post-list', {
    //Опциии  
});



//Способ 2

var jQBridget = require('jquery-bridget');
var Packery = require('packery');
$.bridget( 'packery', Packery, $ );


$('.js-post-list').packery({
    itemSelector: '.post-list__item',
    gutter: 0,
    percentPosition: true,
    originLeft: true,
    originTop: true
});

// Инфа взята из http://packery.metafizzy.co/extras.html