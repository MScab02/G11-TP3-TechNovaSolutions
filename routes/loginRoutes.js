const express = require("express");

const router = express.Router();

const users = require("../data/users.json");

router.post("/", (req, res) => {

  const { email, password } = req.body;

  const user = users.find(user =>
    user.email === email &&
    user.password === password
  );

  if (user) {
    res.json({
      mensaje: "Login correcto",
      user
    })}
});