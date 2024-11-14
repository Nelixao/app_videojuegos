import express from "express"
import { logout } from "../controllers/logoutController.js";


const router_Logout = express.Router();

router_Logout.get('/', logout);

export default router_Logout