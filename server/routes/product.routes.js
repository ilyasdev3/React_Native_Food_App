const router = require("express").Router();
const productController = require("../controllers/product.controller");

router.get("/get-products", productController.getProducts);
router.post("/create-product", productController.createProduct);
router.get("/product/:id", productController.getProductById);
router.put("/product/:id", productController.updateProduct);
router.delete("/product/:id", productController.deleteProduct);

module.exports = router;
