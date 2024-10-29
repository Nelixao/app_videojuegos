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
            <img src="image/icons/estrellas.png" alt="estrellas" class="estrellas">
            <p class="precio">${section.price}</p>
            <a class="button agregar-carrito" data-id="${section['data-id']}">Añadir al carrito</a>
            <a href="#" class="button mostrar-video" data-id="${section['data-id']}">Review</a>
        </div>
    </div>
    `;
}

function mostrarX(){
    contenedor.innerHTML = ''
    opcionesX.forEach(element => {
        contenedor.innerHTML += mostrar(element);
    });
}

function mostrarP(){
    contenedor.innerHTML = ''

    opcionesP.forEach(element => {
        contenedor.innerHTML += mostrar(element);
    });
}

function mostrarN(){
    contenedor.innerHTML = ''

    opcionesN.forEach(element => {
        contenedor.innerHTML += mostrar(element);
    });
}

opcionesX = [
    {
        "image": "image/xbox_games/ciber.jpg",
        "title": "Cyberpunk 2077",
        "price": "$499.00",
        "data-id": "1"
    },
    {
        "image": "image/xbox_games/gears.jpg",
        "title": "Gears of War 3",
        "price": "$399.00",
        "data-id": "2"
    },
    {
        "image": "image/xbox_games/halo.jpg",
        "title": "Halo 2",
        "price": "$299.00",
        "data-id": "3"
    },
    {
        "image": "image/xbox_games/injustice.jpg",
        "title": "Injustice 2",
        "price": "$399.00",
        "data-id": "4"
    },
    {
        "image": "image/xbox_games/doom.png",
        "title": "DOOM ETERNAL",
        "price": "$499.00",
        "data-id": "17"
    },
    {
        "image": "image/xbox_games/forza.png",
        "title": "Forza Horizon 5",
        "price": "$499.00",
        "data-id": "5"
    },
    {
        "image": "image/xbox_games/hellblade.jpg",
        "title": "Hellblade",
        "price": "$499.00",
        "data-id": "16"
    },
    {
        "image": "image/xbox_games/red.jpg",
        "title": "Red Dead Redemption 2",
        "price": "$499.00",
        "data-id": "18"
    }
]

opcionesP = [
    {
        "image": "image/play_games/elden.jpg",
        "title": "Elden Ring",
        "price": "$499.00",
        "data-id": "6"
    },
    {
        "image": "image/play_games/gow.jpg",
        "title": "God of War Ragnarok",
        "price": "$499.00",
        "data-id": "7"
    },
    {
        "image": "image/play_games/gta.jpg",
        "title": "GTA V",
        "price": "$499.00",
        "data-id": "8"
    },
    {
        "image": "image/play_games/resident.jpg",
        "title": "Resident Evil 4",
        "price": "$499.00",
        "data-id": "9"
    },
    {
        "image": "image/play_games/tlou.jpg",
        "title": "The Last of Us 2",
        "price": "$499.00",
        "data-id": "10"
    },
    {
        "image": "image/play_games/spiderman.png",
        "title": "SPIDER-MAN 2",
        "price": "$499.00",
        "data-id": "19"
    },
    {
        "image": "image/play_games/horizon.png",
        "title": "Horizon Forbidden West",
        "price": "$499.00",
        "data-id": "20"
    },
    {
        "image": "image/play_games/ff.png",
        "title": "Final Fantasy 7",
        "price": "$499.00",
        "data-id": "21"
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
        "image": "image/nintendo_games/supermario.png",
        "title": "Super Mario Bros",
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
        "image": "image/nintendo_games/smash.png",
        "title": "Super Smash Bros",
        "price": "$499.00",
        "data-id": "14"
    },
    {
        "image": "image/nintendo_games/zelda.jpg",
        "title": "The Legend of Zelda TOK",
        "price": "$499.00",
        "data-id": "15"
    },
    {
        "image": "image/nintendo_games/mk8.png",
        "title": "Mario Kart 8 Deluxe",
        "price": "$499.00",
        "data-id": "22"
    },
    {
        "image": "image/nintendo_games/metroid.png",
        "title": "Metroid Dread",
        "price": "$499.00",
        "data-id": "23"
    },
    {
        "image": "image/nintendo_games/breath.png",
        "title": "The Legend of Zelda BOTW",
        "price": "$499.00",
        "data-id": "24"
    }
]
