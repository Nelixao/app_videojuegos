import db from "../../config/db.js";
import { check, validationResult } from "express-validator";
import videojuegos from "../../model/videojuegos.js";
import videojuegos_plataformas from "../../model/videojuegos_plataformas.js";

const crearVideojuego = (req, res) => {
  res.render("admin/crearVideojuego");
  console.log("se renderizo");
};

const registrando = async (req, res) => {
  const videojuegoCrear = await videojuegos.create(req.body);

  const id_videojuegos = videojuegoCrear.id_videojuegos;
  const id_plataformas = req.body.id_plataformas;

  const plataformaCrear = await videojuegos_plataformas.create({
    id_videojuegos: id_videojuegos,
    id_plataformas: id_plataformas,
    costo: req.body.costo,
    precio: req.body.precio,
    stock: req.body.stock,
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
