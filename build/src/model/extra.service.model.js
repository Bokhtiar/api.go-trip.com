"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtraService = void 0;
const mongoose_1 = require("mongoose");
const SchemaextraService = new mongoose_1.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    icon: {
        type: String,
        trim: true,
        required: false
    }
}, {
    timestamps: true
});
exports.ExtraService = (0, mongoose_1.model)("ExtraService", SchemaextraService);
