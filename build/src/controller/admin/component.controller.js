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
const component_services_1 = require("../../services/admin/component.services");
const mongoose_1 = require("mongoose");
/* resource list */
const Index = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield component_services_1.adminComponentServices.findAll();
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
        /* cheeck unique name */
        const isNameExist = yield component_services_1.adminComponentServices.findOneByKey({ name: name });
        if (isNameExist) {
            return res.status(409).json({
                status: true,
                message: "Already name is exist."
            });
        }
        const documents = {
            name,
            icon
        };
        yield component_services_1.adminComponentServices.storeDocuments({ documents });
        return res.status(201).json({
            status: true,
            message: "Componet create."
        });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.Store = Store;
/* specific resource show */
const Show = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield component_services_1.adminComponentServices.findById({ _id: new mongoose_1.Types.ObjectId(id) });
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
/* specific reosurce update */
const Update = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { name, icon } = req.body;
        /* check unique name */
        const isNameExist = yield component_services_1.adminComponentServices.findOneByKey({ name: name });
        if (isNameExist && isNameExist._id.toString() !== id) {
            return res.status(409).json({
                status: false,
                message: "Already name is exist."
            });
        }
        const documents = {
            name, icon
        };
        yield component_services_1.adminComponentServices.findOneByUpdate({ _id: new mongoose_1.Types.ObjectId(id), documents });
        return res.status(201).json({
            status: true,
            message: "Component Updated."
        });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.Update = Update;
const Destroy = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield component_services_1.adminComponentServices.findOneByIdDelete({ _id: new mongoose_1.Types.ObjectId(id) });
        return res.status(200).json({
            status: true,
            message: "Component deleted."
        });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.Destroy = Destroy;
