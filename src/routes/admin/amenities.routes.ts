import { Router } from "express";
import * as amenitiesController from '../../controller/admin/amenities.controller'
export const AmenitiesRoute : Router = Router();
AmenitiesRoute.get('/', amenitiesController.Index)