import db from "../config/db.js"
import {videojuego, plataforma, videojuego_plataformas} from "../model/index.js"
// Request -> Peticion Usuario (req)
// Resource -> Resultado de la Peticion (res)

async function consulta(condicion, valores) {
    let juegos = await videojuego.findAll({
        attributes: ['id_videojuego', 'titulo', 'imagen', 'trailer'],  // Atributos que deseas obtener de la tabla `videojuego`
        include: [
            {
                model: videojuego_plataformas,
                attributes: ['precio'],  // Atributo específico de `videojuego_plataforma`
                required: true,  // Cambia a INNER JOIN
                include: [
                    {
                        model: plataforma,
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


const accionMostrarJuegos = async (req, res) => {
    const consola = req.params.consola;
    const condicion = 'nombre';  // Campo en la tabla `Plataforma` para el filtro
    const valores = [consola];

    try {
        const juegos = await consulta(condicion, valores);
        res.json(juegos);
    } catch (error) {
        console.error('Error en la consulta:', error);
        res.status(500).json({ error: 'Error al cargar los videojuegos' });
    }
};


const inicio = async (req, res) => {
    res.render("inicio");
};

// Exportaciones de funciones
export {
    inicio,
    accionMostrarJuegos,
};
