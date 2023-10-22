const Cart = require("../Model/Cart");

module.exports = {
  createCart: async (cart) => {
    try {
      const newCart = await Cart.create(cart);
      return newCart;
    } catch (error) {
      throw error;
    }
  },
  getCartById: async (id) => {
    try {
      const cart = await Cart.findById(id);
      return cart;
    } catch (error) {
      throw error;
    }
  },
  getAllCarts: async () => {
    try {
      const carts = await Cart.find();
      return carts;
    } catch (error) {
      throw error;
    }
  },
  updateCartById: async (id, cart) => {
    try {
      const cart = await Cart.findByIdAndUpdate(id, cart);
      return cart;
    } catch (error) {
      throw error;
    }
  },
  deleteCartById: async (id) => {
    try {
      const cart = await Cart.findByIdAndDelete(id);
      return cart;
    } catch (error) {
      throw error;
    }
  },
};
