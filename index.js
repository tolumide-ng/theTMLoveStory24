const hamburger = document.querySelector("#hamburger");
const pageWrapper = document.querySelector("#tm-page");
hamburger.addEventListener('click', (e) => {
    e.stopPropagation()
    const menu = document.querySelector("#menu-mobile")
    menu.classList.toggle("menu-nodisplay");
})


pageWrapper.addEventListener('click', (e) => {
    e.stopPropagation()
    const menu = document.querySelector("#menu-mobile")
    const menuDisplayed = !menu.classList.contains("menu-nodisplay");
    if (menuDisplayed) {
        menu.classList.toggle("menu-nodisplay")
    }
})