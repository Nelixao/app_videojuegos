// Elementos HTML
const contenedorVideo = document.querySelector('.section-video');
const listaJuegos = document.querySelector('.section-opciones');
const eliminarVideo = document.querySelector('#up')

// Enlaces de videos
const linkVideos = {
    1: "https://www.youtube.com/embed/8X2kIfS6fb8?si=szMiLdO-r_ZXkmFT", //ciber
    2: "https://www.youtube.com/embed/n7Te5fcnrUA?si=RgRcW9zQEs_69eng", //gears
    3: "https://www.youtube.com/embed/kjN1eWhzPeA?si=GF-lIpUlCFAFe-0h", //Halo
    4: "https://www.youtube.com/embed/G50rQ6SRCvQ?si=LfDwL9VLP-s4_6Kf", //injustice
    5: "https://www.youtube.com/embed/gmA6MrX81z4?si=l7R05a4r566w--N8", //red
    6: "https://www.youtube.com/embed/K_03kFqWfqs?si=F8QpjYVOtNiHZt3K", //elden
    7: "https://www.youtube.com/embed/F3jePdO9_jc?si=g8TxxtOtzVt8omL0", //gow
    8: "https://www.youtube.com/embed/hvoD7ehZPcM?si=p-SbAnRvnmYoIv7f", //gta
    9: "https://www.youtube.com/embed/E69tKrfEQag?si=5e8NerwJ_X1244dM", //resident
    10: "https://www.youtube.com/embed/-llaUBqovHw?si=9M-wQPtxXmMQx9mV", //tlou
    11: "https://www.youtube.com/embed/NN-9SQXoi50?si=86YzOUjjwhTLKDNg", //cup
    12: "https://www.youtube.com/embed/6wTFy-pJFMI?si=7H72S0Y44b-PEHh1", //mb
    13: "https://www.youtube.com/embed/GUYDXVDLmns?si=QdQBt2xcSGKvVWyf", //splat
    14: "https://www.youtube.com/embed/WShCN-AYHqA?si=GOaDonn5yYP7OOXe", //ssb
    15: "https://www.youtube.com/embed/sjxLF4IYnJc?si=nWDSxREiLeNb8Lve", //tlz
};

// Inicializa los eventos
registrarListener();

function registrarListener(){
    // Delegación de eventos para botones "Review"
    listaJuegos.addEventListener('click', function(evt) {
        if (evt.target.classList.contains('mostrar-video')) {
            seleccionarVideo(evt);
        }
    });
}

function seleccionarVideo(evt){
    evt.preventDefault(); // Previene el comportamiento por defecto del enlace
    const boton = evt.target; // El botón que ha sido clickeado
    const gameID = boton.getAttribute('data-id'); // Obtener el data-id del botón
    insertarVideo(gameID); // Insertar el video correspondiente
}

function insertarVideo(id){
    limpiarSection(); // Limpiar la sección de video
    const video = document.createElement('div');
    console.log(id);
    video.innerHTML = `
        <iframe width=85% height=600px  src=${linkVideos[id]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <a href="#" id="up" class="button">Volver al inicio</a>
    `;
    contenedorVideo.appendChild(video); // Insertar el iframe del video
    contenedorVideo.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function limpiarSection(){
    while(contenedorVideo.firstChild){
        contenedorVideo.removeChild(contenedorVideo.firstChild); // Elimina el contenido previo
    }
}
