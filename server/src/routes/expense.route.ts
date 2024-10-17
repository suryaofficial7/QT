import express , { Express, Router } from "express";
import { addExpense, deleteExpense, singleExpense, updateExpense, userAllExpense } from "../controllers/expense.controller";
const router:Router = express.Router()


router.route("/add").post(addExpense);

router.route("/:id").delete(deleteExpense).get(singleExpense).put(updateExpense)


router.route("/all/:userId").get(userAllExpense)


export default  router