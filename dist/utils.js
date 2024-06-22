"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumber = exports.isNull = exports.isBooleanFalse = exports.isBooleanTrue = void 0;
const isBooleanTrue = (value) => value === "true";
exports.isBooleanTrue = isBooleanTrue;
const isBooleanFalse = (value) => value === "false";
exports.isBooleanFalse = isBooleanFalse;
const isNull = (value) => value === "null";
exports.isNull = isNull;
const isNumber = (value) => /-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?/.test(value) && isHex(value) == false;
exports.isNumber = isNumber;
function hasLeadingZeros(value) {
    return /^0+/.test(value);
}
function isHex(value) {
    return /0[xX][0-9a-fA-F]+/.test(value);
}
//# sourceMappingURL=utils.js.map