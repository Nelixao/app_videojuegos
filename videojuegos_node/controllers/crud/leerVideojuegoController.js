import videojuegos, { Videojuego } from "../../model/videojuego.js";
import videojuegos_plataformas, { Videojuego_plataformas } from "../../model/videojuego_plataforma.js";

const leerVideojuego = async (req, res) => {
  const videojuegos = await Videojuego.findAll({
    include: {
      model: Videojuego_plataformas
    },
    raw: true,
    nest: true
  });
  res.render("admin/leerVideojuego", {
    videojuego: videojuegos
  });
};

export { leerVideojuego };
