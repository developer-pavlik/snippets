$('#element').on('scroll touchmove mousewheel', function (e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
});


