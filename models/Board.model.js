const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: String,
  tasks: [{ type: mongoose.Schema.ObjectId, ref: "Task" }],
});

const boardModel = mongoose.model("alldata", schema);

module.exports = {
  boardModel,
};
