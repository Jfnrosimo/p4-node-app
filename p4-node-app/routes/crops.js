const express = require("express");
const router = express.Router();

//Model
const Crop = require("../models/Crop");

//Create new crop from a user
//Route parameter id is the Creator of the crop
router.post("/:id", (request, response) => {
  let newCrop = new Crop({
    ...request.body,
    creator: request.params.id,
  });
  newCrop.save().then((result) => {
    response.send({ status: "New crop created" });
  });
});

//Update a crop
router.put("/:id", (request, response) => {
  const cropId = request.params.id;
  Crop.updateOne({ _id: cropId }, { $set: { ...request.body } }).then(
    (result) => {
      if (result.modifiedCount === 1) {
        response.send({ status: "Crop has been updated" });
      }
    }
  );
});

//Delete a crop
router.delete("/:id", (request, response) => {
  Crop.deleteOne({ _id: request.params.id }).then((result) => {
    if (result.deletedCount === 1) {
      response.send({ status: "Crop has been removed" });
    }
  });
});

module.exports = router;
