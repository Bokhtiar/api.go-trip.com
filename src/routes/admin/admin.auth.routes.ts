import { Router } from "express";
import * as AdminController from "../../controller/admin/admin.auth.controller";
import { adminRegistrationValidators } from "../../validators/admin/auth.validators";

export const AdminRouter: Router = Router();
AdminRouter.post("/register", adminRegistrationValidators, AdminController.register);
