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
    5: "https://www.youtube.com/embed/Rv7xLt5yNsM?si=ne2ctdlrunsM7x61", //forza
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
    16: "https://www.youtube.com/embed/3VYGOkMnGCE?si=_fILpPidejFQ2VGQ", //hellblade
    17: "https://www.youtube.com/embed/-fsz6b3IBJY?si=bcGiZMPu8nUKGIjr", // doom
    18: "https://www.youtube.com/embed/gmA6MrX81z4?si=l7R05a4r566w--N8", //red
    19: "https://www.youtube.com/embed/nq1M_Wc4FIc?si=05Xiu6G5vTDo2WuQ", //spiderman
    20: "https://www.youtube.com/embed/InoAU5wUFcE?si=FVloeXmRYBAzHEZu", //horizon
    21: "https://www.youtube.com/embed/cfeT1pLQHH8?si=Eoaf1x__qTsB_-Iq", //ff
    22: "https://www.youtube.com/embed/tKlRN2YpxRE?si=oz6OQL-C0fwO7s1E", //mk8
    23: "https://www.youtube.com/embed/bbSdDDp9CNQ?si=tiQF8ydydOkx7CHj", //metroid
    24: "https://www.youtube.com/embed/KzQRiYqt6LY?si=kaL5WyaymU2JJyxy", //zelda
};

registrarListener();

function registrarListener() {
    listaJuegos.addEventListener('click', function (evt) {
        if (evt.target.classList.contains('mostrar-video')) {
            seleccionarVideo(evt);
        }
    });
}

function seleccionarVideo(evt) {
    evt.preventDefault();
    const boton = evt.target;
    const gameID = boton.getAttribute('data-id');
    insertarVideo(gameID);
}

function insertarVideo(id) {
    limpiarSection();
    const video = document.createElement('div');
    console.log(id);
    video.innerHTML = `
        <iframe width=85% height=600px  src=${linkVideos[id]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <div class="boton-chico">
            <a href="#" id="up" class="button">Volver al inicio</a>
        </div>
    `;
    contenedorVideo.appendChild(video);
    contenedorVideo.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function limpiarSection() {
    while (contenedorVideo.firstChild) {
        contenedorVideo.removeChild(contenedorVideo.firstChild);
    }
}
