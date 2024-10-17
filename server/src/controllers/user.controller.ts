// *---------------------------------------------------------
// ! Register User

import { userModel } from "../schema/user.model";
import bcrypt from "bcrypt";
import { Request, Response } from "express";
import jwt from "jsonwebtoken"

const jwtSecret:any = process.env.JWT_SECRET_CODE;

// *---------------------------------------------------------
export const registerUser = async (req:Request, res:Response):Promise<void> => {
  try {
    // console.log(req.body)

    const {fullName , email , contact } = req.body

    const encrptPwd = await bcrypt.hash(req.body.password, 10);
    
    const newUser = await userModel.create({
      fullName: fullName,
      email: email,
      contact: contact,
      password: encrptPwd,
    });
    res.json({
      status: "success",
      data: newUser,
    });
  } catch (error:any) {
    res.json({
      status: "failed",
      message: error.message,
    });
  }
};

// *---------------------------------------------------------
// ! User Login
// *---------------------------------------------------------

export const loginUser = async (req: Request, res: Response):Promise<void> => {
  try {
    // console.log(req.body)
    const getData = await userModel.findOne({
      email: req.body.email,
    });

    if (!getData) {
      res.json({
        status: "failed",
        verified: false,
      });
    } else {
      console.log(getData);
      const comparedPwd = await bcrypt.compare(req.body.password, getData.password);
      if (comparedPwd) {
        res.json({
          token: jwt.sign({ getData }, jwtSecret, {
            expiresIn: "1d",
          }),
          status: "success",
          data: getData,
          verified: true,
        });
      } else {
        res.json({
          status: "failed",
          verified: false,
        });
      }
    }
  } catch (error:any) {
    res.json({
      status: "failed",
      message: error.message,
    });
  }
};

// *---------------------------------------------------------
// ! Get All Users
// *---------------------------------------------------------

export const getAllUser = async (req: Request, res: Response):Promise<void> => {
  try {
    const allUser = await userModel.find();
    res.json(allUser);
  } catch (err:any) {
    res.json({
      status: "failed",
      messgae: err.message,
    });
  }
};

// *---------------------------------------------------------
// ! Get Single User
// *---------------------------------------------------------

export const getSingleUser = async (req: Request, res: Response):Promise<void> => {
  try {
    const id = req.params.id;
    const singleUser = await userModel.findById(id);
    res.json(singleUser);
  } catch (error:any) {
    res.json({
      status: "failed",
      messgae: error.message,
    });
  }
};

// *---------------------------------------------------------
// ! Delete User
// *---------------------------------------------------------

export const deleteUser = async (req: Request, res: Response):Promise<void> => {
  try {
    const checkUser = await userModel.findById(req.params.id);
    if (!checkUser) {
      res.json({
        status: "Failed",
        message: "No user Found !",
      });
    } else {
      const delUser = await userModel.deleteOne({ _id: req.params.id });

      res.json({
        status: "Success",
        messgae: "User Deleted Succesfully",
      });
    }
  } catch (error:any) {
    res.json({
      status: "failed",
      messgae: error.message,
    });
  }
};
