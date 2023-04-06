import { Request, Response, NextFunction } from "express";

export const index = async (
  req: Request,
  res: Response,
  next: NextFunction
) => { 
  try { 
    res.status(200).json({
      status: true,
      message: "message"
    });
  } catch (error: any) {
    if (error) {
      console.log(error);
      next(error);
    }
  }
};

