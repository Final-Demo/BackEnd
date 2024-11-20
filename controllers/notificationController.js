import { notificationModel } from "../model/notificationModel.js"

export const getNotifications = async (req, res, next) => {
    try {
        const notifications = await notificationModel.find({user: req.auth.id})
        res.status(200).json({message:"Notifications found successfully",notifications})
    } catch (error) {
        next(error)
    }
}