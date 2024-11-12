import express from "express";
import { eliminarVideojuego } from "../controllers/crud/eliminarVideojuegoController.js";

const router_eliminar = express.Router();

router_eliminar.get("/eliminarVideojuego", eliminarVideojuego);

export default router_eliminar;
