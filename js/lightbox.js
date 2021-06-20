const portfolios = document.querySelectorAll('.img-portfolio')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-ligth')
const hamburgerOpacity = document.querySelector('.hamburger')

portfolios.forEach(portfolio =>{
    portfolio.addEventListener('click', ()=>{
        // Muestra la ruta de la imagen
        // console.log(portfolio.getAttribute('src'))
        aparecerImagen(portfolio.getAttribute('src'))
        
    })
})

contenedorLight.addEventListener('click', (e)=>{
    if(e.target != imagenesLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
        hamburgerOpacity.style.opacity = '1'
}
    
})

const aparecerImagen = (portfolio) =>{
    imagenesLight.src = portfolio;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    // Cuando abran el LiveBox la opacidad del Menu hamburger será 0
    hamburgerOpacity.style.opacity = '0'
}