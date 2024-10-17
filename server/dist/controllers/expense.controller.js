"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAllExpense = exports.updateExpense = exports.singleExpense = exports.deleteExpense = exports.addExpense = void 0;
const { expenseModel } = require("../schema/expense.model");
const addExpense = async (req, res) => {
    try {
        const newExpense = await expenseModel.create(req.body);
        if (newExpense) {
            res.json({
                status: "success",
                expense: newExpense
            });
        }
    }
    catch (error) {
        res.json({
            status: "failed",
            mess: error.message,
        });
    }
};
exports.addExpense = addExpense;
const deleteExpense = async (req, res) => {
    try {
        res.json({
            status: "success",
        });
    }
    catch (error) {
        res.json({
            status: "failed",
            mess: error.message,
        });
    }
};
exports.deleteExpense = deleteExpense;
const singleExpense = async (req, res) => {
    try {
        res.json({
            status: "success",
        });
    }
    catch (error) {
        res.json({
            status: "failed",
            mess: error.message,
        });
    }
};
exports.singleExpense = singleExpense;
const updateExpense = async (req, res) => {
    try {
        res.json({
            status: "success",
        });
    }
    catch (error) {
        res.json({
            status: "failed",
            mess: error.message,
        });
    }
};
exports.updateExpense = updateExpense;
const userAllExpense = async (req, res) => {
    try {
        const userAllExpenseData = await expenseModel.find({ userId: req.params.userId });
        res.json({
            status: "success",
            mess: userAllExpenseData
        });
    }
    catch (error) {
        res.json({
            status: "failed",
            mess: error.message,
        });
    }
};
exports.userAllExpense = userAllExpense;
