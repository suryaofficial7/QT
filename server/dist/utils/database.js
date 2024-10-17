"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.db = mongoose_1.default.connect(`mongodb://127.0.0.1:27017/quicktrack`)
    .then((data) => { console.log(`Connected to ${data.connection.host}`); })
    .catch((e) => { console.log(e); });
