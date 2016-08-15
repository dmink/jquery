$('document').ready(function() {

    $('.block1').hover( mouseMove, mouseMove );

    $('.block1').click( fnClick1 );
    $('.block1').dblclick( fnClick2 );

});

function mouseMove(evt) {
    $('.block1').toggleClass('hover');
};

function fnClick1() {
    $('.block1').html( 'Click' );
}

function fnClick2() {
    $('.block1').html( 'Double Click' );
}