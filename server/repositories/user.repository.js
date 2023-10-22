const User = require("../Model/User");

module.exports = {
  createUser: async (user) => {
    try {
      const newUser = await User.create(user);
      return newUser;
    } catch (error) {
      throw error;
    }
  },
  getUserByEmail: async (email) => {
    try {
      const user = await User.findOne({ email });
      return user;
    } catch (error) {
      throw error;
    }
  },
  getUserById: async (id) => {
    try {
      const user = await User.findById(id);
      return user;
    } catch (error) {
      throw error;
    }
  },
  getAllUsers: async () => {
    try {
      const users = await User.find();
      return users;
    } catch (error) {
      throw error;
    }
  },
  updateUserById: async (id, user) => {
    try {
      const user = await User.findByIdAndUpdate(id, user);
      return user;
    } catch (error) {
      throw error;
    }
  },
  deleteUserById: async (id) => {
    try {
      const user = await User.findByIdAndDelete(id);
      return user;
    } catch (error) {
      throw error;
    }
  },
};
