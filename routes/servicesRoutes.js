const express = require("express");

const router = express.Router();

const services = require("../data/services.json");

router.get("/", (req, res) => {
  res.json(services);
});

module.exports = router;


router.get("/:id", (req, res) => {

  const id = parseInt(req.params.id);

  const servicio = services.find(s => s.id === id);

  if (!servicio) {
    return res.status(404).json({
      mensaje: "Servicio no encontrado"
    });
  }

  res.json(servicio);

});

