const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/user.routes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

module.exports = app;
