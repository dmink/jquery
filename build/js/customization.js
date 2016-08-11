$(document).ready( function() {
/*
    $( 'form :input')
        .css( 'border', '3px solid red' );
*/

    var allInputs = $( 'form :input'),
        textInputs = $( 'form :text'),
        disInputs = $( 'form :disabled'),
        enInputs = $( 'form :enabled'),
        boxInputs = $( 'form input:checkbox'),
        checkInputs = $( 'form input:checked'),
        radInputs = $( 'form input:radio'),
        textArea = $( 'form textarea'),
        btnInputs = $( 'form input:submit'),
        fileInputs = $( 'form input:file'),
        resInputs = $( 'form input:reset' );

    $( textInputs )
        .css( 'border', '3px solid orange' );

    $( disInputs )
        .css( 'border', '3px solid blue' );

    $( boxInputs )
        .wrap('<span></span>')
        .parent()
        .css( 'border', '3px solid green' );

    $( 'form :checkbox:checked' )
        .wrap('<span></span>')
        .parent()
        .css( 'border', '5px solid pink' );

    $( radInputs )
        .wrap('<span></span>')
        .parent()
        .css( 'border', '3px solid red' );

    $( textArea )
        .css( 'border', '3px solid lightgreen' );

    $( btnInputs )
        .css( 'border', '3px solid brown' );

    $( fileInputs )
        .css( 'border', '3px solid coral' );

    $( resInputs )
        .css( 'border', '3px solid lightblue' );
});
