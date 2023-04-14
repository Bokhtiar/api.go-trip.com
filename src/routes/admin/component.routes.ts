import { Router } from "express";
import * as ComponentController from '../../controller/admin/component.controller'

export const ComponentRoutes :Router = Router()
ComponentRoutes.get("/", ComponentController.Index)
ComponentRoutes.post("/", ComponentController.Store)