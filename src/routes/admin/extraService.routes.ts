import { Router } from "express";
import {extraServiceValidators} from '../../validators/admin/extraServices.validators'
import * as extraServiceController from '../../controller/admin/extraService.controller'


export const ExtraServiceRoute: Router = Router()
ExtraServiceRoute.get('/', extraServiceController.Index)
ExtraServiceRoute.post('/',extraServiceValidators, extraServiceController.Store)
ExtraServiceRoute.get('/:id', extraServiceController.Show)