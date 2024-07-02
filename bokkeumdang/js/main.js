
$(document).ready(function(){
    $('header').mouseenter(function(){
        $('header').stop().animate({
            height: '303px'
        }, 150)
    })
    $('header').mouseleave(function(){
        $('header').stop().animate({
            height: '85px'
        }, 150)
    })
})
