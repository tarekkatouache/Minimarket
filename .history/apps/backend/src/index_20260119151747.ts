import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON bodies

app.get("/", (req: Request, res: Response) => {
  res.send({ message: "Hello from the backend!" });
});

app.listen(PORT, () => {
  console.log(`Server Backend is running on http://localhost:${PORT}`);
}
