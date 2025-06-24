import { Response, Request } from "express";
import { User } from "../models/user";
import { IUser } from "../models/user";

export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await User.find()
        res.status(200).json({ message: "Users fetched successfully", users });
    }
    catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const createUser = async (req: Request<{}, {}, IUser>, res: Response): Promise<void> => {
    try {
        const { name, age, email } = req.body

        if (!name || !email) {
            res.status(400).json({ message: "Name and email are required" });
            return;
        }

        const newUser = new User({ name, age, email });
        await newUser.save();
        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}