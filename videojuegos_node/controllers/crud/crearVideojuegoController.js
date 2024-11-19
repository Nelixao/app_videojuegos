import db from "../../config/db.js";
import { check, validationResult } from "express-validator";
import Videojuego from "../../model/videojuego.js";
import Videojuego_plataformas from "../../model/videojuego_plataforma.js";
//imagenes
import multer from 'multer';
import path from 'path';


const crearVideojuego = async (req, res) => {
  const plataformas = await consulta();
  res.render("admin/crearVideojuego", { info: plataformas });
  console.log("Se renderizoooooooooooooooo");
};

const registrando = async (req, res) => {
  try {
    const imagenRuta = req.file ? `/image/games/${req.file.filename}` : null;
    if (!imagenRuta) {
      return res.status(400).send("Error: No se subió la imagen.");
    }
    const videojuegoCrear = await Videojuego.create({
      id_videojuego: req.body.id_videojuego, 
      titulo: req.body.titulo,
      imagen: imagenRuta,
      trailer: req.body.trailer,
    });
    const id_videojuego = videojuegoCrear.id_videojuego;
    const id_plataforma = req.body.id_plataforma;
    const plataformaCrear = await Videojuego_plataformas.create({
      id_plataforma: id_plataforma,
      id_videojuego: id_videojuego,
      stock: req.body.stock,
      costo: req.body.costo,
      precio: req.body.precio,
    });
    const plataformas = await consulta();
    res.render("admin/crearVideojuego", {
      info: plataformas,
    });
    console.log("Videojuego creado:", videojuegoCrear);
    console.log("Plataforma creada:", plataformaCrear);
  } catch (error) {
    console.error("Error al registrar el videojuego:", error);
    res.status(500).send("Error al registrar el videojuego");
  }
}; 

//para el select
async function consulta() {
  let plataformas = await db.query(
    "SELECT id_plataforma AS dato1, nombre AS dato2 FROM plataformas",
    {
      type: db.QueryTypes.SELECT,
    }
  );
  return plataformas;
}

//imagen
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

export { crearVideojuego, registrando, upload };