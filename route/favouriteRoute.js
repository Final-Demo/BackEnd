import { Router } from "express";
import { getFavorites, addFavorite } from "../controllers/favoriteController.js";

const favoriteRoute = Router()

favoriteRoute.get('/favorite',getFavorites)

favoriteRoute.post('/favorite',addFavorite)


export default favoriteRoute