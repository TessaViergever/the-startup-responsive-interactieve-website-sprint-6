


//Stap 1: JS koppelen aan CSS/HTML //
let menuButton = document.querySelector ('#button-hamburger-menu') //(SELECT)//
let menuOpensBelow = document.querySelector ('nav.open')


//Stap 2: event selecteren (IF this...) //
menuButton.addEventListener ('click', openMenu) //(EVENT)//


//Stap 3: functie toewijzen (...THEN that) //
function openMenu() {
    menuOpensBelow.classList.toggle('nav.open') //(FUNCTION)//
}

