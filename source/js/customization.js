$(document).ready( function() {

    $('p:first').wrap('<div class="class"></div>').css({
        'background-color' : 'yellow'
    });

    $('p').wrapAll( '<div style="border: 3px solid red"></div>' );

    $('ul li').empty();

    $('.container').wrapInner( '<div style="background-color: #f2f2f2"></div>' );

    $('.block2').clone();

});
