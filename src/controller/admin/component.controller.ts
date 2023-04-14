import { Response, Request, NextFunction } from "express";
import { IComponentCreateUpdate } from "../../types/admin/component.types";
import { adminComponentServices } from "../../services/admin/component.services";

/* resource list */
export const Index = async (req: Request, res: Response, next: NextFunction) => {
    try {
        return res.status(200).json({
            status: true,
            message: "Copoment List",
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