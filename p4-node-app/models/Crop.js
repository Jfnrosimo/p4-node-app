const mongoose = require("mongoose");

const CropSchema = new mongoose.Schema({
  name: String,
  estimatedWeight: Number,
  harvestWeight: Number,
  datePlanted: Date,
  dateOfHarvest: Date,
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  status: String,
});

module.exports = mongoose.model("Crop", CropSchema);
