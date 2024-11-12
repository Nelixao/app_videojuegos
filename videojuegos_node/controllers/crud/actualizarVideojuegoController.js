import { check, validationResult } from "express-validator";
import { Op } from "sequelize";
import videojuegos, { Videojuego } from "../../model/Videojuego.js";
import videojuegos_plataformas, { Videojuego_plataformas } from "../../model/Videojuego_plataforma.js";

// reenderizar la pagina para leeer todos los juefos y modificar bro
const actualizarVideojuego = async (req, res) => {
  const videojuegos = await Videojuego.findAll({
    include: {
      model: Videojuego_plataformas
    },
    raw: true,
    nest: true
  });
  res.render("admin/actualizarVideojuego", {
    videojuego: videojuegos
  });
};

const modificarVideojuego = async (req, res) => {
  const { id } = req.params;
    const info = await Videojuego.findByPk(id);
    const plataformas = await Videojuego_plataformas.findOne({
      where: {
        id_videojuego: id,
      },
    });
    res.render("admin/modificarVideojuego", {
      valores: {
        titulo: info.titulo,
        imagen: info.imagen,
        trailer: info.trailer,
        id_videojuego: info.id_videojuego,
        plataforma: plataformas ? plataformas.id_plataforma : '',
        costo: plataformas ? plataformas.costo : '',
        precio: plataformas ? plataformas.precio : '',
        stock: plataformas ? plataformas.stock : '',
      },
    });
};

const actualizarObjetoVideojuego = async (req, res) => {
  const { id } = req.params;
  const { titulo, imagen, trailer, plataforma, costo, precio, stock } = req.body;
  try {
    const info = await Videojuego.findByPk(id);
    if (!info) {
      return res.status(404).send("Videojuego no encontrado");
    }
    await Videojuego.update(
      {
        titulo,
        imagen,
        trailer,
      },
      {
        where: { id_videojuego: id },
      }
    );
    const plataformaExistente = await Videojuego_plataformas.findOne({
      where: {
        id_videojuego: id,
      },
    });
    if (plataformaExistente) {
      await Videojuego_plataformas.update(
        {
          id_plataforma: plataforma,
          costo,
          precio,
          stock,
        },
        {
          where: {
            id_videojuego: id,
          },
        }
      );
    } else {
      await Videojuego_plataformas.save({
        id_videojuego: id,
        id_plataforma: plataforma,
        costo,
        precio,
        stock,
      });
    }
    res.redirect("/admin/actualizarVideojuego");
  } catch (error) {
    console.error("Errorrrrrrrrr:", error);
    res.status(500).send("error al actualizar");
  }
};

export { actualizarVideojuego, modificarVideojuego, actualizarObjetoVideojuego };
