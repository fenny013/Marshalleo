// Imports
const { Sequelize } = require("sequelize");
const path = require("path");
require("dotenv").config();

// Database connection
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "..", process.env.DATABASE_FILE),
  logging: false, // Remove SQL-requests logging
});

// Export
module.exports = sequelize;
