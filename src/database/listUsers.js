const db = require("../config/db");

// Get all users
const users = db.prepare("SELECT id, email, created_at FROM users").all();

if (users.length === 0) {
  console.log("No users found in the database.");
} else {
  console.log("Users in database:");
  users.forEach((user) => {
    console.log(
      `ID: ${user.id}, Email: ${user.email}, Created At: ${user.created_at}`
    );
  });
}
