import { Router } from "express";
import { getApartment, getApartmentById, addApartment, updateApartment, deleteApartment, approveProperty } from "../controllers/apartmentController.js";
import { upload } from "../middlewares/upload.js";


const apartmentRoute = Router();

// Get all properties
apartmentRoute.get('/apartments', getApartment);

// Get a single property by ID
apartmentRoute.get('/apartments/:id', getApartmentById);

// Create a new property
apartmentRoute.post('/apartments',upload.array('images',3),addApartment);

// Update a property
apartmentRoute.patch('/apartments/:id', updateApartment);

// Approve property (Admin functionality)
apartmentRoute.patch('/apartments/:id', approveProperty);

// Delete a property
apartmentRoute.delete('/apartments/:id', deleteApartment);


export default apartmentRoute
