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
exports.adminComponentServices = exports.findOneByIdDelete = exports.findOneByUpdate = exports.storeDocuments = exports.findOneByKey = exports.findById = exports.findAll = void 0;
const component_model_1 = require("../../model/component.model");
/* list of resource */
const findAll = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield component_model_1.Component.find();
});
exports.findAll = findAll;
/* specifiic resource findOneById */
const findById = ({ _id }) => __awaiter(void 0, void 0, void 0, function* () {
    return yield component_model_1.Component.findById({ _id });
});
exports.findById = findById;
/* specific resoruce findOneByKey */
const findOneByKey = (params) => __awaiter(void 0, void 0, void 0, function* () {
    return yield component_model_1.Component.findOne(Object.assign({}, params));
});
exports.findOneByKey = findOneByKey;
/* new store document */
const storeDocuments = ({ documents }) => __awaiter(void 0, void 0, void 0, function* () {
    const newDocument = new component_model_1.Component({
        name: documents.name,
        icon: documents.icon
    });
    return yield newDocument.save();
});
exports.storeDocuments = storeDocuments;
/* specific resource updated */
const findOneByUpdate = ({ _id, documents }) => __awaiter(void 0, void 0, void 0, function* () {
    return yield component_model_1.Component.findByIdAndUpdate(_id, {
        $set: {
            name: documents.name,
            icon: documents.icon
        }
    });
});
exports.findOneByUpdate = findOneByUpdate;
/* specific resoruce delete */
const findOneByIdDelete = ({ _id }) => __awaiter(void 0, void 0, void 0, function* () {
    return yield component_model_1.Component.findByIdAndDelete({ _id });
});
exports.findOneByIdDelete = findOneByIdDelete;
exports.adminComponentServices = {
    findAll: exports.findAll,
    findById: exports.findById,
    findOneByKey: exports.findOneByKey,
    storeDocuments: exports.storeDocuments,
    findOneByUpdate: exports.findOneByUpdate,
    findOneByIdDelete: exports.findOneByIdDelete
};
