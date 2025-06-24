import { Document, Schema, model } from "mongoose";

export interface IUser extends Document{
     name:string;
     email:string;
     age:number;
}

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: false },
});

export const User = model<IUser>("User", userSchema);