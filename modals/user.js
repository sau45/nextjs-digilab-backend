const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
});

const Users = mongoose.model("Users", userSchema);
module.exports = Users;