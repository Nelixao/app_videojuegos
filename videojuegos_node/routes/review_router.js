import express from "express";
import { accionMostrarReview } from "../controllers/reviews/reviewsController.js";

const router_Review = express.Router();

router_Review.get("/:titulo", accionMostrarReview);

export default router_Review