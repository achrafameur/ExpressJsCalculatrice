import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import NumberErrorHandle from "./middlewares/errorHandle";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser.json());


app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server is running");
});

app.use(NumberErrorHandle());

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
