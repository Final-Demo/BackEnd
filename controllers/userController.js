import { userModel } from "../model/userModel.js";


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

export const getUserProfile = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user.id)

    } catch (error) {

    }
}



export const updateUserProfile = (req, res, next) => {
    try {

    } catch (error) {

    }
}



export const deleteUserAccount = async (req, res, next) => {
    try {
        const { id } = req.params
        const user = await userModel.findByIdAndDelete(id)
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }
        res.status(200).json({ message: 'User deleted successfully' })

    } catch (error) {
        next(error)
    }
}