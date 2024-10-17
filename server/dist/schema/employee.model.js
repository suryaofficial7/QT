"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const employeeSchema = new mongoose_1.default.Schema({
    fullName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    jobTitle: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        trim: true,
    },
    salary: {
        type: Number,
        required: true,
        min: 0,
    },
    hireDate: {
        type: Date,
        required: true,
        default: Date.now,
    },
    company: {
        type: mongoose_1.default.Schema.Types.ObjectId
    }
}, { timestamps: true });
exports.employeeModel = mongoose_1.default.model("emplyee", employeeSchema);
