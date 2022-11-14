const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  birthDate: Date,
  contactNumber: String,
  producerName: String,
  location: String,
  isAdmin: Boolean,
  crops: [{ type: mongoose.Schema.Types.ObjectId, ref: "Crop" }],
});

module.exports = mongoose.model("User", UserSchema);
