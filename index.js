import express from 'express';
import cors from 'cors';
import mongoose  from 'mongoose';
import apartmentRoute from './route/apartmentRoute.js';
import authRoute from './route/authRoute.js';
import userRoute from './route/userRoute.js';
import bookingRoute from './route/bookingRoute.js';
import notificationRoute from './route/notificationRoute.js';
import favoriteRoute from './route/favouriteRoute.js';


const app = express();

app.use(express.json())
app.use(cors())

// Define a route handler for the default home page
app.use(apartmentRoute)
app.use(authRoute)
app.use(userRoute)
app.use(bookingRoute)
app.use(notificationRoute)
app.use(favoriteRoute)


// App middleware for the server
const PORT = 3000;


const connectDB = async()=>{
    try {
       await mongoose.connect(process.env.MONGO_URI);
       console.log("Database is connected") 
       //Start the server only after a successful database connection
       app.listen(PORT, () => {
           console.log(`App is running on port ${PORT}`)
       });
    } catch (error) {
        console.log("Database connection failed:",error);
        process.exit(1)
    }
}
connectDB()
