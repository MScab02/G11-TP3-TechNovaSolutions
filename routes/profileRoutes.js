const express = require("express");

const router = express.Router();

const users = require("../data/users.json");

router.get("/:id", (req, res) => {

  const id = parseInt(req.params.id);

  const user = users.find(user => user.id === id);

  if (user) {

    res.json(user);

  } else {

    res.status(404).json({
      mensaje: "Usuario no encontrado"
    })};
});

module.exports = router;