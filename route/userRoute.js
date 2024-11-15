import { Router } from "express";
import { verifyEmail } from "../controllers/userController.js";

const userRoute = Router()

userRoute.get('/verify-email/:token',verifyEmail)


export default userRoute