"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRouter = void 0;
const express_1 = require("express");
const admin_middleware_1 = require("../middleware/admin.middleware");
const admin_auth_routes_1 = require("./admin/admin.auth.routes");
exports.AppRouter = (0, express_1.Router)();
exports.AppRouter.use("/admin/auth", admin_middleware_1.adminPermission, admin_auth_routes_1.AdminRouter);
