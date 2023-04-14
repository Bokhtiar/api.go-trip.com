import { Types } from 'mongoose'
import { Amenities } from '../../model/amenities.model'
import { IAmenities, IAmenitiesCreateUpdate } from '../../types/admin/amenities.types'

/* list of resource */
export const findAll = async (): Promise<IAmenities[] | []> => {
    return await Amenities.find()
}

/* specifiic resource findOneById */
export const findById = async ({ _id }: { _id: Types.ObjectId }): Promise<IAmenities | null> => {
    return await Amenities.findById({ _id })
}

/* specific resoruce findOneByKey */
export const findOneByKey = async (params: any): Promise<IAmenities | null> => {
    return await Amenities.findOne({ ...params })
}

/* new store document */
export const storeDocuments = async ({ documents }: { documents: IAmenitiesCreateUpdate }): Promise<IAmenities | null> => {
    const newAmenites = new Amenities({
        name: documents.name,
        icon: documents.icon
    })
    return await newAmenites.save()
}

/* specific resource updated */
export const findOneByUpdate = async ({ _id, documents }: { _id: Types.ObjectId, documents: IAmenitiesCreateUpdate }): Promise<IAmenities | null> => {
    return await Amenities.findByIdAndUpdate(_id, {
        $set: {
            name: documents.name,
            icon: documents.icon
        }
    })
}

/* specific resoruce delete */
export const findOneByIdDelete = async ({ _id }: { _id: Types.ObjectId }): Promise<IAmenities | null> => {
    return await Amenities.findByIdAndDelete({ _id })
}

export const adminAmenitesServices = {
    findAll,
    findById,
    findOneByKey,
    storeDocuments,
    findOneByUpdate,
    findOneByIdDelete
}