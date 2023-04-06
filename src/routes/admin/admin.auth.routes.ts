import { Router } from "express";
import * as AdminController from '../../controller/admin/admin.auth.controller'

export const AdminRouter: Router = Router();

AdminRouter.get('/', AdminController.index);