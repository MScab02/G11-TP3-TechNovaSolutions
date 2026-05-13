import express from "express";
import {getServices, getServiceById, getSubserviceById} from "../controllers/equiposController.js";

const router = express.Router();

router.get("/", getServices); // Ruta a GET para obtener todos los servicios, usando getServices del controller

router.get("/:id", getServiceById); // Ruta a GET para obtener un servicio por ID, usando getServiceById del controller

router.get("/:id/:subId", getSubserviceById); // Ruta a GET para obtener un subservicio por ID, usando getSubserviceById del controller

export default router; // Exportar el router para ser usado en app.js
