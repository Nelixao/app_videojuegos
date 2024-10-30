// Función para hacer la solicitud AJAX y obtener los videojuegos de una consola
function borrar(){
    const contenedor = document.querySelector('.recomendacion-header');
    contenedor.innerHTML = '';  // Limpiar el contenedor
}
function construir(data, contenedor){

            if (data.length > 0) {
                data.forEach(juego => {
                    contenedor.innerHTML += `
                        <div class="card">
                            <div class="card-img">
                                <img src="${juego.imagen}" alt="${juego.titulo}">
                            </div>
                            <div class="card-info">
                                <h4 class="card-title">${juego.titulo}</h4>
                                <img src="image/icons/estrellas.png" alt="estrellas" class="estrellas>
                                <p class="precio">$ ${juego.precio}</p>
                                <a href="#" class="button agregar-carrito" data-id="${juego.data_id}">Añadir al carrito</a>
                                <a href="#" class="button mostrar-video" data-link="${juego.video_link}">Review</a>
                            </div>
                        </div>
                    `;
                });
            } else {
                contenedor.innerHTML = `<p>No hay videojuegos disponibles para esta consola.</p>`;
            }
}

function cargarJuegosPorConsola(consola) {
    fetch(`/consola/${consola}`)  // Llama a la ruta del backend
        .then(response => response.json())
        .then(data => {
            borrar()
            const contenedor = document.querySelector('.section-opciones');
            contenedor.innerHTML = '';  // Limpiar el contenedor
            construir(data, contenedor)
        })
        .catch(error => console.error('Error:', error));
}

function cargarJuegosPorID(id) {
    fetch(`/predeterminado/${id}`)  // Llama a la ruta del backend
        .then(response => response.json())
        .then(data => {
            const contenedor = document.querySelector('.section-opciones');
            //const primerosTres = data.slice(0, 3);  // Selecciona solo los primeros 3 elementos
            construir(data, contenedor);
        })
        .catch(error => console.error('Error:', error));
}


// Escuchar los eventos de clic en los botones de consola
document.querySelector('#xbox').addEventListener('click', () => cargarJuegosPorConsola('Xbox'));
document.querySelector('#playstation').addEventListener('click', () => cargarJuegosPorConsola('PlayStation'));
document.querySelector('#nintendo').addEventListener('click', () => cargarJuegosPorConsola('Nintendo'));

document.addEventListener("DOMContentLoaded", () => {
    const numeroAleatorio = Math.floor(Math.random() * 13) + 1;
    cargarJuegosPorID(numeroAleatorio);  // Llama a la función con el número aleatorio
});



