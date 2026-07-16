import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to database...");
  } catch (error) {
    console.error(error);
    console.log("failed connecting to database...");
    process.exit(1);
  }
};
