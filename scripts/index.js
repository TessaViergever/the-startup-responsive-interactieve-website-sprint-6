
const menuButton = document.querySelector('#button-hamburger-menu')
const nav = document.querySelector('.main-navigation')

menuButton.addEventListener('click', function() {
    nav.classList.toggle('open')
    menuButton.classList.toggle('open')
})


