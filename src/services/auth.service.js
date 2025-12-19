const bcrypt = require("bcrypt");

const SALT_ROUNDS = 12;

exports.register = async ({ email, password }) => {
  if (!email || !password) {
    const error = new Error("Email and password are required!");
    error.statusCode = 400;
    throw error;
  }

  // Hash and salt
  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  // Temp test user for testing
  return {
    id: 1,
    email,
    password: hashedPassword, // Strictly for testing, will remove in prod
    message:
      "Test user registered successfully! Use a real database later.(Password hashed)",
  };
};

exports.login = async ({ email, password }) => {
  if (!email || !password) {
    const error = new Error("Email and password are required!");
    error.statusCode = 400;
    throw error;
  }

  // Test stored hash for testing(pretending this came from a DB)
  const storedHashedPassword = await bcrypt.hash(
    "adminpassword123",
    SALT_ROUNDS
  );

  const isMatch = await bcrypt.compare(password, storedHashedPassword);

  if (!isMatch) {
    const error = new Error("Invalid email or password");
    error.statusCode = 401;
    throw error;
  }

  return {
    message:
      "Test user logged in successfullty! Implementing real user validation later.",
    token: "test-jwt-token",
  };
};
