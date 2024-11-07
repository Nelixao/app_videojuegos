import express from "express";
import { accionMostrarJuegos } from "../controllers/cards/cardsController.js";

const router_Cards = express.Router();

router_Cards.get("/:consola", accionMostrarJuegos);

export default router_Cards
