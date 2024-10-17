"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//? ----All Imports-----------------------------------------------------------------------------------------
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv")); // for hiding data Keys
const database_js_1 = require("./utils/database.js");
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const fs_1 = __importDefault(require("fs"));
const user_route_js_1 = __importDefault(require("./routes/user.route.js"));
const employee_route_js_1 = __importDefault(require("./routes/employee.route.js"));
const expense_route_js_1 = __importDefault(require("./routes/expense.route.js"));
const app = (0, express_1.default)();
//? ------All configurations---------------------------------------------------------------------------------------
dotenv_1.default.config();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
const accessLogStream = fs_1.default.createWriteStream('./access.log', { flags: 'a' });
app.use((0, morgan_1.default)("tiny", { stream: accessLogStream }));
app.use((0, morgan_1.default)("dev"));
app.use(body_parser_1.default.urlencoded({ extended: true }));
//? -------All initializations--------------------------------------------------------------------------------------
const PORT = process.env.PORT;
// ?Users Routes
app.use("/api/v1/user", user_route_js_1.default);
// ? EMployee Routes
app.use("/api/v1/emp", employee_route_js_1.default);
// ? Expense Routes
app.use("/api/v1/expense", expense_route_js_1.default);
// ! Listen Server
app.listen(PORT, () => {
    console.log(database_js_1.db);
    console.log("Running  on port 1234 WOW");
});
