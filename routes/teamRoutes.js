const express = require("express");

const router = express.Router();

const Team = require("../data/Team.json");


router.get("/", (req, res) => {
  res.json(Team);
});


router.get("/:id", (req, res) => {

  const id = parseInt(req.params.id);

  const team = Team.find(s => s.id === id);
    
    if (!team) {
        return res.status(404).json({
        mensaje: "equipo no encontrado"
    });
  }

  res.json(team);

});

module.exports = router;


