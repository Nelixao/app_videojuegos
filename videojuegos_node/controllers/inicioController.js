import db from "../config/db.js"
import videojuegos from "../model/videojuegos.js"
// Request -> Peticion Usuario (req)
// Resource -> Resultado de la Peticion (res)

async function consulta(consola){
    let juegos = await db.query(
        "SELECT data_id, titulo, precio, imagen, video_link FROM videojuegos WHERE consola = ?",
        {
            replacements: [consola],
            model: videojuegos,
            mapToModel: true,
        }
    );

    return juegos;
}

const accionMostrarJuegos = async (req, res) => {
    const consola = req.params.consola;
    try {
        const juegos = await consulta(consola);
        res.json(juegos);  // Devuelve los videojuegos en formato JSON
        console.log(juegos);
    } catch (error) {
        res.status(500).json({ error: 'Error al cargar los videojuegos' });
    }
};



const inicio = (req, res) => {
    res.render("inicio");
}

// Esportaciones de funciones
export{
    inicio,
    accionMostrarJuegos
};