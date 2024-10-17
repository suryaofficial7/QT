import { Request, Response } from "express";
import { employeeModel } from "../schema/employee.model";
// *---------------------------------------------------------
// ! GET ALLL EMP
// *---------------------------------------------------------

export const getAllEmployee = async (req:Request, res:Response):Promise<void> => {
    try {
      const allUser = await employeeModel.find();
      res.json(allUser);
    } catch (err:any) {
        console.log(err)
      res.json({
        status: "failed",
        messgae: err.message,
      });
    }
  };

// *---------------------------------------------------------
// ! GET Single EMP
// *---------------------------------------------------------

export const getSingleEmployee = async (req:Request, res:Response):Promise<void> => {
  try {
    const id = req.params.id;
    const singleEmp = await employeeModel.findById(id);
    res.json({
      status: "success",
      data: singleEmp,
    });
  } catch (error:any) {
    res.json({
      status: "Internal Server Error",
    });
  }
};

// *---------------------------------------------------------
//! Create a New Employee
// *---------------------------------------------------------

export const createEmployee = async (req:Request, res:Response):Promise<void> => {
  try {
    const newEmp = await employeeModel.create(req.body);
    res.json({
      status: "success",
      data: newEmp,
    });
  } catch (error:any) {
    res.json({
      status: "Internal Server Error",
    });
  }
};

// *---------------------------------------------------------
// ! DELETE EMPLOYEE
// *---------------------------------------------------------

export const deleteEmployee = async (req:Request, res:Response):Promise<void> => {
        try {
          const checkEmp = await employeeModel.findById(req.params.id);
          if (!checkEmp) {
            res.json({
              status: "Failed",
              message: "No employee Found !",
            });
          } else {
            const delEmp = await employeeModel.deleteOne({ _id: req.params.id });
      
            res.json({
              status: "Success",
              messgae: "employee Deleted Succesfully",
            });
          }
        } catch (error:any) {
          res.json({
            status: "failed",
            messgae: error.message,
          });
        }
      };




// *---------------------------------------------------------
// ! Update EMPLOYEE
// *---------------------------------------------------------      
export const updateEmployee = async (req:Request, res:Response):Promise<void> => {

    try {
        const id = req.params.id;
        const data = req.body;
        const updatedUser = await employeeModel.findByIdAndUpdate(id,data)
        res.json({
            status:"updation success",
            data:updatedUser
        })
    } catch (error:any) {
        res.json({
            status: "failed",
            messgae: error.message,
          });
    }

};
