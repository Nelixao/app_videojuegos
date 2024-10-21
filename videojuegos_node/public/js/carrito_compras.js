const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody'); //id en la tabla
const vaciarCarritoB = document.querySelector('#vaciar-carrito'); //id en el boton vaciar carrito
const listaLibros = document.querySelector('#opciones') //div que contiene los libros
const contenedorTotal = document.querySelector('#total-carrito')
let itemsCarrito = []
let totalCarrito = 0

registrarListener();

function registrarListener(){
    // Escuchar el evento de click para agregar libro
    listaLibros.addEventListener('click', agregarLibro);

    // Eliminar libro
    carrito.addEventListener('click', eliminarLibro); // corregido el typo

    // Vaciar carrito
    vaciarCarritoB.addEventListener('click', () => {
        itemsCarrito = [];
        totalCarrito = 0
        HtmlCarrito();
    });
}

// Eliminar libro
function eliminarLibro(evt){
    evt.preventDefault();
    if(evt.target.classList.contains('borrar-curso')){
        const libroId = evt.target.getAttribute('data-id');
        const libroAEliminar = itemsCarrito.find(libro => libro.id === libroId);
        
        if (libroAEliminar) {
            // Convertir el precio a número y eliminar el símbolo de $
            let precio = libroAEliminar.precio.replace('$', '');
            totalCarrito = totalCarrito - (parseFloat(precio) * libroAEliminar.cantidad);
            
            // Eliminar libro del carrito
            itemsCarrito = itemsCarrito.filter(libro => libro.id != libroId);
            
            // Actualizar el HTML
            HtmlCarrito();
        }
    }
}


// Leer el contenido del libro
function leerLibro(libro){
    const libroInfo = {
        imagen: libro.querySelector("img").src,
        nombre: libro.querySelector("h4").textContent,
        precio: libro.querySelector("p").textContent,
        id: libro.querySelector("a").getAttribute("data-id"), // corregido typo
        cantidad: 1,
    };

    const existe = itemsCarrito.some(libro => libro.id === libroInfo.id);

    if(existe){
        const items = itemsCarrito.map(libro => {
            if(libro.id === libroInfo.id){
                libro.cantidad++;
                return libro; // actualiza
            } else {
                return libro; // sin duplicados
            }
        });
        itemsCarrito = [...items];
    } else {
        itemsCarrito = [...itemsCarrito, libroInfo];
    }
    // Hacemos una copia y lo agregamos al carrito

    let precio = libroInfo['precio'].replace('$', '');
    totalCarrito = totalCarrito + parseFloat(precio);

    console.log(itemsCarrito);
    HtmlCarrito();
}

// Agregar libro al carrito
function agregarLibro(evt){
    evt.preventDefault();
    if(evt.target.classList.contains('agregar-carrito')){
        const libroSeleccionado = evt.target.parentElement.parentElement;
        leerLibro(libroSeleccionado);
    }
}

// Mostrar el carrito de compra en HTML
function HtmlCarrito(){
    // Limpiar HTML previo
    limpiarHTML();
    itemsCarrito.forEach(libros => {
        const {imagen, nombre, precio, cantidad, id} = libros;
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td class="td-img"><img src="${imagen}" width="75px"></td>
            <td>${nombre}</td>
            <td>${precio}</td>
            <td id="td-cantidad">${cantidad}</td>
            <td id="td-borrar"><a id="x" href="#" class="borrar-curso button" data-id="${id}">x</a></td>`;
        contenedorCarrito.appendChild(fila);
    });
    contenedorTotal.innerText = `$${totalCarrito}`
}

// Limpiar el HTML del carrito
function limpiarHTML(){
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}