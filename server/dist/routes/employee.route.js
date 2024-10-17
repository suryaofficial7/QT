"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const employee_controller_1 = require("../controllers/employee.controller");
const router = express_1.default.Router();
router.route("/create").post(employee_controller_1.createEmployee);
router.route("/all").get(employee_controller_1.getAllEmployee);
router
    .route("/:id")
    .delete(employee_controller_1.deleteEmployee)
    .put(employee_controller_1.updateEmployee)
    .get(employee_controller_1.getSingleEmployee);
exports.default = router;
