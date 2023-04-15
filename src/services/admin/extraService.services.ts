import { Types } from 'mongoose'
import { ExtraService } from '../../model/extra.service.model'
import { IExaraService, IExaraServiceCreateUpdate } from '../../types/admin/extra.service'

/* findAll resource list*/
const findAll = async (): Promise<IExaraService[] | []> => {
    return await ExtraService.find()
}

/* findOneById */
const findOneById = async ({ _id }: { _id: Types.ObjectId }): Promise<IExaraService | null> => {
    return await ExtraService.findById({ _id })
}

/* findOneByKey */
const findOneByKey = async (params: any) => {
    return await ExtraService.findOne({ ...params })
}

/* store new document */
const storeDocument = async ({ documents }: { documents: IExaraServiceCreateUpdate }): Promise<IExaraService | null> => {
    const newStoreDocument = new ExtraService({
        name: documents.name,
        icon: documents.icon
    })
    return await newStoreDocument.save()
}

/* findOneByResourceUpdate */
const findOneByAndUpdate = async ({ _id, documents }: { _id: Types.ObjectId, documents: IExaraServiceCreateUpdate }): Promise<IExaraService | null> => {
    return await ExtraService.findByIdAndUpdate(_id, {
        $set: {
            name: documents.name,
            icon: documents.icon
        }
    })
}

/* findOneByAndRemove */
const findOneByAndDestroy = async({_id}: {_id: Types.ObjectId}):Promise<IExaraService | null> => {
    return await ExtraService.findByIdAndDelete({_id})
}

export const adminExtraService = {
    findAll,
    findOneById,
    findOneByKey,
    storeDocument,
    findOneByAndUpdate,
    findOneByAndDestroy,
}