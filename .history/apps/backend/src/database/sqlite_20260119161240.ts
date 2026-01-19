import Database from "better-sqlite3";
import path from "path";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const dbPath = process.env.DB_PATH || path.join(__dirname, "pos.db");

if (!dbPath) {
  throw new Error("Database path is not defined in environment variables.");
}

const fullDbPath = path.resolve(__dirname, dbPath);
