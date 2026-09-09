const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to CivicFix API",
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "CivicFix API is healthy",
  });
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`CivicFix server running on port ${PORT}`);
});