const router = require("express").Router();
const cartController = require("../controllers/cart.controller");

router.get("/get-carts", cartController.getAllCarts);
router.post("/create-cart", cartController.addToCart);
router.get("/cart/:id", cartController.getCart);
router.put("/cart/:id", cartController.updateCart);
router.delete("/cart/:id", cartController.deleteCart);

module.exports = router;
