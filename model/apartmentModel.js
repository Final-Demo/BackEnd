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
    user:{
        type:Types.ObjectId,
        ref:'User',
        required:true
    },
    images:[{
        type:String,
        required:true
    }],
    category:{
        type:String,
        enum:['apartment','house','studio','shared'],
        required:true
    },
    features:{
        isFurnished:{type:Boolean,default:false},
        isParkingAvailable:{type:Boolean,default:false},
        isAirConditionerAvailable:{type:Boolean,default:false}
    },
    amenities:[{
        type:String
    }],
    status:{
        type:String,
        enum:['available','not available'],
        default:'available'
    },
    isApproved:{
        type:Boolean,
        default:false
    },
},{timestamps:true});

apartmentSchema.plugin(toJSON);

export const apartmentModel =model('Apartment',apartmentSchema)