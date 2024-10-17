import { Router } from "express";
import { deleteUser, getAllUser, getSingleUser, loginUser, registerUser } from "../controllers/user.controller";

const express = require("express");

const router:Router = express.Router()



// ! All GET Routes
router.route("/all").get(getAllUser)
router.route("/single/:id").get(getSingleUser)


// ! All POST Routes
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);


// ! All Delete Routes
router.route("/delete/:id").delete(deleteUser);


export default router