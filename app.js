import cors from "cors";
import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/assets", express.static("assets"));

app.get("/", (req, res) => {
  res.send("Servidor TechNova funcionando 🚀");
});

import serviceRoutes from "./routes/serviceRoutes.js";
import equiposRoutes from "./routes/equiposRoutes.js";
//import loginRoutes from "./routes/loginRoutes.js";
//import profileRoutes from "./routes/profileRoutes.js";

app.use("/services", serviceRoutes);
app.use("/equipos", equiposRoutes);
//app.use("/login", loginRoutes);
//app.use("/perfil", profileRoutes);

app.use("/assets/icon", express.static("assets/icon")); //esto es para las imagenes

export default app;
