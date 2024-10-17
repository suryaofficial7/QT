"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEmployee = exports.deleteEmployee = exports.createEmployee = exports.getSingleEmployee = exports.getAllEmployee = void 0;
const employee_model_1 = require("../schema/employee.model");
// *---------------------------------------------------------
// ! GET ALLL EMP
// *---------------------------------------------------------
const getAllEmployee = async (req, res) => {
    try {
        const allUser = await employee_model_1.employeeModel.find();
        res.json(allUser);
    }
    catch (err) {
        console.log(err);
        res.json({
            status: "failed",
            messgae: err.message,
        });
    }
};
exports.getAllEmployee = getAllEmployee;
// *---------------------------------------------------------
// ! GET Single EMP
// *---------------------------------------------------------
const getSingleEmployee = async (req, res) => {
    try {
        const id = req.params.id;
        const singleEmp = await employee_model_1.employeeModel.findById(id);
        res.json({
            status: "success",
            data: singleEmp,
        });
    }
    catch (error) {
        res.json({
            status: "Internal Server Error",
        });
    }
};
exports.getSingleEmployee = getSingleEmployee;
// *---------------------------------------------------------
//! Create a New Employee
// *---------------------------------------------------------
const createEmployee = async (req, res) => {
    try {
        const newEmp = await employee_model_1.employeeModel.create(req.body);
        res.json({
            status: "success",
            data: newEmp,
        });
    }
    catch (error) {
        res.json({
            status: "Internal Server Error",
        });
    }
};
exports.createEmployee = createEmployee;
// *---------------------------------------------------------
// ! DELETE EMPLOYEE
// *---------------------------------------------------------
const deleteEmployee = async (req, res) => {
    try {
        const checkEmp = await employee_model_1.employeeModel.findById(req.params.id);
        if (!checkEmp) {
            res.json({
                status: "Failed",
                message: "No employee Found !",
            });
        }
        else {
            const delEmp = await employee_model_1.employeeModel.deleteOne({ _id: req.params.id });
            res.json({
                status: "Success",
                messgae: "employee Deleted Succesfully",
            });
        }
    }
    catch (error) {
        res.json({
            status: "failed",
            messgae: error.message,
        });
    }
};
exports.deleteEmployee = deleteEmployee;
// *---------------------------------------------------------
// ! Update EMPLOYEE
// *---------------------------------------------------------      
const updateEmployee = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const updatedUser = await employee_model_1.employeeModel.findByIdAndUpdate(id, data);
        res.json({
            status: "updation success",
            data: updatedUser
        });
    }
    catch (error) {
        res.json({
            status: "failed",
            messgae: error.message,
        });
    }
};
exports.updateEmployee = updateEmployee;
