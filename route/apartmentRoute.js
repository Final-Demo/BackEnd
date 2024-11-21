import { Router } from "express";
import { getApartment, getApartmentById, addApartment, updateApartment, deleteApartment, approveProperty, getMyApartment, countApartment } from "../controllers/apartmentController.js";
import { upload } from "../middlewares/upload.js";
import { isAuthenticated } from "../middlewares/auth.js";


const apartmentRoute = Router();

// get total number of properties
apartmentRoute.get('/apartments/total',countApartment)

// Get all properties
apartmentRoute.get('/apartments', getApartment);

// Get a single property by ID
apartmentRoute.get('/apartments/:id', getApartmentById);

// Create a new property
apartmentRoute.post('/apartments',isAuthenticated,upload.array('images',3),addApartment);

// Update a property
apartmentRoute.patch('/apartments/:id',isAuthenticated,upload.array('images',3), updateApartment);

// get only ma apartment created by the user
apartmentRoute.get('/apartments/my',isAuthenticated, getMyApartment)

// Approve property (Admin functionality)
apartmentRoute.patch('/apartments/:id',isAuthenticated, approveProperty);

// Delete a property
apartmentRoute.delete('/apartments/:id', deleteApartment);



export default apartmentRoute
