import express from "express";
import {inicio, accionMostrarJuegos, accionMostrarPredeterminados} from "../controllers/inicioController.js";



const router = express.Router();

// Routing
router.get("/", inicio);

router.get("/consola/:consola", accionMostrarJuegos);

router.get("/predeterminado/:id", accionMostrarPredeterminados)


export default router