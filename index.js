"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const errorHandle_1 = __importDefault(require("./middlewares/errorHandle"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(body_parser_1.default.json());
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server is running");
});
app.use((0, errorHandle_1.default)());
app.post("/addition", (req, res) => {
    const { num1, num2 } = req.body;
    // res.send({ Number1: Number(num1)});
    // res.send({ Number2: Number(num2) });
    res.send({ result: Number(num1) + Number(num2) });
});
app.post("/soustraction", (req, res) => {
    const { num1, num2 } = req.body;
    res.send({ result: Number(num1) - Number(num2) });
});
app.post("/multiplication", (req, res) => {
    const { num1, num2 } = req.body;
    res.send({ result: Number(num1) * Number(num2) });
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
