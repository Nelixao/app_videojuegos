import express from "express"
import {login, registro} from "../controllers/loginController.js";


const router_Login = express.Router();

router_Login.get('/login', login)
router_Login.post('/registro', registro)

export default router_Login