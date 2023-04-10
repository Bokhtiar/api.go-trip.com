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
exports.register = exports.login = void 0;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const admin_services_1 = require("../../services/admin/admin.services");
/* admin login */
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        /* request form value */
        const { email, password } = req.body;
        /* avialble account */
        const availableAccount = yield (0, admin_services_1.findOneByKey)({ email: email });
        if (!availableAccount) {
            return res.status(404).json({
                status: true,
                message: "Invalid email or password...!"
            });
        }
        /* compare with password */
        const result = yield bcrypt.compare(password, availableAccount === null || availableAccount === void 0 ? void 0 : availableAccount.password);
        if (!result) {
            return res.status(404).json({
                status: false,
                message: "Invalid email or password...!",
            });
        }
        /* Generate JWT token */
        const token = yield jwt.sign({
            id: availableAccount === null || availableAccount === void 0 ? void 0 : availableAccount._id,
            name: availableAccount === null || availableAccount === void 0 ? void 0 : availableAccount.name,
            role: availableAccount === null || availableAccount === void 0 ? void 0 : availableAccount.role,
        }, process.env.JWT_SECRET, { expiresIn: "1d" });
        return res.status(201).json({
            status: true,
            data: token,
            message: "Login successfully...!"
        });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.login = login;
/* admin registration */
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
        res.status(201).json({
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
