// Request -> Petición Usuario (req)
// Resource -> Resultado de la Petición (res)
import { Videojuego, Plataforma, Videojuego_plataformas } from "../model/modelos.js";

const inicio = async (req, res) => {
    try {
        const juegos = await buscarJuegos(); // Aseguramos que esperar los juegos
        
        res.render("inicio", {
            juegos: juegos, // Pasamos los juegos a la vista
        });
    } catch (error) {
        console.error("Error en inicio:", error);
        res.status(500).send("Error al obtener los juegos");
    }
};

function getRandomDecimal(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); // Redondeamos a entero
}

function getRandomNombre() {
    const items = ["Xbox", "PlayStation", "Nintendo"];
    return items[Math.floor(Math.random() * items.length)];
}

async function buscarJuegos() {
    const juegos = []; // Inicializamos una lista para acumular resultados
    const juegosPorPlataforma = {}; // Objeto para llevar el control de los juegos por plataforma

    while (juegos.length < 4) {
        const id_aleatorio = getRandomDecimal(1, 24);
        const plataforma_aleatorio = getRandomNombre();

        // Obtener el juego basado en la plataforma y el id aleatorio
        const juego = await consultaVideojuego([plataforma_aleatorio, id_aleatorio]);
        
        if (juego) {
            // Verificar si ya hemos agregado este juego para la plataforma seleccionada
            const juegoTitulo = juego.titulo;
            if (!juegosPorPlataforma[plataforma_aleatorio]) {
                juegosPorPlataforma[plataforma_aleatorio] = new Set(); // Inicializamos un conjunto para esa plataforma
            }

            // Si el juego no ha sido agregado aún en esta plataforma, lo agregamos
            if (!juegosPorPlataforma[plataforma_aleatorio].has(juegoTitulo)) {
                juegos.push(juego); // Agregar el juego
                juegosPorPlataforma[plataforma_aleatorio].add(juegoTitulo); // Marcar el juego como agregado en esa plataforma
            }
        }
    }
    return juegos;
}


async function consultaVideojuego(valores) {
    try {
        const [plataforma, id] = valores; // Desestructuramos el array `valores`
        const juego = await Videojuego.findOne({
            attributes: ["id_videojuego", "titulo", "imagen", "trailer"],
            include: [
                {
                    model: Videojuego_plataformas,
                    attributes: ["precio"],
                    required: true, // Esto asegura un INNER JOIN
                    include: [
                        {
                            model: Plataforma,
                            attributes: ["nombre"],
                            required: true, // Esto también realiza un INNER JOIN con Plataforma
                            where: { nombre: plataforma },
                        },
                    ],
                },
            ],
            where: {
                id_videojuego: id, // Condición específica para el modelo principal `Videojuego`
            },
        });
        return juego;
    } catch (error) {
        console.error("Error en consultaVideojuego:", error);
        return null; // Devolvemos `null` en caso de error
    }
}

// Exportaciones de funciones
export {
    inicio
};
