const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");

//Server setup
const server = express();
const port = 8000;

//Middlewares
server.use(morgan("dev"));
server.use(bodyParser.json());

//Routes
const UserRouter = require("./routes/users");
const CropRouter = require("./routes/crops");

//Database connection
mongoose.connect("mongodb://127.0.0.1:27017/vepplydb");

server.get("/", (request, response) => {
  response.send("Welcome to vepply server");
});

//Let server use routes
server.use("/api/v1/users", UserRouter);
server.use("/api/v1/crops", CropRouter);

server.listen(port, () => {
  console.log(`This server is running at port ${port}`);
});

/*
  Next steps after initial setup of server
  1. create models
  2. create routes
  3. test and adjustments
  4. make the collections
*/
