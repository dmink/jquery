$(document).ready( function() {

/*
    $( '.empty-top' ).html( 'There are ' +
        $("li").length + ' elements "li" on the page');

    $( '.empty-bottom' ).text( 'There are ' +
        $("p").length + ' elements "p" on the page' );

    console.log( $('li').get(1) );

    $('ul').find('li.item3')
        .css( 'border', '3px solid red' );
*/

    var leftMargin = 0,
        border = 3;

    $('p').each( function() {
        $(this).css( 'border', border + 'px solid red' );
        $(this).css( 'marginLeft', leftMargin + 'px' );
        border += 4;
        leftMargin += 25;
    });

});
