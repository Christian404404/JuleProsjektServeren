const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/auth.middleware");
const templateController = require("../controller/template.controller");

// Protected GET route
router.get("/", requireAuth, templateController.getTemplate);

// Protected POST route
router.post("/create", requireAuth, templateController.postTemplate); // "/create" will be replaced with new endpoint

module.exports = router;
