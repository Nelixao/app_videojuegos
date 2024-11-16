import express from "express"
import { verificarCuenta } from "../controllers/loginController.js";

const router_Verificar = express.Router();

router_Verificar.get('/:token', verificarCuenta)



//Routing
//para la vista alta credenciales


export default router_Verificar