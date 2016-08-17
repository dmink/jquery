$(function() {

    $('.block-data').one( 'click', function(evt) {

        $(this).css({
            'background-color' : 'lightgreen',
            'border' : '5px solid darkgreen',
            'cursor' : 'auto'
        });
    });
});