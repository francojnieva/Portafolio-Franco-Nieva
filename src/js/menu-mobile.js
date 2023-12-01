const btnMenu = document.getElementById('btnMenu')
const imgMenu = document.getElementById('imgMenu')
const imgCloseMenu = document.getElementById('imgCloseMenu')
const navbarMobile = document.getElementById('navbarMobile')
const linkMenu = document.querySelectorAll('.link-menu')

btnMenu.addEventListener('click', () => {
    imgMenu.classList.toggle('hidden')
    imgCloseMenu.classList.toggle('hidden')

    navbarMobile.classList.toggle('-top-0')
    navbarMobile.classList.toggle('-top-full')
    
})

linkMenu.forEach(link => {
    link.addEventListener('click', () => {
        navbarMobile.classList.toggle('-top-full')
        imgMenu.classList.toggle('hidden')
        imgCloseMenu.classList.toggle('hidden')
    })
})
