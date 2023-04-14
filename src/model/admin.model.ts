import { Schema, model } from 'mongoose'
import { IAdminCreateUpdate } from '../types/admin/admin.types'

const AdminSchema: Schema = new Schema<IAdminCreateUpdate>({
    name: {
        type: String,
        trim: true,
        require: true
    },
    phone: {
        type: Number,
        trim: true,
        require: true
    },
    email: {
        type: String,
        trim: true,
        require: true
    },
    password: {
        type: String,
        trim: true,
        require: true
    },
    role: {
        type: String,
        default: "admin",
    }
}, {
    timestamps: true
})

export const Admin = model<IAdminCreateUpdate>("Admin", AdminSchema);