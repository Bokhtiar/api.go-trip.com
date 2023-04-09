import { Request, Response, NextFunction } from "express";

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({
      status:true,
      message: "New admin registration."
    })
  } catch (error:any) {
    console.log(error);
    next(error)
  }
}

