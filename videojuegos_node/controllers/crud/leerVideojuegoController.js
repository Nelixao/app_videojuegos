import videojuegos from "../../model/videojuego.js";
import videojuegos_plataformas from "../../model/videojuego_plataforma.js";

const leerVideojuego = (req, res) => {
  res.render("admin/leerVideojuego");
  console.log("se renderizo");
};

export { leerVideojuego };
