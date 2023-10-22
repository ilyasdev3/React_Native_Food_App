const STATUS = require("../constant/status.constant");
const cartRepository = require("../repositories/cart.repository");

module.exports = {
  getAllCarts: async (req, res) => {
    try {
      const carts = await cartRepository.getAllCarts();
      return res.status(STATUS.SUCCESS).json({ carts });
    } catch (error) {
      return res
        .status(STATUS.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  },
  getCart: async (req, res) => {
    try {
      const cart = await cartRepository.getCartById(req.user.id);
      return res.status(STATUS.SUCCESS).json({ cart });
    } catch (error) {
      return res
        .status(STATUS.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  },

  addToCart: async (req, res) => {
    try {
      const newCart = await cartRepository.addToCart(req.user.id, req.body);
      return res.status(STATUS.SUCCESS).json({ newCart });
    } catch (error) {
      return res
        .status(STATUS.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  },

  updateCart: async (req, res) => {
    try {
      const updatedCart = await cartRepository.updateCartById(
        req.user.id,
        req.body
      );
      return res.status(STATUS.SUCCESS).json({ updatedCart });
    } catch (error) {
      return res
        .status(STATUS.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  },

  deleteCart: async (req, res) => {
    try {
      const deletedCart = await cartRepository.deleteCartById(req.user.id);
      return res.status(STATUS.SUCCESS).json({ deletedCart });
    } catch (error) {
      return res
        .status(STATUS.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  },
};
