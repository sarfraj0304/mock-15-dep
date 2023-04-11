const express = require("express");
const { connection } = require("./db");
require("dotenv").config();
const cors = require("cors");
const { UserRouter } = require("./routes/user.route");
const { boardRoute } = require("./routes/board.route");
const { taskRouter } = require("./routes/task.route");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/user", UserRouter);
app.use("/board", boardRoute);
app.use("/task", taskRouter);

app.listen(4500, async () => {
  try {
    await connection;
    console.log("Db connected");
  } catch (error) {
    console.log("error");
  }
  console.log("Server Connected");
});
