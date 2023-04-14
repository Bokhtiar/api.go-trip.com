import { Router } from "express";
import { adminPermission } from "../middleware/admin.middleware";
import { AdminRouter } from "./admin/admin.auth.routes";

export const AppRouter: Router = Router();

AppRouter.use("/admin/auth",adminPermission, AdminRouter);  