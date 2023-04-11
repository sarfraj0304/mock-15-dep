const { Router } = require("express");
const { userModel } = require("../models/User");
const UserRouter = Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

UserRouter.get("/", async (req, res) => {
  const data = await userModel.find();
  res.send(data);
});

UserRouter.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    const data = await userModel.findOne({ email: email });
    if (data) {
      res.send({ msg: "user exist" });
    } else {
      bcrypt.hash(password, 3, async (err, hash) => {
        if (err) {
          res.send({ msg: err });
        } else {
          const store = new userModel({ email, password: hash });

          await store.save();
          res.send({ msg: "registered" });
        }
      });
    }
  } catch (error) {
    res.send({ msg: error });
  }
});

UserRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const data = await userModel.findOne({ email: email });
    if (data) {
      bcrypt.compare(password, data.password, async (err, result) => {
        if (!result) {
          res.send({ msg: "invalid cred" });
        } else {
          const token = jwt.sign({ userID: data._id }, "mock15");
          res.send({ token: token, msg: "success login" });
        }
      });
    } else {
      res.send({ msg: "user not exist" });
    }
  } catch (error) {
    res.send({ msg: error });
  }
});

module.exports = {
  UserRouter,
};
