// Imports
const Product = require("../models/Product");

// Get all products
exports.getProducts = async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
};

// Add a product
exports.addProduct = async (req, res) => {
  if (req.user.role !== "admin") return res.status(403).json({ message: "Forbidden" });

  const { name, brand, price, stock } = req.body;
  const product = await Product.create({ name, brand, price, stock });

  res.json({ message: "Product added", product });
};
