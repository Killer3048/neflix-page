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

$(document).ready(function(){
    let sliderPosition = 0;
    const sliderContainer = $('.carousel-wrapper');
    const sliderTrack = $('.cards');
    const sliderItem = $('.cards__component');
    const sliderItemWidth = sliderItem.width();
    const sliderContainerWidth = sliderContainer.width();
    const sliderTrackWidth = sliderItem.length * sliderItemWidth - sliderContainerWidth + sliderContainerWidth/2; 
    const sliderButtonPrev = $('.arrow');
    const sliderButtonNext = $('.arrow-right');
    sliderButtonPrev.on('click', function(){
        sliderPosition += sliderItemWidth; 
        if (sliderPosition > 0) {
            sliderPosition = 0;
        }
        sliderTrack.css('transform', `translateX(${sliderPosition}px`);
        sliderButtons();
    });
    sliderButtonNext.on('click', function(){
        sliderPosition -= sliderItemWidth;
        if (sliderPosition < -sliderTrackWidth) {
            sliderPosition = -sliderTrackWidth;
        }
        sliderTrack.css('transform', `translateX(${sliderPosition}px`);
        sliderButtons();
    });
    const sliderButtons = () => {
        if (sliderPosition == 0) {
            sliderButtonPrev.hide();
        } else {
            sliderButtonPrev.show();
        }
        if (sliderPosition == -sliderTrackWidth) {
            sliderButtonNext.hide();
        } else {
            sliderButtonNext.show();
        }

     }

    sliderButtons();
});




