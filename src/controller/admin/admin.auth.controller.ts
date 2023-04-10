const bcrypt = require("bcryptjs");
import { Request, Response, NextFunction } from "express";
import { IAdminCreateUpdate } from "../../types/admin.types";
import { findOneByKey, storeDocuments } from "../../services/admin/admin.services";

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

    res.status(200).json({
      status: true,
      message: "New admin created."
    })
  } catch (error: any) {
    console.log(error);
    next(error)
  }
}

