import express from "express"; // Importar Express
import {
  getServices,
  getServiceById,
} from "../controllers/servicesController.js"; // Importar controller de servicios

const router = express.Router(); // Crea la instancia del router de Express

router.get("/", getServices); // Ruta a GET para obtener todos los servicios, usando getServices del controller

router.get("/:id", getServiceById); // Ruta a GET para obtener un servicio por ID, usando getServiceById del controller

export default router; // Exportar el router para ser usado en app.js
