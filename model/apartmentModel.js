import { Schema,model ,Types} from "mongoose";
import {toJSON} from "@reis/mongoose-to-json";

const apartmentSchema = new Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        enum:['Apartment','House','Studio','Shared'],
        required:true
    },
    status:{
        type:String,
        enum:['Available','Unavailable'],
        default:'Available'
    },
    images:[{
        type:String,
        required:true
    }],
    user:{
        type:Types.ObjectId,
        ref:'User',
        required:true
    },
    isApproved:{
        type:Boolean,
        default:false
    },
},{timestamps:true});

apartmentSchema.plugin(toJSON);

export const apartmentModel =model('Apartment',apartmentSchema)