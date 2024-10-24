import express from "express";
import {inicio, accionMostrarJuegos} from "../controllers/inicioController.js";



const router = express.Router();

// Routing
router.get("/", inicio);

router.get("/:consola", accionMostrarJuegos);


export default router