const btnMenu = document.getElementById('btnMenu')
const menu = document.getElementById('menu')
const menuLinks = document.querySelectorAll('.menu-links')

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('-left-full')
})