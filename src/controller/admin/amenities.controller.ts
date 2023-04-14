import { Request, Response, NextFunction } from "express";

export const Index = async (req: Request, res: Response, next: NextFunction) => {
    try {
       return res.status(200).json({
            status:true,
            message: "amenities list"
        })
    } catch (error:any) {
        console.log(error);
        next(error)
    }
}
