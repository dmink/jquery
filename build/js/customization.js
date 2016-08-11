$(document).ready( function() {

    //$( "p:contains(3)" ).css('border', '3px solid red');
    //$( "li:contains(3), p:contains(3)" ).css('border', '3px solid red');
    //$( "p:nth-child(2n)" ).css('border', '3px solid red');
    //$( "ul li:last-child" ).css('border', '3px solid red');
    //$( "p:parent" ).css('border', '3px solid red');
    $( "ul:has(li[class^=item])" ).css('border', '3px solid red');

});
