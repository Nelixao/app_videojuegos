import express from "express";
import {inicio} from "../controllers/inicioController.js";
import { isAuthenticated } from "../controllers/loginController.js";


const router = express.Router();

// Routing
router.get("/", isAuthenticated, inicio);




export default router