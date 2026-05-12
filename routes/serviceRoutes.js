import express from "express"; // Importar Express
import {
  getServicios,
  getServicioById,
} from "../controllers/servicesController.js"; // Importar controller de servicios

const router = express.Router(); // Crea la instancia del router de Express

router.get("/", getServicios); // Ruta a GET para obtener todos los servicios, usando getServicios del controller

router.get("/:id", getServicioById); // Ruta a GET para obtener un servicio por ID, usando getServicioById del controller

export default router; // Exportar el router para ser usado en app.js
