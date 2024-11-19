import { check, validationResult } from "express-validator";
import { Op } from "sequelize";
import videojuegos, { Videojuego } from "../../model/videojuego.js";
import videojuegos_plataformas, { Videojuego_plataformas } from "../../model/videojuego_plataforma.js";
import multer from 'multer';
import path from 'path';

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
  const { titulo, trailer, plataforma, costo, precio, stock } = req.body;
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const info = await Videojuego.findByPk(id);
    if (!info) {
      return res.status(404).send("Videojuego no encontrado");
    }
    console.log("Archivo de imagen cargado:", req.file);
    const nuevaImagen = req.file ? `/image/games/${req.file.filename}` : info.imagen;
    await Videojuego.update(
      {
        titulo,
        imagen: nuevaImagen,  // Actualiza la imagen solo si hay una nueva
        trailer,
      },
      {
        where: { id_videojuego: id },
      }
    );
    // Verificar si ya existe un registro en Videojuego_plataformas 
    const plataformaExistente = await Videojuego_plataformas.findOne({
      where: { id_videojuego: id, id_plataforma: plataforma },
    });
    if (plataformaExistente) {
      // Si ya existe, actualizamos los que se necesitan
      await Videojuego_plataformas.update(
        { costo, precio, stock },
        { where: { id_videojuego: id, id_plataforma: plataforma } }
      );
    } else {
      // Si no existe, creamos un nuevo registro
      await Videojuego_plataformas.create({
        id_videojuego: id,
        id_plataforma: plataforma,
        costo,
        precio,
        stock,
      });
    }
    res.redirect("/admin/actualizarVideojuego");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error al actualizar");
  }
};

// Configuración de multer para la carga de imágenes
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/image/games');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

async function validacionFormulario(req) {
  await check("titulo")
      .notEmpty()
      .withMessage("Titulo no debe ser vacio")
      .run(req);
  await check("imagen")
      .notEmpty()
      .withMessage("Imagen no debe ser vacio")
      .run(req);
  await check("trailer")
      .notEmpty()
      .withMessage("URL del Trailer materno no debe ser vacio")
      .run(req);
  await check("plataforma")
      .notEmpty()
      .withMessage("Plataformas no debe ser vacio")
      .run(req);
  await check("costo")
      .notEmpty()
      .withMessage("costo no debe ser vacio")
      .run(req);
  await check("precio")
      .notEmpty()
      .withMessage("Precio no debe ser vacio")
      .run(req);
  await check("stock")
      .notEmpty()
      .withMessage("Stock no debe ser vacio")
      .run(req);
  let salida = validationResult(req);
  return salida;
}

const upload = multer({ storage: storage });

export { actualizarVideojuego, modificarVideojuego, actualizarObjetoVideojuego, upload };

/* CODIGO DE ACTUALIZAR JUEGO, PERO ESTE MODIFICA LA PLATAFORMA  */

/* const actualizarObjetoVideojuego = async (req, res) => {
  const { id } = req.params;
  const { titulo, trailer, plataforma, costo, precio, stock } = req.body;
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const info = await Videojuego.findByPk(id);
    if (!info) {
      return res.status(404).send("Videojuego no encontrado");
    }

    console.log("Archivo de imagen", req.file);
    const nuevaImagen = req.file ? `/image/games/${req.file.filename}` : info.imagen;

    // Actualizar el videojuego en la base de datos
    await Videojuego.update(
      {
        titulo,
        imagen: nuevaImagen,  // Actualiza la imagen solo si hay una nueva
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
        await Videojuego_plataformas.create({
          id_videojuego: id,
          id_plataforma: plataforma,
          costo,
          precio,
          stock,
        });
      }

    res.redirect("/admin/actualizarVideojuego");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error al actualizar");
  }
}; */