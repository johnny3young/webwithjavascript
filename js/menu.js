const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.menu-navegacion')

/* console.log(menu)
console.log(hamburger) */

hamburger.addEventListener('click', ()=>{
    // Agrego o quito una clase en ese elemento para desencadenar algo
    menu.classList.toggle("spread")
})

// Saber en consola a qué le estoy dando click
window.addEventListener('click', e=>{
    console.log(e.target)
})

window.addEventListener('click', e=>{
    // Para que el menu se pueda ocultar si damos por fuera del menu hamburgesa
    if(menu.classList.contains('spread')
    && e.target != menu && e.target != hamburger){
    menu.classList.toggle("spread")
    }
})