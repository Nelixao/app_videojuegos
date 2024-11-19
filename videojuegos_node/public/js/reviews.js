

// Elementos HTML
const contenedorVideo = document.querySelector('.section-video');
const contenedorOpciones = document.querySelector('.nav-bar');

// Inicializa los eventos
registrarListener();

function registrarListener(){
    // Delegación de eventos para botones "Review"
    contenedorVideo.addEventListener('click', function(evt) {
        if (evt.target.classList.contains('up')) {
            contenedorOpciones.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });

    document.addEventListener("DOMContentLoaded", function() {
        if (contenedorVideo) {
            contenedorVideo.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
}
