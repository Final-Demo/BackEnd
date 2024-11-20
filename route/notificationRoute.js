import { Router } from "express";
import { getNotifications } from "../controllers/notificationController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const notificationRoute = Router();


notificationRoute.get('/notification',isAuthenticated, getNotifications)

export default notificationRoute