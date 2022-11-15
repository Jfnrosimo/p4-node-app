const express = require("express");
const router = express.Router();

//Model
const User = require("../models/User");

//import Bcrypt
const bcrypt = require("bcrypt");

//Create user registration
router.post("/register", (request, response) => {
  const hashedPassword = bcrypt.hash(request.body.password, 10);
  const newUser = new User({
    ...request.body,
    password: hashedPassword,
  });

  newUser.save().then((result) => {
    response.send({});
  });
});

module.exports = router;
