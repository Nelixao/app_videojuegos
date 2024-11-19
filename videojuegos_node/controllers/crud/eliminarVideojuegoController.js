import { check, validationResult } from 'express-validator';
import videojuegos, { Videojuego } from "../../model/videojuego.js";
import videojuegos_plataformas, { Videojuego_plataformas } from "../../model/videojuego_plataforma.js";

const eliminarVideojuego = async (req, res) => {
  const videojuegos = await Videojuego.findAll({
    include: {
      model: Videojuego_plataformas
    },
    raw: true,
    nest: true
  });
  res.render("admin/eliminarVideojuego", {
    videojuego: videojuegos
  });
};

const accionBorrarVideojuego = async (req, res) => {
      await Videojuego_plataformas.destroy({
          where: {
              id_videojuego: req.body.id
          }
      });
      await Videojuego.destroy({
          where: {
              id_videojuego: req.body.id
          }
      });
      res.redirect('eliminarVideojuego');
};

export { eliminarVideojuego, accionBorrarVideojuego  };
