"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumber = exports.isNull = exports.isBooleanFalse = exports.isBooleanTrue = void 0;
const isBooleanTrue = (value) => value === "true";
exports.isBooleanTrue = isBooleanTrue;
const isBooleanFalse = (value) => value === "false";
exports.isBooleanFalse = isBooleanFalse;
const isNull = (value) => value === "null";
exports.isNull = isNull;
const isNumber = (value) => !isNaN(Number(value));
exports.isNumber = isNumber;
//# sourceMappingURL=utils.js.map