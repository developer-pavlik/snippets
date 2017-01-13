$('.js-toggle-link').on('click', function(e){
    e.preventDefault();
    
    var mainClass = $(this).attr('data-main-class');
    var textBeforeState = $(this).attr('data-before-text');
    var textAfterState = $(this).attr('data-after-text');
    var textNodeClass = $(this).attr('data-text-node');
    
    var modifierClass = mainClass + '_active';
    
    var textDefaultNode = $(this);
    
    if(textNodeClass){
        textDefaultNode = $(this).find(`.${textNodeClass}`);
    }
    
    if(!$(this).hasClass(modifierClass)){
        $(textDefaultNode).text(textAfterState);
    }else{
        $(textDefaultNode).text(textBeforeState);
    }
    
    $(this).toggleClass(modifierClass); 
});