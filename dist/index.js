#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const parser_1 = require("./parser");
const tokenizer_1 = require("./tokenizer");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const FAILURE_EXIT_CODE = 1;
const SUCCESS_EXIT_CODE = 0;
function preparePath(fileName) {
    return path_1.default.resolve(fileName);
}
function readFile(filepath) {
    return fs_1.default.readFileSync(filepath, 'utf8').toString();
}
const result = (0, parser_1.parser)((0, tokenizer_1.tokenizer)(readFile(preparePath(process.argv[2]))));
console.log(result ? SUCCESS_EXIT_CODE : FAILURE_EXIT_CODE);
//# sourceMappingURL=index.js.map