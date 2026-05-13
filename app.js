
const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Servidor TechNova funcionando 🚀");
});

import equiposRoutes from "./routes/equiposRoutes.js";

const servicesRoutes = require("./routes/servicesRoutes");
const teamRoutes = require("./routes/teamRoutes");
const loginRoutes = require("./routes/loginRoutes");
const profileRoutes = require("./routes/profileRoutes");

app.use("/services", servicesRoutes);
app.use("/equipo", teamRoutes);
app.use("/login", loginRoutes);
app.use("/perfil", profileRoutes);

app.use("/assets/icon", express.static("assets/icon")); //esto es para las imagenes
app.use("/equipos", equiposRoutes);

app.listen(PORT, () => {
  console.log(`Servidor funcionando en puerto ${PORT}`);
});

