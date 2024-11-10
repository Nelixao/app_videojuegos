
import {Videojuego, Plataforma, Videojuego_plataformas} from "../../model/modelos.js"
import { Op } from "sequelize";

async function consulta(condicion, valores) {
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
                        where: { [condicion]: valores[0] }  // Filtra por el nombre de la consola/plataforma
                    }
                ]
            }
        ]
    });
    return juegos;
}

async function consultaVideojuego(condicion, valores) {
    let juego = await Videojuego.findAll({
        attributes: ['id_videojuego', 'titulo', 'imagen', 'trailer'],  // Atributos que deseas obtener de la tabla `videojuego`
        include: [
            {
                model: Videojuego_plataformas,
                attributes: ['precio'],  // Atributo específico de `videojuego_plataforma`
                required: true,  // Cambia a INNER JOIN
                where: {id_videojuego: valores[1]},
                include: [
                    {
                        model: Plataforma,
                        attributes: ['nombre'],  // Atributo específico de `plataforma`
                        required: true,  // Cambia a INNER JOIN
                        where: {[condicion]: valores[0] }
                    }
                ]
            }
        ]
    });
    return juego;
}


const renderizarCardVideojuego = async (req, res) => {
    const consola = req.params.consola;
    const condicion = 'nombre';  // Campo en la tabla `Plataforma` para el filtro
    const valores = [consola];
    try {
        const juegos = await consulta(condicion, valores);
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
    const titulo = req.params.titulo;
    const condicion = 'nombre';  // Campo en la tabla `Plataforma` para el filtro
    const valores = [consola, titulo];
    try {
        const juego = await consultaVideojuego(condicion, valores);
        console.log("===========================");
        console.log(juego);
        res.render("consola/videojuego", {
            juego: juego,
            consola: consola
        });

    } catch (error) {
        console.error('Error en la consulta:', error);
        res.status(500).json({ error: 'Error al cargar la reseña del videojuego' });
    }
};


export{
    renderizarCardVideojuego,
    renderizarVideojuego,
}
