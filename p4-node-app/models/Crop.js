const mongoose = require("mongoose");

const CropSchema = new mongoose.Schema({
  name: String,
  estimatedWeight: Number,
  harvestWeight: Number,
  datePlanted: Date,
  dateOfHarvest: Date,
  status: String,
});

module.exports = mongoose.model("Crop", CropSchema);
