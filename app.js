const express = require("express");

const app = express();

const servicesRoutes = require("./routes/servicesRoutes");
const teamRoutes = require("./routes/teamRoutes");
const loginRoutes = require("./routes/loginRoutes");
const profileRoutes = require("./routes/profileRoutes");

app.use("/services", servicesRoutes);
app.use("/equipo", teamRoutes);
app.use("/login", loginRoutes);
app.use("/perfil", profileRoutes);

app.listen(3000, () => {
  console.log("Servidor funcionando");
});

app.use(express.json());