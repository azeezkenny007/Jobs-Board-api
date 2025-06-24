import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async(): Promise<void> =>{
    try{
        const mongoURL = process.env.MONGO_URL || "mongodb://localhost:27017/mydatabase";
        await mongoose.connect(mongoURL)
        console.log("MongoDB connected successfully");
    }catch(error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1); // Exit the process with failure
    }
}

export default connectDB