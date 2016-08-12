$(document).ready( function() {

    //$( '.list > li > a' ).append( 'content .append link' );
    //$( '.list > li' ).append( 'content .append "li"' );
    //$( '.list > li:first').prepend( 'content .prepend' );
    //$( '.block2 p:last' ).appendTo( 'p:first' );
    //$( '.block2 p:last' ).prependTo( 'p:first' );
    //$( '.block2 p:first' ).insertAfter( 'p:last' );

    $( '.block2 p:last' ).after( '<p>Item 5 - new content</p>' );
    $( '.block2 p:last').attr( 'class', 'dmk' );


});
