const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller.js");
const authenticate = require("../middleware/auth.middleware.js");

router.post("/register", authController.register);
router.post("/login", authController.login);

// Testing protected route to verify access control is working
router.get("/profile", authenticate, (req, res) => {
  res.json({
    message: `Protected profile data, Hello ${req.user.email}`,
    user: req.user,
  });
});

module.exports = router;
