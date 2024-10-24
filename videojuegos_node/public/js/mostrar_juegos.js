// const botonX = document.querySelector('#xbox');
// const botonP = document.querySelector('#playstation')
// const botonN = document.querySelector('#nintendo')
// const sectionX = document.querySelector('.opciones-xbox')
// const sectionP = document.querySelector('.opciones-play')
// const sectionN = document.querySelector('.opciones-nintendo')
// const recomendacion = document.querySelector('.opciones-recomendacion')

// registrarListener()

// function registrarListener(){
//     botonX.addEventListener('click', mostrarX)
//     botonP.addEventListener('click', mostrarP)
//     botonN.addEventListener('click', mostrarN)
// }

// function mostrar(section){
//     if(section.classList.contains('oculto')){
//         section.classList.remove('oculto')
//     }
// }

// function ocultar(sections){
//     sections.forEach(sect => {
//         if(!(sect.classList.contains('oculto'))){
//             sect.classList.add('oculto')
//         }
//     });

// }

// function mostrarX(){
//     mostrar(sectionX)
//     ocultar([sectionP,sectionN,recomendacion])
// }

// function mostrarP(){
//     mostrar(sectionP)
//     ocultar([sectionX,sectionN,recomendacion])
// }

// function mostrarN(){
//     mostrar(sectionN)
//     ocultar([sectionP,sectionX,recomendacion])
// }

// Función para hacer la solicitud AJAX y obtener los videojuegos de una consola
function cargarJuegosPorConsola(consola) {
    fetch(`/${consola}`)  // Llama a la ruta del backend
        .then(response => response.json())
        .then(data => {
            const contenedor = document.querySelector('.section-opciones');
            contenedor.innerHTML = '';  // Limpiar el contenedor
            if (data.length > 0) {
                data.forEach(juego => {
                    contenedor.innerHTML += `
                        <div class="card">
                            <div class="card-img">
                                <img src="${juego.imagen}" alt="${juego.titulo}">
                            </div>
                            <div class="card-info">
                                <h4 class="card-title">${juego.titulo}</h4>
                                <p class="precio">${juego.precio}</p>
                                <a href="#" class="button agregar-carrito" data-id="${juego['data-id']}">Añadir al carrito</a>
                                <a href="#" class="button mostrar-video" data-id="${juego['data-id']}">Review</a>
                            </div>
                        </div>
                    `;
                });
            } else {
                contenedor.innerHTML = `<p>No hay videojuegos disponibles para esta consola.</p>`;
            }
        })
        .catch(error => console.error('Error:', error));
}

// Escuchar los eventos de clic en los botones de consola
document.querySelector('#xbox').addEventListener('click', () => cargarJuegosPorConsola('Xbox'));
document.querySelector('#playstation').addEventListener('click', () => cargarJuegosPorConsola('PlayStation'));
document.querySelector('#nintendo').addEventListener('click', () => cargarJuegosPorConsola('Nintendo'));
