const Database = require("better-sqlite3");
const path = require("path");

const dbPath = path.join(__dirname, "../database/auth.db");
const db = new Database(dbPath);

console.log("Connected to the SQLite database");

module.exports = db;
