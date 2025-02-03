import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Ensure environment variables are loaded

export const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || process.env.Mongodb_Url;
    if (!mongoURI) {
      throw new Error("MongoDB URI is missing! Check .env file.");
    }

    const conn = await mongoose.connect(mongoURI); // No need for `useNewUrlParser` and `useUnifiedTopology`

    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1); // Stop the server on DB failure
  }
};
