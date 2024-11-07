import express from "express"
import {registro, registrando} from "../controllers/registroController.js";



const router_Registro = express.Router();

router_Registro.get('/', registro)
router_Registro.post('/',registrando);


//Routing
//para la vista alta credenciales





export default router_Registro