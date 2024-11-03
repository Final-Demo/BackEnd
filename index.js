import express from 'express';
import cors from 'cors';
import mongoose  from 'mongoose';
import apartmentRoute from './route/apartmentRoute.js';


const app = express();

// Define a route handler for the default home page
app.use(apartmentRoute)


// App middleware for the server
app.use(cors())
app.use(express.json())
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
