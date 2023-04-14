import { Router } from "express";
import * as ComponentController from '../../controller/admin/component.controller'

export const ComponentRoutes :Router = Router()
ComponentRoutes.get("/", ComponentController.Index)
ComponentRoutes.post("/", ComponentController.Store)
ComponentRoutes.get("/:id", ComponentController.Show)
ComponentRoutes.put("/:id", ComponentController.Update)
ComponentRoutes.delete("/:id", ComponentController.Destroy)