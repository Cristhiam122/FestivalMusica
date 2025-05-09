
document.addEventListener('DOMContentLoaded', function() {

    navegacionFija()
    crearGaleria()
    resaltarEnlace()
    scrollNav()
});

function navegacionFija() {
    const header= document.querySelector('.header')
    const sobreFestival = document.querySelector('.sobre-festival')

    window.addEventListener('scroll', function() {
        if(sobreFestival.getBoundingClientRect().bottom < 1) {
            header.classList.add('fixed')
        }else {
            header.classList.remove('fixed')
        }
    })
}


function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');
    const cantidadImagenes = 16;

    for(let i=1; i <= cantidadImagenes; i++) {
        const imagen = document.createElement('PICTURE')
        imagen.innerHTML = `
        <source srcset="build/img/thumb/${i}.avif" type="image/avif">
        <source srcset="build/img/thumb/${i}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.jpg" alt="imagen galeria">
    `;

        // Event Handler
        imagen.onclick = function() {
            mostrarImagen(i)
        }

        galeria.appendChild(imagen)
    }
}

function mostrarImagen(i) {

    const imagen = document.createElement('PICTURE')
    imagen.innerHTML = `
    <source srcset="build/img/full/${i}.avif" type="image/avif">
    <source srcset="build/img/full/${i}.webp" type="image/webp">
    <img loading="lazy" width="200" height="300" src="build/img/full/${i}.jpg" alt="imagen galeria">
`;


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


function resaltarEnlace() {
    document.addEventListener('scroll', function(){
        const sections = document.querySelectorAll('section')
        const navLinks = document.querySelectorAll('.navegacion-principal a')

        let sectionActive = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop
            const sectionHeight = section.clientHeight


            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                sectionActive = section.id

            }


        });

        navLinks.forEach(links => {
            links.classList.remove('active')
            if (links.getAttribute('href') === '#' + sectionActive) {
                links.classList.add('active')
                
            }

        });

    })
}

function scrollNav() {
    const navLinks = document.querySelectorAll('.navegacion-principal a')

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault()

            const sectionScroll = e.target.getAttribute('href')
            const section = document.querySelector(sectionScroll)

            section.scrollIntoView({behavior: 'smooth'})
        })
    });
}
