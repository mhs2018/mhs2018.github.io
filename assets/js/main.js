//Scrolling
var $root = $('html, body');
$('a[href="#links"]').click(function(event) {
    event.preventDefault();

    $root.animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500 );
});
