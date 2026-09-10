const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");

dotenv.config();

connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
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

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`CivicFix server running on port ${PORT}`);
});