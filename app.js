const express = require("express");

const app = express();

const servicesRoutes = require("./routes/servicesRoutes");
const teamRoutes = require("./routes/teamRoutes");

app.use("/services", servicesRoutes);
app.use("/equipo", teamRoutes);

app.listen(3000, () => {
  console.log("Servidor funcionando");
});