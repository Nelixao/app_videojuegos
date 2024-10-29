import db from "../config/db.js"
import videojuegos from "../model/videojuegos.js"
// Request -> Peticion Usuario (req)
// Resource -> Resultado de la Peticion (res)
async function consulta(condicion, valores = []) {
    let juegos = await db.query(
        `SELECT data_id, titulo, precio, imagen, video_link FROM videojuegos WHERE ${condicion}`,
        {
            replacements: valores,
            model: videojuegos,
            mapToModel: true,
        }
    );

    return juegos;
}

const accionMostrarPredeterminados = async (req, res) => {
    const condicion = `data_id % ? = 0`;
    const valores = [req.params.id];  // Usa el valor de id de forma segura como parámetro

    try {
        const juegos = await consulta(condicion, valores);
        res.json(juegos);  // Devuelve los videojuegos en formato JSON
        console.log(juegos);
    } catch (error) {
        res.status(500).json({ error: 'Error al cargar los videojuegos' });
    }
};

const accionMostrarJuegos = async (req, res) => {
    const condicion = `consola = ?`;
    const valores = [req.params.consola];  // Usa el valor de consola de forma segura como parámetro

    try {
        const juegos = await consulta(condicion, valores);
        res.json(juegos);  // Devuelve los videojuegos en formato JSON
        console.log(juegos);
    } catch (error) {
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
    accionMostrarPredeterminados
};
