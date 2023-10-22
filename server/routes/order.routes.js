const router = require("express").Router();
const orderController = require("../controllers/order.controller");

router.get("/get-orders", orderController.getOrders);
router.post("/create-order", orderController.createOrder);
router.get("/order/:id", orderController.getOrderById);
router.put("/order/:id", orderController.updateOrder);

module.exports = router;
