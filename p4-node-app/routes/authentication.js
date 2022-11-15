const express = require("express");
const router = express.Router();

//Model
const User = require("../models/User");

//import Bcrypt
const bcrypt = require("bcrypt");

//Create user registration
router.post("/register", async (request, response) => {
  const hashedPassword = await bcrypt.hash(request.body.password, 10);
  const newUser = new User({
    ...request.body,
    password: hashedPassword,
  });

  newUser.save().then((result) => {
    response.send({ status: "User has been registered" });
  });
});

//Login authentication
router.post("/login", (request, response) => {
  User.findOne({ email: request.body.email }).then((result) => {
    bcrypt.compare(request.body.password, result.password, (error, match) => {
      //Authenticate user login
      if (match) {
        response.send({ status: "User input is valid" });
      } else {
        response.send({ status: "Credentials not valid" });
      }
    });
  });
});

module.exports = router;
