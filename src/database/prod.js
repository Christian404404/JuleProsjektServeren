const db = require("../config/db.js");

db.prepare(
  `CREATE TABLE IF NOT EXISTS users (
id INTEGER PRIMARY KEY AUTOINCREMENT,
email TEXT UNIQUE NOT null,
password TEXT NOT null,
created_at DATETIME DEFAULT CURRENT_TIMESTAMP 
)
`
).run();
