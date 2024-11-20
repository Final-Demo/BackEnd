import { expressjwt } from "express-jwt";
import { userModel } from "../model/userModel.js";

export const isAuthenticated = expressjwt({
    secret: process.env.JWT_SECRET,
    algorithms: ['HS256'],
    requestProperty: 'auth'
})

export const hasPermission = (action)=>{
    return async (req, res, next) => {
        try {
            const user = await userModel.findById(req.user.id)
            const permission = permissions.find(value=>value.role===user.role);
            if (!permission) {
                return res.status(403).json("No permission found")
            }
            if (permission.actions.includes(action)) {
                next()
            }else{
                return res.status(403).json("Action not Allowed")
            }
        } catch (error) {
          next(error)  
        }
    }
}