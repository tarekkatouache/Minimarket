import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

// Database folder
const dbDir = path.join(__dirname, "../../../database/sqlite");

// Ensure folder exists
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

// Database file
const dbPath = path.join(dbDir, "pos.db");

// Open database
const db = new Database(dbPath);

// Enable foreign keys
db.pragma("foreign_keys = ON");

export default db;
