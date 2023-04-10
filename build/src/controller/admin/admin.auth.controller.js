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
exports.register = void 0;
const bcrypt = require("bcryptjs");
const admin_services_1 = require("../../services/admin/admin.services");
const register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, phone, password, role } = req.body;
        /* avaialble account */
        const availableAccount = yield (0, admin_services_1.findOneByKey)({ email: email });
        if (availableAccount) {
            return res.status(409).json({
                status: false,
                message: "Already email exit...!"
            });
        }
        /* avaialble phone */
        const availablePhone = yield (0, admin_services_1.findOneByKey)({ phone: phone });
        if (availablePhone) {
            return res.status(409).json({
                status: false,
                message: "Already phone number exit...!"
            });
        }
        /* haspassword */
        const hashPassword = yield bcrypt.hash(password, 10);
        /* create documents*/
        const documents = {
            name,
            email,
            phone,
            password: hashPassword,
            role
        };
        yield (0, admin_services_1.storeDocuments)({ documents: Object.assign({}, documents) });
        res.status(200).json({
            status: true,
            message: "New admin created."
        });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.register = register;
