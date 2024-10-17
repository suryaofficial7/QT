import mongoose from "mongoose";

import { Document, ObjectId } from "mongoose";

export interface IExpense extends Document {
  amount: number;
  description: string;
  category: string;
  date?: Date;
  userId: ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}


const expenseSchema = new mongoose.Schema<IExpense>(
  {
    amount: { type: Number, require: true },

    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userModel", // Assuming there's a User model
      required: true,
    },
  },
  { timestamps: true }
);

export const expenseModel =  mongoose.model("expense", expenseSchema);
