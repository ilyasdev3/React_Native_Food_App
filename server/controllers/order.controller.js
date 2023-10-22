const STATUS = require("../constant/status.constant");
const orderRepository = require("../repositories/order.repository");

module.exports = {
  getOrders: async (req, res) => {
    try {
      const orders = await orderRepository.getOrders();
      return res.status(STATUS.SUCCESS).json({ orders });
    } catch (error) {
      return res
        .status(STATUS.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  },

  getOrderById: async (req, res) => {
    try {
      const order = await orderRepository.getOrderById(req.params.id);
      return res.status(STATUS.SUCCESS).json({ order });
    } catch (error) {
      return res
        .status(STATUS.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  },

  createOrder: async (req, res) => {
    try {
      const newOrder = await orderRepository.createOrder(req.body);
      return res.status(STATUS.CREATED).json({ newOrder });
    } catch (error) {
      return res
        .status(STATUS.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  },

  updateOrder: async (req, res) => {
    try {
      const updatedOrder = await orderRepository.updateOrderById(
        req.params.id,
        req.body
      );
      return res.status(STATUS.SUCCESS).json({ updatedOrder });
    } catch (error) {
      return res
        .status(STATUS.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  },

  deleteOrder: async (req, res) => {
    try {
      const deletedOrder = await orderRepository.deleteOrderById(req.params.id);
      return res.status(STATUS.SUCCESS).json({ deletedOrder });
    } catch (error) {
      return res
        .status(STATUS.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  },
};
