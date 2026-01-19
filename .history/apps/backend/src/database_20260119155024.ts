import Database = require("sqlite3"); // Using CommonJS import for sqlite3
import path from "path"; // Using ES module import for path
import fs from "fs"; // Using ES module import for fs

const DB_PATH = path.join(__dirname, "../../../data/database.sqlite"); // Adjusted path to database file

// Ensure the data directory exists
const dataDir = path.dirname(DB_PATH);
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

// database file 
const dbPath = path.join(DB_PATH,"pos.db");

// open database
const db = new Database(dbPath);

export  default db;

