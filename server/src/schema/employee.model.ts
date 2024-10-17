import mongoose from "mongoose";

import { Document, ObjectId } from "mongoose";

export interface IEmployee extends Document {
  fullName: string;
  email: string;
  phoneNumber: string;
  jobTitle: string;
  department?: string;
  salary: number;
  hireDate: Date;
  company: ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}

const employeeSchema = new mongoose.Schema<IEmployee>(
  {
    fullName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    jobTitle: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      trim: true,
    },
    salary: {
      type: Number,
      required: true,
      min: 0,
    },
    hireDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    company:{
      type : mongoose.Schema.Types.ObjectId
    }
  },
  { timestamps: true }
);

export const employeeModel =  mongoose.model("emplyee", employeeSchema);

