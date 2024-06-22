#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readFile = exports.preparePath = void 0;
const parser_1 = require("./parser");
const tokenizer_1 = require("./tokenizer");
const types_1 = require("./types");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
function preparePath(fileName) {
    return path_1.default.resolve(fileName);
}
exports.preparePath = preparePath;
function readFile(filepath) {
    return fs_1.default.readFileSync(filepath, 'utf8').toString();
}
exports.readFile = readFile;
try {
    const tokens = (0, tokenizer_1.tokenizer)(readFile(preparePath(process.argv[2])));
    const result = (0, parser_1.parser)(tokens);
    console.log(tokens);
    console.log(result ? types_1.Result.SUCCESS_EXIT_CODE : types_1.Result.FAILURE_EXIT_CODE);
}
catch (Error) {
    console.log(Error);
    console.log(types_1.Result.FAILURE_EXIT_CODE);
}
//# sourceMappingURL=index.js.map