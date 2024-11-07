import videojuegos from "../../model/videojuegos.js";
import videojuegos_plataformas from "../../model/videojuegos_plataformas.js";

const actualizarVideojuego = (req, res) => {
  res.render("admin/actualizarVideojuego");
  console.log("se renderizo");
};

export { actualizarVideojuego };
