const db = require("../config/db");

// Example: '%@test.com' will delete all emails ending with @test.com
const emailPattern = "%@test.com";

const stmt = db.prepare("DELETE FROM users WHERE email LIKE ?");
const result = stmt.run(emailPattern);

console.log(`Deleted ${result.changes} user(s) matching "${emailPattern}"`);
