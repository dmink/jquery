$(document).ready( function() {

    $('.s-height').html( $('.block-size').height() );
    $('.s-width').html( $('.block-size').width() );
    $('.s-innerheight').html( $('.block-size').innerHeight() );
    $('.s-innerwidth').html( $('.block-size').innerWidth() );
    $('.s-outerheight').html( $('.block-size').outerHeight() );
    $('.s-outerwidth').html( $('.block-size').outerWidth() );
    $('.s-offset').html( $('.block-size').offset().top + ' , ' + $('.block-size').offset().left );
    $('.s-position').html( $('.block-size').position().top + ' , ' + $('.block-size').position().left );

    $('li').addClass('items').removeClass('item1');

    $('.block2 p').click( function() {
        $(this).toggleClass('.active', 'switch');
    });

    $('.scroll-btn').click( function() {
        var valTop = $('.scroll-wrap').scrollTop();
        $('.scroll-value').text( 'ScrollTop: ' + valTop );
        console.log( 'ScrollTop: ' + valTop );
    });

});
