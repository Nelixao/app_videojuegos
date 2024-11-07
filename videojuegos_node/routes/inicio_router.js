import express from "express";
import {inicio} from "../controllers/inicioController.js";



const router = express.Router();

// Routing
router.get("/", inicio);



export default router