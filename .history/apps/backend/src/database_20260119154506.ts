import Database = require("sqlite3"); // Using CommonJS import for sqlite3
import path from "path"; // Using ES module import for path
import fs from "fs"; // Using ES module import for fs

const DB_PATH = path.join(__dirname, "../../../data/database.sqlite");
