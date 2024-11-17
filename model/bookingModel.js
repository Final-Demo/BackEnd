import { Schema,model } from "mongoose";

const bookingSchema = new Schema({
    apartment:{
        type:Schema.Types.ObjectId,
        ref:'Apartment',
        required:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    landlord:{
        type:Schema.Types.ObjectId,
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
},{timesmtamps:true})