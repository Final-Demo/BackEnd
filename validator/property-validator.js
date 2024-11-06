import Joi from "joi";

export const propertySchema = Joi.object({
    title: Joi.string().min(3).max(100).required(),
    description: Joi.string().min(10).max(500).required(),
    location: Joi.string().min(3).max(100).required(),
    price: Joi.number().positive().required(),
    landlord: Joi.string().required(), // Assuming this is the ObjectId of the user
    category: Joi.string().valid('apartment','house','studio','shared room').required(),
    images: Joi.array().items(Joi.string()).min(1).required(), // Array of image URLs
    status: Joi.string().valid('available', 'not available').default('available'),
    features:Joi.object({
        isFurnished: Joi.boolean().default(false),
        isAirConditionerAvailable:Joi.boolean().default(false),
        isParkingAvailable:Joi.boolean().default(false),
    }).optional(),
    amenities:Joi.array().items(Joi.string()).optional(),
});
export const updatePropertySchema = Joi.object({
    title: Joi.string().min(3).max(100).required(),
    description: Joi.string().min(10).max(500).required(),
    location: Joi.string().min(3).max(100).required(),
    price: Joi.number().positive().required(),
    category: Joi.string().valid('apartment','house','studio','shared room').required(),
    images: Joi.array().items(Joi.string().uri()).required(), // Array of image URLs
    status: Joi.string().valid('available', 'not available').optional(),
    features:Joi.object({
        isFurnished: Joi.boolean().default(false),
        isAirConditionerAvailable:Joi.boolean().default(false),
        isParkingAvailable:Joi.boolean().default(false),
    }).optional(),
    amenities:Joi.array().items(Joi.string()).optional(),
})