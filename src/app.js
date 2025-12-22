// templates are gitignored, access to the templates is dev only
// this is just for ease of development and testing when I add more features
const express = require("express");
const app = express();

const authRoutes = require("./routes/auth.routes.js");
const userRoutes = require("./routes/user.routes.js");
// const templateRoutes = require('./routes/template.routes');

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
// app.use('/api/template', templateRoutes);

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    error: err.messsage || "Server error, or the hamster is out of peanuts.",
  });
});

module.exports = app;
