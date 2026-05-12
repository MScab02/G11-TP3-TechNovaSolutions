import express from "express";
import cors from "cors";

import serviciosRoutes from "./routes/serviceRoutes.js";
import equipoRoutes from "./routes/equipoRoutes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/servicios", serviciosRoutes);

app.use("/equipos", equipoRoutes);

export default app;