
document.addEventListener('DOMContentLoaded', function() {
    crearGaleria()

});

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');
    const cantidadImagenes = 16;

    for(let i=1; i <= cantidadImagenes; i++) {
        const imagen = document.createElement('IMG')
        imagen.src=`src/gallery/full/${i}.jpg`
        imagen.alt= 'Imagen Galeria'

        // Event Handler
        imagen.onclick = function() {
            mostrarImagen(i)
        }

        galeria.appendChild(imagen)
    }
}

function mostrarImagen(i) {

    const imagen = document.createElement('IMG')
    imagen.src=`src/gallery/full/${i}.jpg`
    imagen.alt= 'Imagen Galeria'


    // Generar Modal
    const modal =document.createElement('DIV')
    modal.classList.add('modal')

    // Boton Cerrar
    const botonCerrar = document.createElement('BUTTON')
    botonCerrar.textContent = 'X'
    botonCerrar.classList.add('btn-cerrar')
    botonCerrar.onclick = cerrarImagen

    modal.appendChild(imagen)
    modal.appendChild(botonCerrar)

    // Agregar Al HTML
    const body = document.querySelector('body')
    body.classList.add('overflow-hidden')
    body.appendChild(modal)

    //Cerrar Modal
    modal.onclick = cerrarImagen

    console.log(modal)
}

function cerrarImagen() {
    const modal = document.querySelector('.modal')
    modal.classList.add('fade-Out')

    setTimeout(() => {
        modal?.remove()
        
        const body = document.querySelector('body')
        body.classList.remove('overflow-hidden')
    }, 450);
}