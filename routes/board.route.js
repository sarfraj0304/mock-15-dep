const { Router } = require("express");
const { boardModel } = require("../models/Board.model");

const boardRoute = Router();

boardRoute.get("/", async (req, res) => {
  const data = await boardModel.find().populate("tasks");
  res.send(data);
});

boardRoute.post("/createBoard", async (req, res) => {
  try {
    const data = new boardModel(req.body);
    await data.save();
    res.send({ msg: "added" });
  } catch (error) {
    res.send({ error: error });
  }
});

boardRoute.patch("/addTasks", async (req, res) => {
  const { status, id } = req.body;
  try {
    const data = await boardModel.findOne({ name: status });
    let obj = {
      _id: id,
    };
    data.tasks.push(obj);
    await data.save();
    res.send({ msg: "added data", data });
  } catch (error) {
    res.send({ error: error });
  }
});

module.exports = {
  boardRoute,
};
