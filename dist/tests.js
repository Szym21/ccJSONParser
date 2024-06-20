"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parser_1 = require("./parser");
const tokenizer_1 = require("./tokenizer");
const index_js_1 = require("./index.js");
const types_1 = require("./types");
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
Test("./tests/step1/valid.json");
Test("./tests/step1/invalid.json");
Test("./tests/step2/valid.json");
Test("./tests/step2/valid2.json");
Test("./tests/step2/invalid.json");
Test("./tests/step2/invalid2.json");
Test("./tests/step3/valid.json");
Test("./tests/step3/invalid.json");
Test("./tests/step4/valid.json");
Test("./tests/step4/valid2.json");
Test("./tests/step4/invalid.json");
//# sourceMappingURL=tests.js.map