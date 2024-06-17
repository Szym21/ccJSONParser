#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const tokens_1 = require("./tokens");
const FAILURE_EXIT_CODE = 1;
const SUCCESS_EXIT_CODE = 0;
function preparePath(fileName) {
    return path_1.default.resolve(fileName);
}
function readFile(filepath) {
    return fs_1.default.readFileSync(filepath, 'utf8').toString();
}
function ParseText(text) {
    let correctJSON = true;
    if (text[0] !== tokens_1.Tokens.BEGIN_OBJECT)
        correctJSON = false;
    if (text[text.length - 1] !== tokens_1.Tokens.END_OBJECT)
        correctJSON = false;
    return correctJSON ? SUCCESS_EXIT_CODE : FAILURE_EXIT_CODE;
}
console.log(ParseText(readFile(preparePath(process.argv[2]))));
//# sourceMappingURL=index.js.map