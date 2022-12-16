"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = module.exports = function () {
    return function (req, res, next) {
        const { num1, num2 } = req.body;
        if (isNaN(Number(num1)) || isNaN(Number(num2))) {
            res.status(400);
            res.send("Bad request");
            return;
        }
        next();
    };
};
