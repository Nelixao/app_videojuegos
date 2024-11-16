import express from "express"
import {login, registroLogin, verificarCuenta} from "../controllers/loginController.js";

const router_Login = express.Router();


router_Login.get('/', login);
router_Login.post("/", registroLogin);



export default router_Login