exports.getProfile = async (req, res, next) => {
  try {
    res.status(200).json({
      message: "Protected route accessed, user profile data",
      user: req.user,
    });
  } catch (err) {
    next(err);
  }
};
