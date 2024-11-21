import { userModel } from "../model/userModel.js";
import { updatevalidator } from "../validator/user-validator.js";

// verify email
export const verifyEmail = async (req, res, next) => {
    try {
        const token = req.params.token
        // find the user based on the verification token
        const userToken = await userModel.findOne({ verificationToken: token, tokenExpiration: { $gt: Date.now() } })
        if (!userToken) {
            return res.status(404).json("Your verification link may have expired. Please click on resend for verify your Email")
        } else if (userToken.isVerified) {
            return res.status(200).json("Your Email is already verified. Please login")
        } else {
            userToken.isVerified = true
            userToken.verificationToken = null
            userToken.tokenExpiration = null
            await userToken.save()
        }
        res.status(200).json("Your account has been successfully verified")
    } catch (error) {
        next(error)
    }
}

// get user
export const getUserProfile = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.auth.id)
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }
        res.status(200).json(user)

    } catch (error) {
        next(error)
    }
}


// update user
export const updateUserProfile =  async (req, res, next) => {
    try {
        const { id } = req.params
        const {error,value}= updatevalidator.validate(req.body);
        if (error) {
            return res.status(400).json(error);
        }
        const user = await userModel.findByIdAndUpdate(id,{user: req.auth.id}, value, { new: true })
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}


// delete user
export const deleteUserAccount = async (req, res, next) => {
    try {
        const { id } = req.params
        const user = await userModel.findByIdAndDelete(id,{user: req.auth.id})
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }
        res.status(200).json({ message: 'User deleted successfully' })

    } catch (error) {
        next(error)
    }
}

// get user count
export const getUsercount = async(req,res,next)=>{
    try {
         // Get the count of all users in the database
        const count = await userModel.countDocuments()

        // Send the count as the response
        res.status(200).json(count)
    } catch (error) {
        next(error)
   }
}

// get all users
export const getAllUsers = async (req, res, next) => {
    try {
        const users = await userModel.find()
        if (!users) {
            return res.status(404).json({ message: 'Users not found' })
        }
        res.status(200).json(users)
    } catch (error) {
        next(error)
    }
}