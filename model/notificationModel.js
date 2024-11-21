import { Schema,Types,model} from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const notificationSchema = new Schema({
    user:{
        type:Types.ObjectId,
        ref:'User',
        required:true
    },
    type:{
        type:String,
        required:true,
        enum:['apartment','booking'] 
    },
    message:{
        type:String,
        required:true
    },
    isRead:{
        type:Boolean,
        default:false
    },
},{timestamps:true})

notificationSchema.plugin(toJSON)

export const notificationModel = model('Notification',notificationSchema)