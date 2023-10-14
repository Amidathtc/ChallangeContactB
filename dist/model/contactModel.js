"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const contactModel = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    contactAvatar: {
        type: String,
        toUpperCase: String
    },
    type: {
        type: String,
    },
    phoneNumber: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        max: 11
    },
    createdAt: { type: Date, default: Date.now },
}, { timestamps: true });
exports.default = mongoose_1.default.model("contacts", contactModel);
