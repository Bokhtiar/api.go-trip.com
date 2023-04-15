import { Schema, model } from 'mongoose'
import { IExaraServiceCreateUpdate } from '../types/admin/extra.service'

const SchemaextraService = new Schema<IExaraServiceCreateUpdate>({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    icon: {
        type: String,
        trim: true,
        required: false
    }
}, {
    timestamps: true
})

export const ExtraService = model<IExaraServiceCreateUpdate>("ExtraService", SchemaextraService)