$('document').ready(function() {

    $('.block1').on( 'mouseover mouseleave', mouseMove);

    $('.block1').on( 'click', function(evt) {
        $(this).off( 'mouseover mouseleave', mouseMove );
        $(this).html( '<p>You shut off the hover effect</p>' )
    });

});

function mouseMove(evt) {
    $('.block1').toggleClass('hover');
};