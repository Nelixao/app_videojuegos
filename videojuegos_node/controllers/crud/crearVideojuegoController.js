import db from "../../config/db.js";
import { check, validationResult } from "express-validator";
import videojuego from "../../model/videojuego.js";
import videojuego_plataformas from "../../model/videojuego_plataforma.js";

const crearVideojuego = (req, res) => {
  res.render("admin/crearVideojuego");
  console.log("se renderizo");
};

const registrando = async (req, res) => {
  const videojuegoCrear = await videojuego.create(req.body);

  const id_videojuego = videojuegoCrear.id_videojuego;
  const id_plataforma = req.body.id_plataforma;

  const plataformaCrear = await videojuego_plataformas.create({
    id_plataforma: id_plataforma,
    id_videojuego: id_videojuego,
    stock: req.body.stock,
    costo: req.body.costo,
    precio: req.body.precio,

  });

  res.render("admin/crearVideojuego", {});
  console.log("si se creo");
  console.log(videojuegoCrear);
  console.log(plataformaCrear);
};

export { crearVideojuego, registrando };

/*

  div
        label(for="plataforma") Plataforma:
        select(name="plataforma", id="plataforma", required=true)
            option(value="1") Xbox
            option(value="2") Nintendo
            option(value="3") PlayStation
*/
