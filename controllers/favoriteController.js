import { favoriteModel } from "../model/favoriteModel.js";

export const addFavorite = async (req, res, next) => {
    try {
        const  apartmentId  = req.params.id;
        const user = req.auth.id
        console.log(apartmentId,user)
        const favorite = await favoriteModel.findOne({ user, apartment: apartmentId })
        if (favorite) {
            return res.status(400).json({ message: 'Apartment already favorited' })
        }
        const newFavorite = await favoriteModel.create({ user, apartment: apartmentId })

        res.status(201).json({ message: 'Apartment favorited successfully', newFavorite })
    } catch (error) {
        next(error)
    }
}

export const getFavorites = async (req, res, next) => {
    try {
        const favorites = await favoriteModel.find({ user: req.auth.id }).populate('apartment')
        res.status(200).json({ message: 'Favorites found successfully', favorites })
    } catch (error) {
        next(error)
    }
}

export const deleteFavorite = async (req, res, next) => {
    try {
        const { id } = req.params
        const favorite = await favoriteModel.findByIdAndDelete({ _id: id, user: req.auth._id })
        if (!favorite) {
            return res.status(404).json({ message: 'Favorite not found' })
        }
        res.status(200).json({ message: 'Favorite deleted successfully' })
    } catch (error) {
        next(error)
    }
}