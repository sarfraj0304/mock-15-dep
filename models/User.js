const mongoose = require("mongoose");

const schema = mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const userModel = mongoose.model("user", schema);
module.exports = {
  userModel,
};
