const Product = require("../Model/Product");

module.exports = {
  createProduct: async (product) => {
    try {
      const newProduct = await Product.create(product);
      return newProduct;
    } catch (error) {
      throw error;
    }
  },
  getProductById: async (id) => {
    try {
      const product = await Product.findById(id);
      return product;
    } catch (error) {
      throw error;
    }
  },
  getAllProducts: async () => {
    try {
      const products = await Product.find();
      return products;
    } catch (error) {
      throw error;
    }
  },
  updateProductById: async (id, product) => {
    try {
      const product = await Product.findByIdAndUpdate(id, product);
      return product;
    } catch (error) {
      throw error;
    }
  },
  deleteProductById: async (id) => {
    try {
      const product = await Product.findByIdAndDelete(id);
      return product;
    } catch (error) {
      throw error;
    }
  },
};
