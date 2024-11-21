import { Router } from "express";
import { countBooking, createBooking, getBookings,getMyBooking, updateBooking } from "../controllers/bookingController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const bookingRoute = Router()

bookingRoute.post('/booking',isAuthenticated,createBooking)

bookingRoute.get('/booking/count',countBooking)

bookingRoute.get('/booking',getBookings)

bookingRoute.get('/booking/my',isAuthenticated, getMyBooking)

bookingRoute.patch('/booking/:id',updateBooking)









export default bookingRoute