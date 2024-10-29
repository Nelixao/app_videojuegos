const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoB = document.querySelector('#vaciar-carrito');
const listaLibros = document.querySelector('#opciones')
const contenedorTotal = document.querySelector('#total-carrito')
let itemsCarrito = []
let totalCarrito = 0

registrarListener();

function registrarListener() {
    listaLibros.addEventListener('click', agregarLibro);

    carrito.addEventListener('click', eliminarLibro);

    vaciarCarritoB.addEventListener('click', () => {
        itemsCarrito = [];
        totalCarrito = 0
        HtmlCarrito();
    });
}

function eliminarLibro(evt) {
    evt.preventDefault();
    if (evt.target.classList.contains('borrar-curso')) {
        const libroId = evt.target.getAttribute('data-id');
        const libroAEliminar = itemsCarrito.find(libro => libro.id === libroId);

        if (libroAEliminar) {
            let precio = libroAEliminar.precio.replace('$', '');
            totalCarrito = totalCarrito - (parseFloat(precio) * libroAEliminar.cantidad);
            itemsCarrito = itemsCarrito.filter(libro => libro.id != libroId);
            HtmlCarrito();
        }
    }
}

function leerLibro(libro) {
    const libroInfo = {
        imagen: libro.querySelector("img").src,
        nombre: libro.querySelector("h4").textContent,
        precio: libro.querySelector("p").textContent,
        id: libro.querySelector("a").getAttribute("data-id"),
        cantidad: 1,
    };

    const existe = itemsCarrito.some(libro => libro.id === libroInfo.id);

    if (existe) {
        const items = itemsCarrito.map(libro => {
            if (libro.id === libroInfo.id) {
                libro.cantidad++;
                return libro;
            } else {
                return libro;
            }
        });
        itemsCarrito = [...items];
    } else {
        itemsCarrito = [...itemsCarrito, libroInfo];
    }

    let precio = libroInfo['precio'].replace('$', '');
    totalCarrito = totalCarrito + parseFloat(precio);

    console.log(itemsCarrito);
    HtmlCarrito();
}

function agregarLibro(evt) {
    evt.preventDefault();
    if (evt.target.classList.contains('agregar-carrito')) {
        const libroSeleccionado = evt.target.parentElement.parentElement;
        leerLibro(libroSeleccionado);
    }
}

function HtmlCarrito() {
    limpiarHTML();
    itemsCarrito.forEach(libros => {
        const { imagen, nombre, precio, cantidad, id } = libros;
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

function limpiarHTML() {
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}