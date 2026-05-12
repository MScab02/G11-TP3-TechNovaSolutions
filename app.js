import express from "express";
import cors from "cors";

import servicesRoutes from "./routes/serviceRoutes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/services", servicesRoutes);

export default app;
