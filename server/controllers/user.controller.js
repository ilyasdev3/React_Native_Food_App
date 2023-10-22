const STATUS = require("../constant/status.constant");
const userRepository = require("../repositories/user.repository");

module.exports = {
  getUser: async (req, res) => {
    try {
      console.log("hit");
      console.log(req.user, "req.user");
      const user = await userRepository.getUserById(req.user.id);
      return res.status(STATUS.SUCCESS).json({ user });
    } catch (error) {
      return res
        .status(STATUS.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  },
};
