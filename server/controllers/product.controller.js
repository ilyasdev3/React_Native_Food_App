const STATUS = require("../constant/status.constant");
const productRepository = require("../repositories/product.repository");

module.exports = {
  getProducts: async (req, res) => {
    try {
      const products = await productRepository.getAllProducts();
      return res.status(STATUS.SUCCESS).json({ products });
    } catch (error) {
      return res
        .status(STATUS.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  },

  getProductById: async (req, res) => {
    try {
      const product = await productRepository.getProductById(req.params.id);
      return res.status(STATUS.SUCCESS).json({ product });
    } catch (error) {
      return res
        .status(STATUS.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  },

  createProduct: async (req, res) => {
    try {
      const newProduct = await productRepository.createProduct(req.body);
      return res.status(STATUS.CREATED).json({ newProduct });
    } catch (error) {
      return res
        .status(STATUS.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  },

  updateProduct: async (req, res) => {
    try {
      const updatedProduct = await productRepository.updateProductById(
        req.params.id,
        req.body
      );
      return res.status(STATUS.SUCCESS).json({ updatedProduct });
    } catch (error) {
      return res
        .status(STATUS.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const deletedProduct = await productRepository.deleteProductById(
        req.params.id
      );
      return res.status(STATUS.SUCCESS).json({ deletedProduct });
    } catch (error) {
      return res
        .status(STATUS.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  },
};
