import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async (): Promise<void> => {
    try {
        if (!process.env.MONGO_URL) {
            throw new Error("MONGO_URL is not defined in environment variables");
        }
        const mongoURL = process.env.MONGO_URL
        
        await mongoose.connect(mongoURL, {
            serverSelectionTimeoutMS: 5000, // Fail fast if DB isn't running
        });
        
        console.log("✅ MongoDB connected successfully");
    } catch (error) {
        console.error("❌ MongoDB connection failed:", error);
        process.exit(1);
    }
};

export default connectDB