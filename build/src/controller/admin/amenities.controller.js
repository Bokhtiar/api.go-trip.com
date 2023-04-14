"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Destroy = exports.Update = exports.Show = exports.Store = exports.Index = void 0;
const amenities_services_1 = require("../../services/admin/amenities.services");
const mongoose_1 = require("mongoose");
/* resource list */
const Index = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield amenities_services_1.adminAmenitesServices.findAll();
        return res.status(200).json({
            status: true,
            data: results
        });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.Index = Index;
/* store document */
const Store = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, icon } = req.body;
        /* cheek uniqu name */
        const isNameExist = yield amenities_services_1.adminAmenitesServices.findOneByKey({ name: name });
        if (isNameExist) {
            return res.status(409).json({
                status: false,
                message: "name already exist."
            });
        }
        const documents = {
            name,
            icon
        };
        yield amenities_services_1.adminAmenitesServices.storeDocuments({ documents });
        return res.status(201).json({
            status: true,
            message: "New amenities created."
        });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.Store = Store;
/* specific resource */
const Show = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield amenities_services_1.adminAmenitesServices.findById({ _id: new mongoose_1.Types.ObjectId(id) });
        return res.status(200).json({
            status: true,
            data: result
        });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.Show = Show;
/* specific resource update */
const Update = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { name, icon } = req.body;
        /* check unique name */
        const isNameExist = yield amenities_services_1.adminAmenitesServices.findOneByKey({ name: name });
        if (isNameExist && isNameExist._id.toString() !== id) {
            return res.status(409).json({
                status: false,
                message: "Already name is exist."
            });
        }
        const documents = {
            name,
            icon
        };
        yield amenities_services_1.adminAmenitesServices.findOneByUpdate({ _id: new mongoose_1.Types.ObjectId(id), documents });
        return res.status(201).json({
            status: true,
            message: "Update amenities"
        });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.Update = Update;
/* specific resoruce delete */
const Destroy = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield amenities_services_1.adminAmenitesServices.findOneByIdDelete({ _id: new mongoose_1.Types.ObjectId(id) });
        return res.status(200).json({
            status: true,
            message: "Amenities deleted."
        });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.Destroy = Destroy;
