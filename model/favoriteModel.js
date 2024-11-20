import { Schema,Types,model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const favoriteSchema = new Schema({
    user: {
        type: Types.ObjectId,
        ref: 'User',
        required: true
    },
    apartment: {
        type: Types.ObjectId,
        ref: 'Apartment',
        required: true
    }
}, { timestamps: true })

favoriteSchema.plugin(toJSON)

export const favoriteModel = model('Favorite', favoriteSchema)