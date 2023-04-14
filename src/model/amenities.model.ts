import { Schema, model } from 'mongoose'
import { IAmenitiesCreateUpdate, IAmenities } from '../types/admin/amenities.types'

const amenitiesSchema = new Schema<IAmenitiesCreateUpdate>({
    name: {
        type: String,
        trim: true,
        required: true
    },
    icon: {
        type: String,
        trim: true,
        required: false
    }
},{
    timestamps: true
})

export const Amenities = model<IAmenities>("Amenities", amenitiesSchema)