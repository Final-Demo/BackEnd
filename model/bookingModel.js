import { toJSON } from "@reis/mongoose-to-json";
import { Schema,model,Types } from "mongoose";

const bookingSchema = new Schema({
    apartmentId:{
        type:Types.ObjectId,
        ref:'Apartment',
        required:true
    },
    user:{
        type:Types.ObjectId,
        ref:'User',
        required:true
    },
    status:{
        type:String,
        enum:['pending','accepted','rejected'],
        default:'pending'
    },
    notes:{
        type:String
    },
    rejectReason:{
        type:String
    },
},{timesmtamps:true})

bookingSchema.plugin(toJSON)

export const bookingModel = model('Booking',bookingSchema)