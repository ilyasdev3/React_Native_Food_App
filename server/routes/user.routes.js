const router = require("express").Router();
const userController = require("../controllers/user.controller");
const authState = require("../middlewares/authState");

router.get("/user", authState.verifyTokenAndAttachUser, userController.getUser);

module.exports = router;
