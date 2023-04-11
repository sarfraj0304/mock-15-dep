const { Router } = require("express");
const { taskModel } = require("../models/task.model");
const { boardModel } = require("../models/Board.model");

const taskRouter = Router();

taskRouter.get("/", async (req, res) => {
  const data = await taskModel.find();
  res.send(data);
});

taskRouter.post("/add", async (req, res) => {
  try {
    const tasks = new taskModel(req.body);
    await tasks.save();
    res.send({ msg: "data added", id: tasks._id });
  } catch (error) {
    res.send({ error: error });
  }
});

module.exports = { taskRouter };
