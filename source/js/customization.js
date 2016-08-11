$(document).ready( function() {

    console.log( $( '.block2').html() );

    //$('ul li').html( 'new content' );

    var newContent = $( '<p>This is a new paragraph</p>'),
        someContent = $( '<p>This is the last paragraph</p>' );

    $( '.par2').html( newContent.text() );
    $( 'p:last').html( someContent.text() );

});
