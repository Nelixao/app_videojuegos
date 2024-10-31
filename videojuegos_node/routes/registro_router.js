import express from "express"
import {registro, registroUsuario} from "../controllers/registroController.js";


const router_Registro = express.Router();

router_Registro.get('/', registro)
router_Registro.post('/register', registroUsuario)

export default router_Registro