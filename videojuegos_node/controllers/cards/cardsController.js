
import { Videojuego, Plataforma, Videojuego_plataformas } from "../../model/modelos.js"
import { Op } from "sequelize";

async function consulta( valores) {
    let juegos = await Videojuego.findAll({
        attributes: ['id_videojuego', 'titulo', 'imagen', 'trailer'],  // Atributos que deseas obtener de la tabla `videojuego`
        include: [
            {
                model: Videojuego_plataformas,
                attributes: ['precio'],  // Atributo específico de `videojuego_plataforma`
                required: true,  // Cambia a INNER JOIN
                include: [
                    {
                        model: Plataforma,
                        attributes: ['nombre'],  // Atributo específico de `plataforma`
                        required: true,  // Cambia a INNER JOIN
                        where: { nombre: valores[0] }  // Filtra por el nombre de la consola/plataforma
                    }
                ]
            }
        ]
    });
    return juegos;
}

async function consultaVideojuego(valores) {
    let juego = await Videojuego.findOne({
        attributes: ['id_videojuego', 'titulo', 'imagen', 'trailer'],
        include: [
            {
                model: Videojuego_plataformas,
                attributes: ['precio'],
                required: true, // Esto asegura un INNER JOIN
                include: [
                    {
                        model: Plataforma,
                        attributes: ['nombre'],
                        required: true, // Esto también realiza un INNER JOIN con Plataforma
                        where: { nombre: valores[0] }
                    }
                ]
            }
        ],
        where: {
            // Condiciones específicas para el modelo principal `Videojuego`
            id_videojuego: valores[1] // Ejemplo de filtro
        }
    });
    return juego;
}


const renderizarCardVideojuego = async (req, res) => {
    const consola = req.params.consola;
    const valores = [consola];
    try {
        const juegos = await consulta(valores);
        res.render("consola/cardVideojuego", {
            juegos: juegos,
            consola: consola,
            showVideo: false,
        })
    } catch (error) {
        console.error('Error en la consulta:', error);
        res.status(500).json({ error: 'Error al cargar los videojuegos' });
    }
};

const renderizarVideojuego = async (req, res) => {
    const consola = req.params.consola;
    const titulo = req.params.titulo;  // Campo en la tabla `Plataforma` para el filtro
    const valores = [consola, titulo];
    try {
        const juego = await consultaVideojuego(valores);
        const juegos = await consulta(valores);
        res.render("consola/cardVideojuego", {
            juego: juego,
            juegos: juegos,
            consola: consola,
            showVideo: true,
        });

    } catch (error) {
        console.error('Error en la consulta:', error);
        res.status(500).json({ error: 'Error al cargar la reseña del videojuego' });
    }
};


export {
    renderizarCardVideojuego,
    renderizarVideojuego,
}
