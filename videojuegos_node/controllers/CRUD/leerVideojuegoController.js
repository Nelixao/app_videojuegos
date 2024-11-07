import videojuegos from "../../model/videojuegos.js";
import videojuegos_plataformas from "../../model/videojuegos_plataformas.js";

const leerVideojuego = (req, res) => {
  res.render("admin/leerVideojuego");
  console.log("se renderizo");
};

export { leerVideojuego };
