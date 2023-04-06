import { Router } from "express";
import { AdminRouter } from "./admin/admin.auth.routes";

export const AppRouter: Router = Router();

AppRouter.use("/admin/auth", AdminRouter);  