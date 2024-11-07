import videojuegos from "../../model/videojuegos.js";
import videojuegos_plataformas from "../../model/videojuegos_plataformas.js";

const eliminarVideojuego = (req, res) => {
  res.render("admin/eliminarVideojuego");
  console.log("se renderizo");
};

export { eliminarVideojuego };
