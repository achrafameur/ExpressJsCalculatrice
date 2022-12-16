import { Request, Response } from "express";

export default module.exports = function () {
  return function (req: Request, res: Response, next: () => void) {
    const { num1, num2 } = req.body;
    if (isNaN(Number(num1)) || isNaN(Number(num2))) {
      res.status(400);
      res.send("Bad request");
      return;
    }
    next();
  };
};