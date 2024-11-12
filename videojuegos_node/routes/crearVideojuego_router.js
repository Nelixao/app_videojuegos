import express from "express";

import {
  crearVideojuego,
  registrando,
} from "../controllers/crud/crearVideojuegoController.js";

const router_crear = express.Router();

router_crear.get("/crearVideojuego", crearVideojuego);
router_crear.post("/crearVideojuego", registrando);

export default router_crear;
