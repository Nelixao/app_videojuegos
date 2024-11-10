import express from "express";
import { renderizarCardVideojuego, renderizarVideojuego } from "../controllers/cards/cardsController.js";

const router_Cards = express.Router();

router_Cards.get("/:consola", renderizarCardVideojuego);
router_Cards.get("/:consola/:titulo", renderizarVideojuego);

export default router_Cards
