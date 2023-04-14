import { Response, Request, NextFunction } from "express";
import { IComponentCreateUpdate } from "../../types/admin/component.types";
import { adminComponentServices } from "../../services/admin/component.services";
import { Types } from "mongoose";

/* resource list */
export const Index = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const results = await adminComponentServices.findAll()
        return res.status(200).json({
            status: true,
            data: results
        })
    } catch (error: any) {
        console.log(error);
        next(error)
    }
}

/* store document */
export const Store = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, icon } = req.body

        /* cheeck unique name */
        const isNameExist = await adminComponentServices.findOneByKey({ name: name })
        if (isNameExist) {
            return res.status(409).json({
                status: true,
                message: "Already name is exist."
            })
        }

        const documents: IComponentCreateUpdate = {
            name,
            icon
        }
        await adminComponentServices.storeDocuments({ documents })
        return res.status(201).json({
            status: true,
            message: "Componet create."
        })
    } catch (error: any) {
        console.log(error);
        next(error)
    }
}

/* specific resource show */
export const Show = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const result = await adminComponentServices.findById({ _id: new Types.ObjectId(id) })
        return res.status(200).json({
            status: true,
            data: result
        })
    } catch (error: any) {
        console.log(error);
        next(error)
    }
}

/* specific reosurce update */
export const Update = async(req:Request, res:Response, next:NextFunction) => { 
    try {
        const {id} = req.params
        const {name, icon} = req.body

         /* check unique name */
         const isNameExist = await adminComponentServices.findOneByKey({ name: name })
         if (isNameExist && isNameExist._id.toString() !== id) {
             return res.status(409).json({
                 status: false,
                 message: "Already name is exist."
             })
         }

         const documents: IComponentCreateUpdate = {
             name,icon
         }

         await adminComponentServices.findOneByUpdate({_id: new Types.ObjectId(id), documents})

         return res.status(201).json({
             status: true,
             message: "Component Updated."
         })
    } catch (error:any) {
        console.log(error);
        next(error)
    }
}

export const Destroy = async(req:Request, res:Response, next:NextFunction) => {
    try {
        const {id} = req.params
        await adminComponentServices.findOneByIdDelete({_id: new Types.ObjectId(id)})
        return res.status(200).json({
            status:true,
            message: "Component deleted."
        })
    } catch (error:any) {
        console.log(error);
        next(error)
    }
}