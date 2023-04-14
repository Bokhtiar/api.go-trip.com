const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
import { Request, Response, NextFunction } from "express";
import { IAdminCreateUpdate } from "../../types/admin.types";
import { findOneByKey, storeDocuments } from "../../services/admin/admin.services";

/* admin login */
export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    /* request form value */
    const { email, password } = req.body

    /* avialble account */
    const availableAccount = await findOneByKey({ email: email })
    if (!availableAccount) {
      return res.status(404).json({
        status: true,
        message: "Invalid email or password...!"
      })
    }

     /* compare with password */
     const result = await bcrypt.compare(password, availableAccount?.password);
     if (!result) {
       return res.status(404).json({
         status: false,
         message: "Invalid email or password...!",
       });
     }

     /* Generate JWT token */
    const token = await jwt.sign(
      {
        id: availableAccount?._id,
        name: availableAccount?.name,
        role: availableAccount?.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.status(201).json({
      status: true,
      data: token,
      message: "Login successfully...!"
    })
  } catch (error: any) {
    console.log(error);
    next(error)
  }
}

/* admin registration */
export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, phone, password, role } = req.body

    /* avaialble account */
    const availableAccount = await findOneByKey({ email: email })
    if (availableAccount) {
      return res.status(409).json({
        status: false,
        message: "Already email exit...!"
      })
    }

    /* avaialble phone */
    const availablePhone = await findOneByKey({ phone: phone })
    if (availablePhone) {
      return res.status(409).json({
        status: false,
        message: "Already phone number exit...!"
      })
    }

    /* haspassword */
    const hashPassword = await bcrypt.hash(password, 10);

    /* create documents*/
    const documents: IAdminCreateUpdate = {
      name,
      email,
      phone,
      password: hashPassword,
      role
    }
    await storeDocuments({ documents: { ...documents } })

    res.status(201).json({
      status: true,
      message: "New admin created."
    })
  } catch (error: any) {
    console.log(error);
    next(error)
  }
}

