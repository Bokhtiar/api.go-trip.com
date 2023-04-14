import Schema from "async-validator";
import { NextFunction, Request, Response } from "express";

/* admin login validators */
export const componentValidators = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const descriptor = <any>{
        name: {
            type: "string",
            required: true,
            message: "name is required.",
        },
    };

    /* Execute the validator */
    const validator = new Schema(descriptor);

    validator.validate({ ...req.body }, (errors: any) => {
        if (errors) {
            return res.status(422).json({
                status: false,
                errors,
            });
        }
        next();
    });
};