import express from "express";

//actualizar
import {
    actualizarVideojuego,
    modificarVideojuego,
    actualizarObjetoVideojuego,
} from "../controllers/crud/actualizarVideojuegoController.js";

//crear
import {
    crearVideojuego,
    registrando,
    upload, // Importa `upload`
} from "../controllers/crud/crearVideojuegoController.js";

//leer
import { leerVideojuego } from "../controllers/crud/leerVideojuegoController.js";

//eliminar
import {
    eliminarVideojuego,
    accionBorrarVideojuego,
} from "../controllers/crud/eliminarVideojuegoController.js";

const router_crud = express.Router();

//inicio
router_crud.get("/leerVideojuego", leerVideojuego);
//router_crud.get("/crud", crud);

// actualizar
router_crud.get("/actualizarVideojuego", actualizarVideojuego);
router_crud.get("/modificarVideojuego/:id", modificarVideojuego);
//router_crud.post("/modificarVideojuego/:id", actualizarObjetoVideojuego);
router_crud.post("/modificarVideojuego/:id", upload.single("imagen"), actualizarObjetoVideojuego);


//crear
router_crud.get("/crearVideojuego", crearVideojuego);
router_crud.post("/crearVideojuego", upload.single("imagen"), registrando);

//leer
router_crud.get("/leerVideojuego", leerVideojuego);

//eliminar
router_crud.get("/eliminarVideojuego", eliminarVideojuego); //renderizar
router_crud.post("/borrarVideojuego", accionBorrarVideojuego); //cuando da al boton de eliminar

export default router_crud;