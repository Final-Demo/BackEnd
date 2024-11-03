import { Router } from "express";
import { getApartment, getApartmentById, addApartment, updateApartment, deleteApartment } from "../controllers/apartmentController.js";

const apartmentRoute = Router();

apartmentRoute.get('/apartments', getApartment);
apartmentRoute.get('/apartments/:id', getApartmentById);
apartmentRoute.post('/apartments', addApartment);
apartmentRoute.patch('/apartments/:id', updateApartment);
apartmentRoute.delete('/apartments/:id', deleteApartment);


export default apartmentRoute
