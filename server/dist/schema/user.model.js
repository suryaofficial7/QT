"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    fullName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    contact: {
        type: String,
        require: true,
    },
    displayName: {
        type: String,
    },
    subscription: {
        type: Number,
        default: 0,
    },
    img: {
        type: String,
        default: null
    },
    bio: {
        type: String,
        default: "I am A user of QuickTrack..."
    }
}, { timestamps: true });
exports.userModel = mongoose_1.default.model("user", userSchema);
