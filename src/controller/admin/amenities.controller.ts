import { Request, Response, NextFunction } from "express";
import { IAmenitiesCreateUpdate } from "../../types/admin/amenities.types";
import { adminAmenitesServices } from "../../services/admin/amenities.services";
import { Types } from "mongoose";


/* resource list */
export const Index = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const results = await adminAmenitesServices.findAll()
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

        /* cheek uniqu name */
        const isNameExist = await adminAmenitesServices.findOneByKey({ name: name })
        if (isNameExist) {
            return res.status(409).json({
                status: false,
                message: "name already exist."
            })
        }

        const documents: IAmenitiesCreateUpdate = {
            name,
            icon
        }

        await adminAmenitesServices.storeDocuments({ documents });

        return res.status(201).json({
            status: true,
            message: "New amenities created."
        })
    } catch (error: any) {
        console.log(error);
        next(error)
    }
}

/* specific resource */
export const Show = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const result = await adminAmenitesServices.findById({ _id: new Types.ObjectId(id) })
        return res.status(200).json({
            status: true,
            data: result
        })
    } catch (error: any) {
        console.log(error);
        next(error)
    }
}

/* specific resource update */
export const Update = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const { name, icon } = req.body

        /* check unique name */
        const isNameExist = await adminAmenitesServices.findOneByKey({ name:name });
        if (isNameExist && isNameExist._id.toString() !== id) {
            return res.status(409).json({
                status: false,
                message: "Already name is exist."
            })
        }

        const documents: IAmenitiesCreateUpdate = {
            name,
            icon
        }

        await adminAmenitesServices.findOneByUpdate({ _id: new Types.ObjectId(id), documents })

        return res.status(201).json({
            status:true,
            message: "Update amenities"
        })
    } catch (error: any) {
        console.log(error);
        next(error)
    }
}

/* specific resoruce delete */
export const Destroy = async(req:Request, res:Response, next:NextFunction) => {
    try {
        const {id} = req.params
        await adminAmenitesServices.findOneByIdDelete({_id: new Types.ObjectId(id)});
        return res.status(200).json({
            status: true,
            message: "Amenities deleted."
        })
    } catch (error:any) {
        console.log(error);
        next(error)
    }
}