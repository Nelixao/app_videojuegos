const botonX = document.querySelector('#xbox');
const botonP = document.querySelector('#playstation')
const botonN = document.querySelector('#nintendo')
const sectionX = document.querySelector('.opciones-xbox')
const sectionP = document.querySelector('.opciones-play')
const sectionN = document.querySelector('.opciones-nintendo')
const recomendacion = document.querySelector('.opciones-recomendacion')

registrarListener()

function registrarListener(){
    botonX.addEventListener('click', mostrarX)
    botonP.addEventListener('click', mostrarP)
    botonN.addEventListener('click', mostrarN)
}

function mostrar(section){
    if(section.classList.contains('oculto')){
        section.classList.remove('oculto')
    }
}

function ocultar(sections){
    sections.forEach(sect => {
        if(!(sect.classList.contains('oculto'))){
            sect.classList.add('oculto')
        }
    });

}

function mostrarX(){
    mostrar(sectionX)
    ocultar([sectionP,sectionN,recomendacion])
}

function mostrarP(){
    mostrar(sectionP)
    ocultar([sectionX,sectionN,recomendacion])
}

function mostrarN(){
    mostrar(sectionN)
    ocultar([sectionP,sectionX,recomendacion])
}