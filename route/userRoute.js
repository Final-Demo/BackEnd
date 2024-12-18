import { Router } from "express";
import { verifyEmail, getUserProfile, updateUserProfile, deleteUserAccount, getUsercount, getAllUsers, } from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const userRoute = Router()

userRoute.get('/verify-email/:token',verifyEmail)

userRoute.get('/user/count',isAuthenticated, getUsercount)

userRoute.get('/user/all',isAuthenticated, getAllUsers)

userRoute.get('/user',isAuthenticated, getUserProfile)

userRoute.delete('/user',isAuthenticated,updateUserProfile )

userRoute.patch('/user',isAuthenticated, deleteUserAccount )



export default userRoute