//? ----All Imports-----------------------------------------------------------------------------------------
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv"; // for hiding data Keys
import {db} from "./utils/database.js"
import bodyParser from 'body-parser'
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import fs from "fs"

import userRoute from "./routes/user.route.js"
import employeeRoute from "./routes/employee.route.js"
import expenseRoute from "./routes/expense.route.js"


const app: Express = express();

//? ------All configurations---------------------------------------------------------------------------------------
dotenv.config();
app.use(express.json())
app.use(cors())
app.use(helmet())
const accessLogStream = fs.createWriteStream('./access.log', {flags: 'a'});
app.use(morgan("tiny",{stream: accessLogStream}));
app.use(morgan("dev"))
app.use(bodyParser.urlencoded({extended:true}))

//? -------All initializations--------------------------------------------------------------------------------------
const PORT: any = process.env.PORT;

// ?Users Routes
app.use("/api/v1/user", userRoute);

// ? EMployee Routes
app.use("/api/v1/emp", employeeRoute);

// ? Expense Routes
app.use("/api/v1/expense", expenseRoute);

// ! Listen Server
app.listen(PORT, () => {
  console.log(db)

  console.log("Running  on port 1234 WOW");
});
