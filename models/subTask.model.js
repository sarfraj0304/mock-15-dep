const mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: String,
  isCompleted: boolean,
});

const subTaskModel = mongoose.model("Subtask", schema);

module.exports = {
  subTaskModel,
};
