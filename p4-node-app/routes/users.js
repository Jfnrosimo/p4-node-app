const express = require("express");
const router = express.Router();

//Model
const User = require("../models/User");

//Get user
router.get("/:id", (request, response) => {
  User.findOne({ _id: request.params.id }, { password: 0 }).then((result) => {
    if (typeof result === "object") {
      response.send(result);
    }
  });
});

//Get all crops of specific user
router.get("/:userId/crops", (request, response) => {
  User.find({ _id: request.params.userId })
    .populate("crops")
    .then((result) => {
      if (typeof result === "object") {
        response.send(result);
      }
    });
});

//Update a user
router.put("/:userId", (request, response) => {
  const userId = request.params.userId;
  User.updateOne({ _id: userId }, { $set: { ...request.body } }).then(
    (result) => {
      if (result.modifiedCount === 1) {
        response.send({ status: "User has been updated" });
      }
    }
  );
});

//Add a crop to a user's crops
router.put("/:userId/crops/:cropId", (request, response) => {
  User.updateOne(
    { _id: request.params.userId },
    {
      $push: {
        crops: request.params.cropId,
      },
    }
  ).then((result) => {
    if (result.modifiedCount === 1) {
      response.send({ status: "Crop has been added by this user" });
    }
  });
});

//Delete a user
router.delete("/:id", (request, response) => {
  User.deleteOne({ _id: request.params.id }).then((result) => {
    if (result.deletedCount === 1) {
      response.send({
        status: "User has been deleted",
      });
    }
  });
});

module.exports = router;
