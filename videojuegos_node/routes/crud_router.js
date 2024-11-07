import express from "express";
import { crud } from "../controllers/CRUD/crudController.js";

const router_crud = express.Router();

router_crud.get("/crud", crud);

// Ruta para crear un videojuego
//router_crud.get("/crearVideojuego", crearVideojuego);

export default router_crud;
