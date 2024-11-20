import Joi from "joi";

export const bookingSchemavalidator = Joi.object({
    apartmentId:Joi.string().required(),
    notes:Joi.string().optional(),
    rejectReason:Joi.string().optional(),
})