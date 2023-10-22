const Order = require("../Model/Order");

module.exports = {
  createOrder: async (order) => {
    try {
      const newOrder = await Order.create(order);
      return newOrder;
    } catch (error) {
      throw error;
    }
  },
  getOrderById: async (id) => {
    try {
      const order = await Order.findById(id);
      return order;
    } catch (error) {
      throw error;
    }
  },
  getAllOrders: async () => {
    try {
      const orders = await Order.find();
      return orders;
    } catch (error) {
      throw error;
    }
  },
  updateOrderById: async (id, order) => {
    try {
      const order = await Order.findByIdAndUpdate(id, order);
      return order;
    } catch (error) {
      throw error;
    }
  },
  deleteOrderById: async (id) => {
    try {
      const order = await Order.findByIdAndDelete(id);
      return order;
    } catch (error) {
      throw error;
    }
  },
};
