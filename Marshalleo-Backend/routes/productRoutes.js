// Imports
const express = require("express");
const { getProducts, addProduct } = require("../controllers/productController");
const authMiddleware = require("../middleware/authMiddleware");

// Setup router
const router = express.Router();
router.get("/", getProducts);
router.post("/", authMiddleware, addProduct);

// Export
module.exports = router;
