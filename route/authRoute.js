import { Router } from "express";
import { loginUser, resetPassword, signupUser,forgotPassword } from "../controllers/authController.js";

const authRoute = Router()

authRoute.post('/auth/signup',signupUser)

authRoute.post('/auth/login',loginUser)

authRoute.post('/auth/forgot-password',forgotPassword)

authRoute.post('/auth/reset-password/:token',resetPassword)


export default authRoute