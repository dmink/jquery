$(function() {

    $('.block-data').click( function(evt) {

        $(this).html('PageX: ' + evt.pageX + ', PageY: ' + evt.pageY + ',<br>' +
            'Type: ' + evt.type + ',<br>' + 'Target: ' + evt.target);

        if (evt.pageX <= 300) {
            $(this).css({
                'background-color': 'tomato'
            });
        } else if (evt.pageX > 300 && evt.pageX <= 600) {
            $(this).css({
                'background-color': 'lightgreen'
            });
        } else {
            $(this).css({
                'background-color': 'orange'
            });
        };
    });
});