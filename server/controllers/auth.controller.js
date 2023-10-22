const STATUS = require("../constant/status.constant");
const userRepository = require("../repositories/user.repository");
const {
  hashPassword,
  comparePassword,
  generateToken,
} = require("../utils/token");

module.exports = {
  register: async (req, res) => {
    try {
      console.log("hit");
      const { email, password } = req.body;
      const user = await userRepository.getUserByEmail(email);
      if (user) {
        return res
          .status(STATUS.BAD_REQUEST)
          .json({ message: "Email already exists" });
      }
      const hashedPassword = await hashPassword(password);
      const newUser = await userRepository.createUser({
        ...req.body,
        password: hashedPassword,
      });
      return res
        .status(STATUS.CREATED)
        .json({ message: "Register successfully" });
    } catch (error) {
      return res
        .status(STATUS.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  },

  login: async (req, res) => {
    try {
      console.log("hit");
      const { email, password } = req.body;
      const user = await userRepository.getUserByEmail(email);
      if (!user) {
        return res
          .status(STATUS.BAD_REQUEST)
          .json({ message: "Email does not exist" });
      }
      const isMatch = await comparePassword(password, user.password);
      if (!isMatch) {
        return res
          .status(STATUS.BAD_REQUEST)
          .json({ message: "Password is incorrect" });
      }
      const payload = {
        id: user._id,
      };
      const token = await generateToken(payload);

      return res
        .status(STATUS.SUCCESS)
        .json({ message: "Login successfully", token, user });
    } catch (error) {
      return res
        .status(STATUS.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  },
};
