const express = require("express");
const router = express.Router();

//Model
const Crop = require("../models/Crop");

//Create new crop from a user ------(TEST OK)--------
router.post("/:id", (request, response) => {
  let newCrop = new Crop({
    ...request.body,
    creator: request.params.id,
  });
  newCrop.save().then((result) => {
    response.send({ status: "New crop created" });
  });
});

//Delete a crop ------(TEST OK)-------
router.delete("/:id", (request, response) => {
  Crop.deleteOne({ _id: request.params.id }).then((result) => {
    if (result.deletedCount === 1) {
      response.send({ status: "Crop has been removed" });
    }
  });
});

module.exports = router;
