$(function() {

    $('.btn1').click( function() {
        countUpdate( $('.count1') );
    });

    $('.btn2').click( function(evt) {
        $('.btn1').trigger('click');
        countUpdate( $('.count2') );
    })
});

function countUpdate(val) {
    var tmp = parseInt( val.text(), 10 );
    val.text( tmp + 1 );
}