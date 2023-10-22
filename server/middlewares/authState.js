const STATUS = require("../constant/status.constant");
const jwt = require("jsonwebtoken");

module.exports = {
  verifyTokenAndAttachUser: (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
      return res
        .status(STATUS.UNAUTHORIZED)
        .json({ message: "You are not authenticated" });
    }
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decodedToken, "decodedToken");
    if (!decodedToken) {
      return res
        .status(STATUS.UNAUTHORIZED)
        .json({ message: "You are not authenticated" });
    }

    req.user = decodedToken.user;
    next();
  },
};
