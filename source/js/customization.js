$(document).ready( function() {

    $('.data-store').click( function() {
        $('.data-sample').data( 'key1', 13 );
        $('.data-sample').data( 'key2', 'Dmitry Kostrubiak' );
    });

    $('.data-remove').click( function() {
        $('.data-sample').removeData();
    });

    $('.data-show').click( function() {
        //alert( $('.data-sample').data('key1') );
        //alert( $('.data-sample').data('key2') );
        alert( JSON.stringify( $('.data-sample').data(),null,'  ' ) );
    });

});
