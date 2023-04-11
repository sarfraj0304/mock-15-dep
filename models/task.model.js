const mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: String,
  description: String,
  status: { type: String, enum: ["Todo", "Doing", "Done"], default: "Todo" },
  subtask: [{ type: mongoose.Schema.ObjectId, ref: "Subtask" }],
});

const taskModel = mongoose.model("Task", schema);

module.exports = {
  taskModel,
};
