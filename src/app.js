// templates are gitignored, access to the templates is dev only
// this is just for ease of development and testing when I add more features

const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // Current frontend, adjust as needed later.
    credentials: true,
  })
);

app.use(express.json());

const authRoutes = require("./routes/auth.routes.js");
const userRoutes = require("./routes/user.routes.js");
// const templateRoutes = require('./routes/template.routes');

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
// app.use('/api/template', templateRoutes);

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    error:
      err.message ||
      "Server error, developer Catgirl might be upset and is intentionally blocking your request/access.",
  });
});

module.exports = app;
