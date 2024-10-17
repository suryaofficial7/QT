"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const expense_controller_1 = require("../controllers/expense.controller");
const router = express_1.default.Router();
router.route("/add").post(expense_controller_1.addExpense);
router.route("/:id").delete(expense_controller_1.deleteExpense).get(expense_controller_1.singleExpense).put(expense_controller_1.updateExpense);
router.route("/all/:userId").get(expense_controller_1.userAllExpense);
exports.default = router;
