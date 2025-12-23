const express = require("express");
const router = express.Router();

const requireAuth = require("../middleware/auth.middleware.js");
const userController = require("../controllers/user.controller.js");

router.get("/profile", requireAuth, userController.getProfile);

module.exports = router;
