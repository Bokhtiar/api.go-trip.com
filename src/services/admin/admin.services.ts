import { Types } from 'mongoose'
import { Admin } from '../../model/admin.model'
import { IAdmin } from '../../types/admin.types'

/* specific resource findOneByKey */
export const findOneByKey = async (params: any): Promise<IAdmin | null> => {
    return await Admin.findOne({ ...params });
}

/*specific resource findOneById */
export const findOneById = async ({ _id }: { _id: Types.ObjectId }): Promise<IAdmin | null> => {
    return await Admin.findById({ _id });
}