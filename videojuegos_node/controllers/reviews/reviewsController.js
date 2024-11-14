import { Videojuego, Plataforma, Videojuego_plataformas } from "../../model/modelos.js"

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

const renderizarVideojuego = async (req, res) => {
    const consola = req.params.consola;
    const titulo = req.params.titulo;  // Campo en la tabla `Plataforma` para el filtro
    const valores = [consola, titulo];
    try {
        const juego = await consultaVideojuego(valores);
        res.render("consola/videojuego", {
            juego: juego,
            consola: consola
        });

    } catch (error) {
        console.error('Error en la consulta:', error);
        res.status(500).json({ error: 'Error al cargar la reseña del videojuego' });
    }
};

export { renderizarVideo };
