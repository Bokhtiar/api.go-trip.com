import { Types } from 'mongoose'
import {Component} from '../../model/component.model'
import {IComponent,IComponentCreateUpdate} from '../../types/admin/component.types'

/* list of resource */
export const findAll = async (): Promise<IComponent[] | []> => {
    return await Component.find()
}

/* specifiic resource findOneById */
export const findById = async ({ _id }: { _id: Types.ObjectId }): Promise<IComponent | null> => {
    return await Component.findById({ _id })
}

/* specific resoruce findOneByKey */
export const findOneByKey = async (params: any): Promise<IComponent | null> => {
    return await Component.findOne({ ...params })
}

/* new store document */
export const storeDocuments = async ({ documents }: { documents: IComponentCreateUpdate }): Promise<IComponent | null> => {
    const newDocument = new Component({
        name: documents.name,
        icon: documents.icon
    })
    return await newDocument.save()
}

/* specific resource updated */
export const findOneByUpdate = async ({ _id, documents }: { _id: Types.ObjectId, documents: IComponentCreateUpdate }): Promise<IComponent | null> => {
    return await Component.findByIdAndUpdate(_id, {
        $set: {
            name: documents.name,
            icon: documents.icon
        }
    })
}

/* specific resoruce delete */
export const findOneByIdDelete = async ({ _id }: { _id: Types.ObjectId }): Promise<IComponent | null> => {
    return await Component.findByIdAndDelete({ _id })
}

export const adminComponentServices = {
    findAll,
    findById,
    findOneByKey,
    storeDocuments,
    findOneByUpdate,
    findOneByIdDelete
}