$(document).ready( function() {

    $( 'a[href$=pdf]').css({
        'background-color': 'lightblue'
    });
    $( 'a[href$=html]').css({
        'background-color': 'lightcoral'
    });
    $( 'a[href$=php]' ).css({
        'background-color': 'violet'
    });
    $( 'a[href*="#"]' ).css({
        'background-color': 'lightgreen'
    });
    $( 'a[href^=mail]' ).css({
        'background-color': 'yellow'
    })

});
