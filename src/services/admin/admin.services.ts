import { Types } from 'mongoose'
import { Admin } from '../../model/admin.model'
import { IAdminCreateUpdate, IAdmin } from '../../types/admin/admin.types'

/* specific resource findOneByKey */
export const findOneByKey = async (params: any): Promise<IAdmin | null> => {
    return await Admin.findOne({ ...params });
}

/*specific resource findOneById */
export const findOneById = async ({ _id }: { _id: Types.ObjectId }): Promise<IAdmin | null> => {
    return await Admin.findById({ _id });
}

/* store new document */
export const storeDocuments = async ({ documents }: { documents: IAdminCreateUpdate }): Promise<IAdmin | null> => {
    const newAdmin = new Admin({
        name: documents.name,
        email: documents.email,
        phone: documents.phone,
        password: documents.password,
        role: documents.role,
    })
   return await newAdmin.save();
}


