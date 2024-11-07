import videojuegos from "../../model/videojuego.js";
import videojuegos_plataformas from "../../model/videojuego_plataforma.js";

const eliminarVideojuego = (req, res) => {
  res.render("admin/eliminarVideojuego");
  console.log("se renderizo");
};

export { eliminarVideojuego };
