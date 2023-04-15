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
exports.adminExtraService = void 0;
const extra_service_model_1 = require("../../model/extra.service.model");
/* findAll resource list*/
const findAll = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield extra_service_model_1.ExtraService.find();
});
/* findOneById */
const findOneById = ({ _id }) => __awaiter(void 0, void 0, void 0, function* () {
    return yield extra_service_model_1.ExtraService.findById({ _id });
});
/* findOneByKey */
const findOneByKey = (params) => __awaiter(void 0, void 0, void 0, function* () {
    return yield extra_service_model_1.ExtraService.findOne(Object.assign({}, params));
});
/* store new document */
const storeDocument = ({ documents }) => __awaiter(void 0, void 0, void 0, function* () {
    const newStoreDocument = new extra_service_model_1.ExtraService({
        name: documents.name,
        icon: documents.icon
    });
    return yield newStoreDocument.save();
});
/* findOneByResourceUpdate */
const findOneByAndUpdate = ({ _id, documents }) => __awaiter(void 0, void 0, void 0, function* () {
    return yield extra_service_model_1.ExtraService.findByIdAndUpdate(_id, {
        $set: {
            name: documents.name,
            icon: documents.icon
        }
    });
});
/* findOneByAndRemove */
const findOneByAndDestroy = ({ _id }) => __awaiter(void 0, void 0, void 0, function* () {
    return yield extra_service_model_1.ExtraService.findByIdAndDelete({ _id });
});
exports.adminExtraService = {
    findAll,
    findOneById,
    findOneByKey,
    storeDocument,
    findOneByAndUpdate,
    findOneByAndDestroy,
};
