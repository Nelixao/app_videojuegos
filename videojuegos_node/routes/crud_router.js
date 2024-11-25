import express from "express";
import { crud } from "../controllers/crud/crudController.js";

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
import { isAuthenticated, authAdmin} from "../middleware/middleware.js";

// Admin

const router_crud = express.Router();


//inicio
router_crud.get("/crud", isAuthenticated, authAdmin, crud);

// actualizar
router_crud.get("/actualizarVideojuego", isAuthenticated, authAdmin, actualizarVideojuego);
router_crud.get("/modificarVideojuego/:id", modificarVideojuego);
router_crud.post("/modificarVideojuego/:id", actualizarObjetoVideojuego);

//crear
router_crud.get("/crearVideojuego", isAuthenticated, authAdmin, crearVideojuego);
router_crud.post("/crearVideojuego", upload.single("imagen"), registrando);

//leer
router_crud.get("/leerVideojuego", isAuthenticated, authAdmin, leerVideojuego);

//eliminar
router_crud.get("/eliminarVideojuego", isAuthenticated, authAdmin, eliminarVideojuego); //renderizar
router_crud.post("/borrarVideojuego", accionBorrarVideojuego); //cuando da al boton de eliminar

export default router_crud;