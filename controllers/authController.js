import { userModel } from "../model/userModel.js"
import { loginvalidator, registervalidator, resetPasswordvalidator, updatePasswordvalidator } from '../validator/user-validator.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import crypto from 'crypto'
import { sendEmail } from "../utils/mail.js"
import { resetPasswordTemplate, Verification_Email_Template } from "../utils/email_templete.js"

export const signupUser = async (req, res, next) => {
    try {
        const { error, value } = registervalidator.validate(req.body);
        if (error) {
            return res.status(422).json(error)
        }
        // check if the user exist
        const user = await userModel.findOne({ email: value.email })
        if (user) {
            return res.status(400).json({ message: 'User already exist' })
        }
        const hashpassword = await bcrypt.hashSync(value.password, 10)

        const verificationToken = crypto.randomBytes(16).toString('hex')

        const newUser = await userModel.create({
            ...value,
            password: hashpassword,
            verificationToken: verificationToken,
            tokenExpiration: Date.now() + 30 * 60 * 1000
        })

        //    const hello = await sendVerificationEmail(value.email,verificationToken)
        //    console.log(hello)
        const hello = await sendEmail.sendMail({
            from: process.env.SMTP_USER,
            to: value.email,
            subject: "Verify your email address",
            html: Verification_Email_Template(value.firstName, verificationToken)
        })

        console.log(newUser)
        res.status(201).json('Registration successful. Please check your email to verify your account.')

    } catch (error) {
        next(error)
    }
}
export const loginUser = async (req, res, next) => {
    try {
        const { error, value } = loginvalidator.validate(req.body);
        if (error) {
            return res.status(422).json(error)
        }
        // find a user by their email
        const user = await userModel.findOne({ email: value.email })
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }
        // check if the password is correct
        const isMatch = await bcrypt.compare(value.password, user.password)
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid password' })
        }

        // check if the user is verified
        if (!user.isVerified) {
            return res.status(401).json({ message: 'User is not verified' })
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: 1 * 24 * 60 * 60 })
        res.cookie('jwt', token, {
            maxAge: 1 * 24 * 60 * 60 * 1000,
            httpOnly: true
        })

        return res.status(200).json({ message: 'Login successful', token })
    } catch (error) {
        next(error)
    }
}

export const forgotPassword = async (req, res, next) => {
    try {
        const { error, value } = updatePasswordvalidator.validate(req.body);
        if (error) {
            return res.status(422).json(error)
        }
        // find a user by their email
        const user = await userModel.findOne({ email: value.email })
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }
        // Generate a reset password token and expiration date
        const resetPasswordToken = crypto.randomBytes(16).toString('hex');
        const resetPasswordExpiration = Date.now() + 30 * 60 * 1000; // 30 minutes

        // Update the user's reset password token and expiration date
        user.resetPasswordToken = resetPasswordToken;
        user.resetPasswordExpiration = resetPasswordExpiration;
        await user.save();

        // Send an email to the user with a link to reset their password
        await sendEmail.sendMail({
            from: process.env.SMTP_USER,
            to: value.email,
            subject: "Reset your password",
            html: resetPasswordTemplate(user.firstName, resetPasswordToken)
        });
        res.status(201).json('Please check your email to reset your password.')
    } catch (error) {

    }
}
export const resetPassword = async (req, res, next) => {
    try {
        const token = req.params.token
        const { error, value } = resetPasswordvalidator.validate(req.body);
        if (error) {
            return res.status(422).json(error)
        }
        const user = userModel.findOne({ resetPasswordToken: token, resetPasswordExpiration: { $gt: Date.now() } })
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }
        const hashpassword = await bcrypt.hashSync(value.password, 10)

        user.password = hashpassword
        user.resetPasswordToken = null
        user.resetPasswordExpiration = null
        await user.save()

        await sendEmail.sendMail({
            from: process.env.SMTP_USER,
            to: user.email,
            subject: "Reset your password",
            html: resetPasswordTemplate(user.firstName)
        })

        res.status(201).json('Password reset successful')
    } catch (error) {

    }
}

export const logout = async(req,res,next)=>{
    res.cookieClear()
}
 