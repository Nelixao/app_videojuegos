import express from "express";
import { actualizarVideojuego } from "../controllers/crud/actualizarVideojuegoController.js";

const router_actualizar = express.Router();

router_actualizar.get("/actualizarVideojuego", actualizarVideojuego);

export default router_actualizar;
