import express from "express";
import cors from "cors";

import serviciosRoutes from "./routes/serviceRoutes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/servicios", serviciosRoutes);

export default app;
