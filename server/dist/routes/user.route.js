"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("../controllers/user.controller");
const express = require("express");
const router = express.Router();
// ! All GET Routes
router.route("/all").get(user_controller_1.getAllUser);
router.route("/single/:id").get(user_controller_1.getSingleUser);
// ! All POST Routes
router.route("/register").post(user_controller_1.registerUser);
router.route("/login").post(user_controller_1.loginUser);
// ! All Delete Routes
router.route("/delete/:id").delete(user_controller_1.deleteUser);
exports.default = router;
