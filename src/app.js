const express = require("express");
const authRoutes = require("./routes/auth.routes");
const errorMiddleware = require("./middleware/error.middleware");

const app = express();

// Parsing JSON request
app.use(express.json());

// Routes for auth
app.use("/api/auth", authRoutes);

// We handle errors here
app.use(errorMiddleware);

module.exports = app;
