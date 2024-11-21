import Joi from "joi";

export const propertySchema = Joi.object({
    title: Joi.string().min(3).max(100).required(),
    description: Joi.string().min(10).max(500).required(),
    location: Joi.string().min(3).max(100).required(),
    price: Joi.number().positive().required(),
    category: Joi.string().valid('Apartment','House','Studio','Shared').required(),
    images: Joi.array().items(Joi.string()).min(1).required(), // Array of image URLs
    status: Joi.string().valid('Available', 'Unavailable').default('Available'),
});
export const updatePropertySchema = Joi.object({
    title: Joi.string().min(3).max(100).required(),
    description: Joi.string().min(10).max(500).required(),
    location: Joi.string().min(3).max(100).required(),
    price: Joi.number().positive().required(),
    category: Joi.string().valid('Apartment','House','Studio','Shared').required(),
    images: Joi.array().items(Joi.string()).optional(), //Array of image URLs
    status: Joi.string().valid('Available', 'Unavailable').optional(),
})