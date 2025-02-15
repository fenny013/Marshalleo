// Imports
const express = require("express");
const { register, login } = require("../controllers/authController");

// Setup router
const router = express.Router();
router.post("/register", register);
router.post("/login", login);

// Export
module.exports = router;