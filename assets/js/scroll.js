var $root = $('html, body');

$('a').click(function(event) {
    event.preventDefault();

    $root.animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 300 );
});
