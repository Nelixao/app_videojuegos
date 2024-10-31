// Escuchar los eventos de clic en los botones de consola
document.querySelector('#xbox').addEventListener('click', () => cargarJuegosPorConsola('Xbox'));
document.querySelector('#playstation').addEventListener('click', () => cargarJuegosPorConsola('PlayStation'));
document.querySelector('#nintendo').addEventListener('click', () => cargarJuegosPorConsola('Nintendo'));


// Función para hacer la solicitud AJAX y obtener los videojuegos de una consola
function borrar(){
    const contenedor = document.querySelector('.recomendacion-header');
    contenedor.innerHTML = '';  // Limpiar el contenedor
}
function construir(data, contenedor){

    if (data.length > 0) {
        data.forEach(juego => {
            precio = juego.videojuego_plataformas[0].precio

            contenedor.innerHTML += `
                <div class="card">
                    <div class="card-img">
                        <img src="${juego.imagen}" alt="${juego.titulo} id="portada">
                    </div>
                    <div class="card-info">
                        <h4 class="card-title" id="titulo">${juego.titulo}</h4>
                        <img src="image/icons/estrellas.png" alt="estrellas" class="estrellas">
                        <p class="precio" id="precio">$ ${precio}</p>
                        <a href="#" class="button agregar-carrito" data-id="${juego.id_videojuego}">Añadir al carrito</a>
                        <a href="#" class="button mostrar-video" data-link="${juego.trailer}">Review</a>
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
            const contenedor = document.querySelector('.opciones');
            contenedor.innerHTML = '';  // Limpiar el contenedor
            construir(data, contenedor)
        })
        .catch(error => console.error('Error:', error));
}






