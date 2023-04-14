import { Router } from "express";
import * as amenitiesController from '../../controller/admin/amenities.controller'
export const AmenitiesRoute : Router = Router();

AmenitiesRoute.get('/', amenitiesController.Index)
AmenitiesRoute.post('/', amenitiesController.Store)
AmenitiesRoute.get('/:id', amenitiesController.Show)
AmenitiesRoute.put('/:id', amenitiesController.Update)
AmenitiesRoute.delete('/:id', amenitiesController.Destroy)