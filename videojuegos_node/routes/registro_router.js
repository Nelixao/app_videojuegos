import express from "express"
import {registro} from "../controllers/registroController.js";


const router_Registro = express.Router();

router_Registro.get('/registro', registro)

export default router_Registro