"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const parser_1 = require("./parser");
const tokenizer_1 = require("./tokenizer");
const index_js_1 = require("./index.js");
const types_1 = require("./types");
const fs_1 = __importDefault(require("fs"));
function Test(filePath) {
    try {
        const tokens = (0, tokenizer_1.tokenizer)((0, index_js_1.readFile)(filePath));
        const result = (0, parser_1.parser)(tokens);
        console.log(`${filePath} exit code: ${(result ? types_1.Result.SUCCESS_EXIT_CODE : types_1.Result.FAILURE_EXIT_CODE)}`);
    }
    catch (Error) {
        console.log(`${filePath} exit code: ${types_1.Result.FAILURE_EXIT_CODE}`);
    }
}
const tests = [
    "./tests/step1/valid.json",
    "./tests/step1/invalid.json",
    "./tests/step2/valid.json",
    "./tests/step2/valid2.json",
    "./tests/step2/invalid.json",
    "./tests/step2/invalid2.json",
    "./tests/step3/valid.json",
    "./tests/step3/invalid.json",
    "./tests/step4/valid.json",
    "./tests/step4/valid2.json",
    "./tests/step4/invalid.json"
];
tests.forEach(test => {
    Test(test);
});
fs_1.default.readdir("./tests/test", (err, files) => {
    //console.log(files);
    files.forEach(file => {
        Test(`./tests/test/${file}`);
    });
});
//# sourceMappingURL=tests.js.map