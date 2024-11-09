import express from "express";
import { renderizarCardVideojuego, accionMostrarResena } from "../controllers/cards/cardsController.js";

const router_Cards = express.Router();

router_Cards.get("/:consola", renderizarCardVideojuego);
router_Cards.get("/:consola/review/:titulo", accionMostrarResena);

export default router_Cards
