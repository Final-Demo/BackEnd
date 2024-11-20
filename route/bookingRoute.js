import { Router } from "express";
import { createBooking, getBookings,getMyBooking } from "../controllers/bookingController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const bookingRoute = Router()

bookingRoute.post('/booking',isAuthenticated,createBooking)

bookingRoute.get('/booking',getBookings)

bookingRoute.get('/booking/my',isAuthenticated, getMyBooking)






export default bookingRoute