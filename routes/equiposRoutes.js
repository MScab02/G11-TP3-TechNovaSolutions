import express from "express";
import { getEquipos } from "../controllers/equiposController.js";

const router = express.Router();

router.get("/", getEquipos);

export default router;