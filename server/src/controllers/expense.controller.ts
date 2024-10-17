import { Request, Response } from "express";

const { expenseModel } = require("../schema/expense.model");

export const addExpense = async (req:Request, res:Response):Promise<void> => {
  try {
    const newExpense = await expenseModel.create(req.body)
    if(newExpense){
    res.json({
      status: "success",
      expense:newExpense
    });
}
  } catch (error:any) {
    res.json({
      status: "failed",
      mess: error.message,
    });
  }
};

export const deleteExpense = async (req:Request, res:Response):Promise<void> => {
  try {
    res.json({
      status: "success",
    });
  } catch (error:any) {
    res.json({
      status: "failed",
      mess: error.message,
    });
  }
};

export const singleExpense = async (req:Request, res:Response):Promise<void> => {
  try {
    res.json({
      status: "success",
    });
  } catch (error:any) {
    res.json({
      status: "failed",
      mess: error.message,
    });
  }
};

export const updateExpense = async (req:Request, res:Response):Promise<void> => {
  try {
    res.json({
      status: "success",
    });
  } catch (error:any) {
    res.json({
      status: "failed",
      mess: error.message,
    });
  }
};

export const userAllExpense = async (req:Request, res:Response):Promise<void> => {
  try {

    const userAllExpenseData = await expenseModel.find({userId:req.params.userId})

    res.json({
      status: "success",
      mess:userAllExpenseData
    });
  } catch (error:any) {
    res.json({
      status: "failed",
      mess: error.message,
    });
  }
};
