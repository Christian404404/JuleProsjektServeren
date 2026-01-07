// template.controller.js
// Async controller functions for future-proofing

// GET example
exports.getExample = async (req, res) => {
  try {
    // req.user available from JWT middleware
    // TODO: Fill in logic for this endpoint
    res.json({
      message: "GET template route success!",
      user: req.user, // Optional
      data: null, // Replace with actual data
    });
  } catch (err) {
    next(err);
  }
};

// POST example
exports.postTemplate = async (req, res, next) => {
  try {
    // TODO: Use req.body to create/update resources
    res.json({
      message: "POST template route success!",
      user: req.user, // Optional
      data: null, // Replace with actual data
    });
  } catch (err) {
    next(err);
  }
};
