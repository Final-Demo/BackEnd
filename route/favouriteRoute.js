import { Router } from "express";
import { getFavorites, addFavorite } from "../controllers/favoriteController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const favoriteRoute = Router()

favoriteRoute.get('/favorite',isAuthenticated,getFavorites)

favoriteRoute.post('/favorite/:id',isAuthenticated,addFavorite)


export default favoriteRoute