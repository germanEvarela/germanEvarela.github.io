
const imagenes = document.querySelectorAll('.img-galeria');
const imagenesClose = document.querySelector('.agregar-imagen');
const contenedorClose = document.querySelector('.imagen-close');
const menu1 = document.querySelector('.menu');

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'))
        
    })
})

contenedorClose.addEventListener('click', (e) =>{
    if(e.target != imagenesClose){
        contenedorClose.classList.toggle('show')
        imagenesClose.classList.toggle('showImage') 
        menu1.style.opacity = '1'
    }
})

const aparecerImagen = (imagen) =>{
    imagenesClose.src = imagen;
    contenedorClose.classList.toggle('show')
    imagenesClose.classList.toggle('showImage')
    menu1.style.opacity = '0'
}