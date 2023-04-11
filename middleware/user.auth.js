const jwt = require("jsonwebtoken");

const checkAuth = (req, res, next) => {
  const token = req.headers.authorization;
  jwt.verify(token, "mock15", (err, decoded) => {
    if (decoded) {
      req.body.userID = decoded.userID;
      next();
    } else {
      res.send({ msg: "user not login" });
    }
  });
};

module.exports = {
  checkAuth,
};
