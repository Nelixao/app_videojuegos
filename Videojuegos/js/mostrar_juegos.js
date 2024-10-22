const botonX = document.querySelector('#xbox');
const botonP = document.querySelector('#playstation')
const botonN = document.querySelector('#nintendo')
const contenedor = document.querySelector('#opciones')

registrarListener()

function registrarListener(){
    botonX.addEventListener('click', mostrarX)
    botonP.addEventListener('click', mostrarP)
    botonN.addEventListener('click', mostrarN)
}

function mostrar(section){
    return `
    <div class="card">
        <div class="card-img">
            <img src="${section.image}" alt="">
        </div>
        <div class="card-info">
            <h4 class="card-title">${section.title}</h4>
            <p class="precio">${section.price}</p>
            <a class="button agregar-carrito" data-id="${section['data-id']}">Añadir al carrito</a>
            <a href="#" class="button mostrar-video" data-id="${section['data-id']}">Review</a>
        </div>
    </div>
    `;
}

function mostrarX(){
    contenedor.innerHTML = ''
    contenedor.innerHTML = `
                    <div class="recomendacion-header">
                        <h4>Xbox: </h4>
                    </div>
                `
    opcionesX.forEach(element => {
        contenedor.innerHTML += mostrar(element);
    });
}

function mostrarP(){
    contenedor.innerHTML = ''
    contenedor.innerHTML = `
    <div class="recomendacion-header">
        <h4>Play Station: : </h4>
    </div>
`
    opcionesP.forEach(element => {
        contenedor.innerHTML += mostrar(element);
    });
}

function mostrarN(){
    contenedor.innerHTML = ''
    contenedor.innerHTML = `
    <div class="recomendacion-header">
        <h4>Nintendo: </h4>
    </div>
`
    opcionesN.forEach(element => {
        contenedor.innerHTML += mostrar(element);
    });
}

opcionesX = [
    {
        "image": "image/xbox_games/ciber.png",
        "title": "Cyberpunk 2077",
        "price": "$499.00",
        "data-id": "1"
    },
    {
        "image": "image/xbox_games/gears.jpeg",
        "title": "Gears of War 3",
        "price": "$399.00",
        "data-id": "2"
    },
    {
        "image": "image/xbox_games/halo.png",
        "title": "Halo 2",
        "price": "$299.00",
        "data-id": "3"
    },
    {
        "image": "image/xbox_games/injustice.png",
        "title": "Injustice 2",
        "price": "$399.00",
        "data-id": "4"
    },
    {
        "image": "image/xbox_games/red.jpeg",
        "title": "Red Dead Redemption 2",
        "price": "$499.00",
        "data-id": "5"
    }
]

opcionesP = [
    {
        "image": "image/play_games/elden.png",
        "title": "Elden Ring",
        "price": "$499.00",
        "data-id": "6"
    },
    {
        "image": "image/play_games/gow.jpeg",
        "title": "God of War Ragnarok",
        "price": "$499.00",
        "data-id": "7"
    },
    {
        "image": "image/play_games/gta.png",
        "title": "GTA V",
        "price": "$499.00",
        "data-id": "8"
    },
    {
        "image": "image/play_games/residnet.png",
        "title": "Resident Evil 4",
        "price": "$499.00",
        "data-id": "9"
    },
    {
        "image": "image/play_games/tlou.png",
        "title": "The Last of Us 2",
        "price": "$499.00",
        "data-id": "10"
    }
]

opcionesN = [
    {
        "image": "image/nintendo_games/cup.png",
        "title": "Cuphead",
        "price": "$399.00",
        "data-id": "11"
    },
    {
        "image": "image/nintendo_games/mb.png",
        "title": "Mario Bros",
        "price": "$399.00",
        "data-id": "12"
    },
    {
        "image": "image/nintendo_games/splatoon.png",
        "title": "Splatoon 3",
        "price": "$299.00",
        "data-id": "13"
    },
    {
        "image": "image/nintendo_games/ssb.png",
        "title": "Super Smash Bros",
        "price": "$499.00",
        "data-id": "14"
    },
    {
        "image": "image/nintendo_games/tlz.jpg",
        "title": "The Legend of Zelda",
        "price": "$499.00",
        "data-id": "15"
    }
]
