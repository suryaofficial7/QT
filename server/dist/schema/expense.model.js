"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expenseModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const expenseSchema = new mongoose_1.default.Schema({
    amount: { type: Number, require: true },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
    },
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "userModel", // Assuming there's a User model
        required: true,
    },
}, { timestamps: true });
exports.expenseModel = mongoose_1.default.model("expense", expenseSchema);
