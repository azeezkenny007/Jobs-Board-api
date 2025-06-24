import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async (): Promise<void> => {
    try {
        // Local MongoDB connection (default port: 27017)
        const mongoURL = process.env.MONGO_URL || "mongodb://localhost:27017/job-board-api";
        
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