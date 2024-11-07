import videojuegos from "../../model/videojuego.js";
import videojuegos_plataformas from "../../model/videojuego_plataforma.js";

const actualizarVideojuego = (req, res) => {
  res.render("admin/actualizarVideojuego");
  console.log("se renderizo");
};

export { actualizarVideojuego };
