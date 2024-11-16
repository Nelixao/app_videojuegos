import express from "express";
import { renderizarCardVideojuego, renderizarVideojuego } from "../controllers/cards/cardsController.js";
import { isAuthenticated } from "../controllers/loginController.js";

const router_Cards = express.Router();

router_Cards.get("/:consola", isAuthenticated, renderizarCardVideojuego);
router_Cards.get("/:consola/:titulo", isAuthenticated, renderizarVideojuego);

export default router_Cards
