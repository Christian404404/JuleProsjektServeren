const bcrypt = require("bcrypt");
const db = require("../config/db.js");
const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_EXPIRES_IN } = process.env;

const SALT_ROUNDS = 12;

exports.register = ({ email, password }) => {
  if (!email || !password) {
    const error = new Error("Email and password are required!");
    error.statusCode = 400;
    throw error;
  }

  const existingUser = db
    .prepare("SELECT id FROM users WHERE email = ?")
    .get(email);

  if (existingUser) {
    const error = new Error("User already exists");
    error.statusCode = 409;
    throw error;
  }

  // Hash and salt
  const hashedPassword = bcrypt.hashSync(password, SALT_ROUNDS);

  const result = db
    .prepare("INSERT INTO users (email, password) VALUES (?, ?)")
    .run(email, hashedPassword);

  return {
    id: result.lastInsertRowid,
    email,
    message: "User was successfully registered!",
  };
};

exports.login = async ({ email, password }) => {
  if (!email || !password) {
    const error = new Error("Email and password are required!");
    error.statusCode = 400;
    throw error;
  }

  const user = db.prepare("SELECT * FROM users WHERE email = ?").get(email);

  if (!user) {
    const error = new Error("Invalid email or password");
    error.statusCode = 401;
    throw error;
  }

  const isMatch = bcrypt.compareSync(password, user.password);
  if (!isMatch) {
    const error = new Error("Invalid email or password");
    error.statusCode = 401;
    throw error;
  }

  // JWT Token creation
  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });

  return {
    id: user.id,
    email: user.email,
    message: "Successful login!",
    token,
  };
};
