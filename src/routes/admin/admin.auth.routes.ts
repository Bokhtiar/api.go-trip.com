import { Router } from "express";
import * as AdminController from "../../controller/admin/admin.auth.controller";
import { adminLoginValidators, adminRegistrationValidators } from "../../validators/admin/auth.validators";

export const AdminRouter: Router = Router();
AdminRouter.post("/login", adminLoginValidators, AdminController.login);
AdminRouter.post("/register", adminRegistrationValidators, AdminController.register);
