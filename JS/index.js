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
