import { Request, Response } from "express";
import { Router } from "express";
import { User } from "../models/user";
import {createUser,getUsers} from "../controllers/userControllers"

const userRouter = Router();

userRouter.post("/", createUser);
userRouter.get("/", getUsers);

export default userRouter