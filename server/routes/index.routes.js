const router = require("express").Router();
const authRoutes = require("./auth.routes");
const productRoutes = require("./product.routes");
const orderRoutes = require("./order.routes");
const cartRoutes = require("./cart.routes");
const userRoutes = require("./user.routes");

router.use("/auth", authRoutes);
router.use("/product", productRoutes);
router.use("/order", orderRoutes);
router.use("/cart", cartRoutes);
router.use("/user", userRoutes);

module.exports = router;
