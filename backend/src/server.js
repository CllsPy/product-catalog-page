import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 5001;

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(`We got a new request ${req.method} and ${req.url}`)
  next();
})

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log(`server is running... PORT:`, PORT);
});
