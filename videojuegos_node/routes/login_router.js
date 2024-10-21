import express from "express"
import {login} from "../controllers/loginController.js";


const router_Login = express.Router();

router_Login.get('/', login)

export default router_Login