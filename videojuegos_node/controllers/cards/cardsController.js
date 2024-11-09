
import {Videojuego, Plataforma, Videojuego_plataformas} from "../../model/modelos.js"

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

const accionMostrarResena = async (req, res) => {
    const consola = req.params.consola;
    const titulo = req.params.titulo;
    const condicion = 'nombre';  // Campo en la tabla `Plataforma` para el filtro
    const valores = [consola];
    try {
        const juegos = await consulta(condicion, valores);
        const review = await Videojuego.findOne({ where: { titulo } });
        res.render("consola/cardVideojuego", {
            juegos: juegos,
            review: review,
            showVideo: true,
            consola: consola
        });

    } catch (error) {
        console.error('Error en la consulta:', error);
        res.status(500).json({ error: 'Error al cargar la reseña del videojuego' });
    }
};


export{
    renderizarCardVideojuego,
    accionMostrarResena,
}
