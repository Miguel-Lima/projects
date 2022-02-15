// Primeira opção para realizar a abertura e fechamento do menu navegador
/* function menuToggle() {
    let menuArea = document.getElementById("menu-area");

    if(menuArea.classList.contains('menu-opened') == true) {
        menuArea.classList.remove('menu-opened');
    } else {
        menuArea.classList.add('menu-opened');
    }
    console.log(menuArea) 
} */

// Segunda opção para realizar a abertura e fechamento do menu navegador
function menuToggle() {
    let menuArea2 = document.getElementById("menu-area");
    if(menuArea2.style.width == '200px') {
        menuArea2.style.width = '0px';
    } else {
        menuArea2.style.width = '200px';
    }
}