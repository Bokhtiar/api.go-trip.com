import { Schema, model } from 'mongoose'
import { IComponentCreateUpdate } from '../types/admin/component.types'

const componentSchema = new Schema<IComponentCreateUpdate>({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    icon: {
        type: String,
        trim: true,
        required: false,
    }
}, {
    timestamps: true
})

export const Component = model<IComponentCreateUpdate>("Component", componentSchema)