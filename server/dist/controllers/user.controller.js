"use strict";
// *---------------------------------------------------------
// ! Register User
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.getSingleUser = exports.getAllUser = exports.loginUser = exports.registerUser = void 0;
const user_model_1 = require("../schema/user.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwtSecret = process.env.JWT_SECRET_CODE;
// *---------------------------------------------------------
const registerUser = async (req, res) => {
    try {
        // console.log(req.body)
        const { fullName, email, contact } = req.body;
        const encrptPwd = await bcrypt_1.default.hash(req.body.password, 10);
        const newUser = await user_model_1.userModel.create({
            fullName: fullName,
            email: email,
            contact: contact,
            password: encrptPwd,
        });
        res.json({
            status: "success",
            data: newUser,
        });
    }
    catch (error) {
        res.json({
            status: "failed",
            message: error.message,
        });
    }
};
exports.registerUser = registerUser;
// *---------------------------------------------------------
// ! User Login
// *---------------------------------------------------------
const loginUser = async (req, res) => {
    try {
        // console.log(req.body)
        const getData = await user_model_1.userModel.findOne({
            email: req.body.email,
        });
        if (!getData) {
            res.json({
                status: "failed",
                verified: false,
            });
        }
        else {
            console.log(getData);
            const comparedPwd = await bcrypt_1.default.compare(req.body.password, getData.password);
            if (comparedPwd) {
                res.json({
                    token: jsonwebtoken_1.default.sign({ getData }, jwtSecret, {
                        expiresIn: "1d",
                    }),
                    status: "success",
                    data: getData,
                    verified: true,
                });
            }
            else {
                res.json({
                    status: "failed",
                    verified: false,
                });
            }
        }
    }
    catch (error) {
        res.json({
            status: "failed",
            message: error.message,
        });
    }
};
exports.loginUser = loginUser;
// *---------------------------------------------------------
// ! Get All Users
// *---------------------------------------------------------
const getAllUser = async (req, res) => {
    try {
        const allUser = await user_model_1.userModel.find();
        res.json(allUser);
    }
    catch (err) {
        res.json({
            status: "failed",
            messgae: err.message,
        });
    }
};
exports.getAllUser = getAllUser;
// *---------------------------------------------------------
// ! Get Single User
// *---------------------------------------------------------
const getSingleUser = async (req, res) => {
    try {
        const id = req.params.id;
        const singleUser = await user_model_1.userModel.findById(id);
        res.json(singleUser);
    }
    catch (error) {
        res.json({
            status: "failed",
            messgae: error.message,
        });
    }
};
exports.getSingleUser = getSingleUser;
// *---------------------------------------------------------
// ! Delete User
// *---------------------------------------------------------
const deleteUser = async (req, res) => {
    try {
        const checkUser = await user_model_1.userModel.findById(req.params.id);
        if (!checkUser) {
            res.json({
                status: "Failed",
                message: "No user Found !",
            });
        }
        else {
            const delUser = await user_model_1.userModel.deleteOne({ _id: req.params.id });
            res.json({
                status: "Success",
                messgae: "User Deleted Succesfully",
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
exports.deleteUser = deleteUser;
