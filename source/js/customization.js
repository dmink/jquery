$(document).ready( function() {

    //$( 'p[class]' ).css('border', '3px solid red');
    //$( 'p[id=par3]' ).css('border', '3px solid red');
    //$( 'li[id^=item]' ).css('border', '3px solid red');
    //$( 'li[id*=item]' ).css('border', '3px solid red');
    //$( 'li[id$=item]' ).css('border', '3px solid red');
    $( "p[class*=par][lang^=en]" ).css('border', '3px solid red');

});
