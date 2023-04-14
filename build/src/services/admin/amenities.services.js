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
exports.findOneByIdDelete = exports.findOneByUpdate = exports.storeDocuments = exports.findOneByKey = exports.findById = exports.resourceList = void 0;
const amenities_model_1 = require("../../model/amenities.model");
/* list of resource */
const resourceList = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield amenities_model_1.Amenities.find();
});
exports.resourceList = resourceList;
/* specifiic resource findOneById */
const findById = ({ _id }) => __awaiter(void 0, void 0, void 0, function* () {
    return yield amenities_model_1.Amenities.findById({ _id });
});
exports.findById = findById;
/* specific resoruce findOneByKey */
const findOneByKey = (params) => __awaiter(void 0, void 0, void 0, function* () {
    return yield amenities_model_1.Amenities.findOne(Object.assign({}, params));
});
exports.findOneByKey = findOneByKey;
/* new store document */
const storeDocuments = ({ documents }) => __awaiter(void 0, void 0, void 0, function* () {
    const newAmenites = new amenities_model_1.Amenities({
        name: documents.name,
        icon: documents.icon
    });
    return yield newAmenites;
});
exports.storeDocuments = storeDocuments;
/* specific resource updated */
const findOneByUpdate = ({ _id, documents }) => __awaiter(void 0, void 0, void 0, function* () {
    return yield amenities_model_1.Amenities.findByIdAndUpdate(_id, {
        $set: {
            name: documents.name,
            icon: documents.icon
        }
    });
});
exports.findOneByUpdate = findOneByUpdate;
/* specific resoruce delete */
const findOneByIdDelete = ({ _id }) => __awaiter(void 0, void 0, void 0, function* () {
    return yield amenities_model_1.Amenities.findByIdAndDelete({ _id });
});
exports.findOneByIdDelete = findOneByIdDelete;
