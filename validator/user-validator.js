
import Joi from "joi";

export const registervalidator =Joi.object({
    firstName:Joi.string().required(),
    lastName:Joi.string().required(),
    email:Joi.string().email().required().lowercase(),
    password:Joi.string().required().min(8),
    phoneNumber:Joi.string().required().pattern(/^[0-9]+$/).length(10),
    role:Joi.string().valid('user','landlord','admin').default('user')
    
})

export const updatevalidator = Joi.object({
    firstName:Joi.string(),
    lastName:Joi.string(),
    phoneNumber:Joi.string().pattern(/^[0-9]+$/).length(10),
})

export const loginvalidator = Joi.object({
    email:Joi.string().email().required().lowercase(),
    password:Joi.string().required().min(8)
})

export const updatePasswordvalidator = Joi.object({
    email:Joi.string().email().required().lowercase(),
})

export const resetPasswordvalidator = Joi.object({
    password:Joi.string().required().min(8),
    confirmPassword:Joi.string().valid(Joi.ref('password')).required()
})
    