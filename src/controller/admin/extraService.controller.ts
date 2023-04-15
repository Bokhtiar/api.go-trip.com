import { Request, Response, NextFunction } from "express";
import { IExaraServiceCreateUpdate } from "../../types/admin/extra.service";
import { adminExtraService } from "../../services/admin/extraService.services";
import { Types } from "mongoose";

/* list of resource */
export const Index = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const results = await adminExtraService.findAll()

        return res.status(200).json({
            status: true,
            data: results
        })
    } catch (error: any) {
        console.log(error);
        next(error)
    }
}

/* store resoruce */
export const Store = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const { name, icon } = req.body

        /* cheeck name unique */
        const checkUniqueName = await adminExtraService.findOneByKey({ name: name })
        if (checkUniqueName) {
            return res.status(409).json({
                status: false,
                message: "Extra-services name already exist."
            })
        }

        const documents: IExaraServiceCreateUpdate = {
            name,
            icon
        }

        await adminExtraService.storeDocument({ documents: documents })

        return res.status(201).json({
            status: true,
            message: "Extra service created."
        })
    } catch (error: any) {
        console.log(error);
        next(error)
    }
}

/* specific reosurce */
export const Show = async(req:Request, res:Response, next:NextFunction) => {
    try {
        const {id} = req.params
        const result = await adminExtraService.findOneById({_id: new Types.ObjectId(id)})

        return res.status(200).json({
            status: true,
            data: result
        })
    } catch (error:any) {
        console.log(error);
        next(error)
    }
}

/* specific resource update */
export const Update = async(req:Request, res:Response, next:NextFunction) => {
    try {
        const {id} = req.params
        const {name, icon} = req.body

        /* cheeck unique name */
        const isNameExist = await adminExtraService.findOneByKey({ name: name })
        if (isNameExist && isNameExist._id.toString() !== id) {
            return res.status(409).json({
                status: false,
                message: "Already name is exist."
            })
        }

        const documents : IExaraServiceCreateUpdate = {
            name,
            icon
        }

        await adminExtraService.findOneByAndUpdate({_id: new Types.ObjectId(id), documents })

        res.status(201).json({
            status: true,
            message: "ExtraService updated."
        })
    } catch (error:any) {
        console.log(error);
        next(error)
    }
}

/* specific resource destroy */
export const Destroy = async(req:Request, res:Response, next:NextFunction) => {
    try {
        const {id} = req.params
        
        await adminExtraService.findOneByAndDestroy({_id: new Types.ObjectId(id)})

        return res.status(201).json({
            status: true,
            message: "ExtraService deleted."
        })
    } catch (error:any) {
        console.log(error);
        next(error)
    }
}