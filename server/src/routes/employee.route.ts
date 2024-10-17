import express , { Express, Router } from "express";

import { createEmployee, deleteEmployee, getAllEmployee, getSingleEmployee, updateEmployee } from "../controllers/employee.controller";


const router:Router = express.Router()

router.route("/create").post(createEmployee);
router.route("/all").get(getAllEmployee);

router
  .route("/:id")
  .delete(deleteEmployee)
  .put(updateEmployee)
  .get(getSingleEmployee);


export default router;
