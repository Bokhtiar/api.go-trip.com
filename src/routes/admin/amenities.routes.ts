import { Router } from "express";
import { amenitiesValidators } from "../../validators/admin/amenities.validators";
import * as amenitiesController from '../../controller/admin/amenities.controller';

export const AmenitiesRoute : Router = Router();
AmenitiesRoute.get('/', amenitiesController.Index)
AmenitiesRoute.post('/', amenitiesValidators, amenitiesController.Store)
AmenitiesRoute.get('/:id', amenitiesController.Show)
AmenitiesRoute.put('/:id',amenitiesValidators, amenitiesController.Update)
AmenitiesRoute.delete('/:id', amenitiesController.Destroy)