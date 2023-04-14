"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Amenities = void 0;
const mongoose_1 = require("mongoose");
const amenitiesSchema = new mongoose_1.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    icon: {
        type: String,
        trim: true,
        required: false
    }
}, {
    timestamps: true
});
exports.Amenities = (0, mongoose_1.model)("Amenities", amenitiesSchema);
