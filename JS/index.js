document.getElementById("TV_Shows").onclick = function() {
    document.getElementById("TV_Shows").classList.toggle("header__links_is-active")
    document.getElementById("Movies").classList.remove("header__links_is-active")
    document.getElementById("My_List").classList.remove("header__links_is-active")


}

document.getElementById("Movies").onclick = function() {
    document.getElementById("Movies").classList.toggle("header__links_is-active")
    document.getElementById("TV_Shows").classList.remove("header__links_is-active")
    document.getElementById("My_List").classList.remove("header__links_is-active")
}

document.getElementById("My_List").onclick = function() {
    document.getElementById("My_List").classList.toggle("header__links_is-active")
    document.getElementById("TV_Shows").classList.remove("header__links_is-active")
    document.getElementById("Movies").classList.remove("header__links_is-active")
}
var carousel = $('#carousel'),
    threshold = 87.5,
    slideWidth = 311,
    dragStart,
    dragEnd;

$('#next').click(function() { shiftSlide(-1) })
$('#prev').click(function() { shiftSlide(1) })

carousel.on('mousedown', function() {
    if (carousel.hasClass('transition')) return;
    $(this).on('mousemove', function() {
        $(this).css('transform', 'translateX(' + dragPos() + 'px)')
    })
    $(document).on('mouseup', function() {
        if (dragPos() > threshold) { return shiftSlide(1) }
        if (dragPos() < -threshold) { return shiftSlide(-1) }
        shiftSlide(0);
    })
});

function dragPos() {
    return dragEnd - dragStart;
}

function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup')
    carousel.off('mousemove')
        .addClass('transition')
        .css('transform', 'translateX(' + (direction * slideWidth) + 'px)');
    setTimeout(function() {
        if (direction === 1) {
            $('.cards__component:first').before($('.cards__component:last'));
        } else if (direction === -1) {
            $('.cards__component:last').after($('.cards__component:first'));
        }
        carousel.removeClass('transition')
        carousel.css('transform', 'translateX(0.8%)');
    }, 700)
}