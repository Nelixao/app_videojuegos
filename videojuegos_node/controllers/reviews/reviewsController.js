import { Videojuego } from "../../model/modelos.js";

const renderizarVideo = async (req, res) => {
    const titulo = req.params.titulo;
    try {
        const juego = await Videojuego.findOne({ where: { titulo } });

        if (juego) {
            res.render("review/video", { 
                juego });
        } else {
            res.status(404).send("Reseña no encontrada para este videojuego.");
        }
    } catch (error) {
        console.error("Error al buscar el videojuego:", error);
        res.status(500).send("Error al cargar la reseña.");
    }
};

export { renderizarVideo };
