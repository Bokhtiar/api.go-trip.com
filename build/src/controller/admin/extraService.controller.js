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
exports.Show = exports.Store = exports.Index = void 0;
const extraService_services_1 = require("../../services/admin/extraService.services");
const mongoose_1 = require("mongoose");
/* list of resource */
const Index = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield extraService_services_1.adminExtraService.findAll();
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
/* store resoruce */
const Store = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, icon } = req.body;
        /* cheeck name unique */
        const checkUniqueName = yield extraService_services_1.adminExtraService.findOneByKey({ name: name });
        if (checkUniqueName) {
            return res.status(409).json({
                status: false,
                message: "Extra-services name already exist."
            });
        }
        const documents = {
            name,
            icon
        };
        yield extraService_services_1.adminExtraService.storeDocument({ documents: documents });
        return res.status(201).json({
            status: true,
            message: "Extra service created."
        });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.Store = Store;
/* specific reosurce */
const Show = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield extraService_services_1.adminExtraService.findOneById({ _id: new mongoose_1.Types.ObjectId(id) });
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
