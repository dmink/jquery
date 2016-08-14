$('document').ready(function() {
    buildList('.block__title', '#headings');
});

function buildList (hTitle, hContainer) {

    var hCount = 0,
        hList = $('<ul class="hList">');

    $(hTitle).each(function() {

        $(this).html("<a name='hPage" + hCount + "'></a>" + $(this).html());
        hList.append($("<li><a href='#hPage" + hCount++ + "'> " + $(this).text() + "</a></li>"));

    });

    $(hContainer).append(hList);
}