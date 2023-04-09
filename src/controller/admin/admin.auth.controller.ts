import { Request, Response, NextFunction } from "express";

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, phone, password, role } = req.body
    

    res.status(200).json({
      status: true,
      message: "New admin created."
    })
  } catch (error: any) {
    console.log(error);
    next(error)
  }
}

