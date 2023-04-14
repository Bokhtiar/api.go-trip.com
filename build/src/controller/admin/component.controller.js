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
exports.Store = exports.Index = void 0;
const component_services_1 = require("../../services/admin/component.services");
/* resource list */
const Index = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return res.status(200).json({
            status: true,
            message: "Copoment List",
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
