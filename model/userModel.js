import { toJSON } from "@reis/mongoose-to-json";
import { Schema, model } from "mongoose";

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'landlord', 'admin'],
        default: 'user'
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    verificationToken: {
        type: String,
        default: null
    },
    tokenExpiration: {
        type: Date,
        default: null
    },
    resetPasswordToken: {
        type: String,
        default: null
    },
    resetPasswordExpiration: {
        type: Date,
        default: null
    },
    

}, { timestamps: true })

userSchema.plugin(toJSON)

export const userModel = model('User', userSchema);