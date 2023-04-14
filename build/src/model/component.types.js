"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
const mongoose_1 = require("mongoose");
const componentSchema = new mongoose_1.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    icon: {
        type: String,
        trim: true,
        required: false,
    }
}, {
    timestamps: true
});
exports.Component = (0, mongoose_1.model)("Component", componentSchema);
