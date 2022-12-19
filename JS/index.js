document.querySelector('header__links').addEventListener('click', function() {
    const elementOne = document.getElementById('TV_Shows');
    const elementTwo = document.getElementById('Movies');
    const elementTree = document.getElementById('My_List')

    if (elementOne.classList.contains("header__links")) {
        elementOne.classList.remove("header__links");
        elementTwo.classList.add("header__links_is-active");
        elementTree.classList.remove("header__links")

    } else {
        elementOne.classList.add("hidden");
        elementTwo.classList.remove("hidden");
    }
})