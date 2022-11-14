const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  birthDate: Date,
  contactNumber: String,
  producerName: String,
  address: String,
  isAdmin: Boolean,
});

module.exports = mongoose.model("User", UserSchema);
