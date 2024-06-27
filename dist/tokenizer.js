"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenizer = void 0;
const utils_1 = require("./utils");
const tokenizer = (input) => {
    let current = 0;
    let deepnest = 1;
    const tokens = [];
    while (current < input.length) {
        let char = input[current];
        switch (char) {
            case "{":
                tokens.push({ type: "BraceOpen", value: char });
                current++;
                deepnest++;
                continue;
            case "}":
                tokens.push({ type: "BraceClose", value: char });
                current++;
                continue;
            case "[":
                tokens.push({ type: "BracketOpen", value: char });
                current++;
                deepnest++;
                continue;
            case "]":
                tokens.push({ type: "BracketClose", value: char });
                current++;
                continue;
            case ":":
                tokens.push({ type: "Colon", value: char });
                current++;
                continue;
            case ",":
                tokens.push({ type: "Comma", value: char });
                current++;
                continue;
            case '"':
                let value = "";
                char = input[++current];
                while (char !== '"') {
                    if (char === '\\')
                        throw new Error('Illegal backslash escape');
                    if (char === '&#9' || char === '\t')
                        throw new Error('Tab character');
                    if (char === '\n')
                        throw new Error('Break line');
                    value += char;
                    char = input[++current];
                }
                current++;
                tokens.push({ type: "String", value });
                continue;
        }
        if (/[-?\d\.\+\w]/.test(char)) {
            let value = "";
            while (char !== ',' && char !== ']' && char !== '}') {
                value += char;
                char = input[++current];
            }
            if ((0, utils_1.isNumber)(value))
                tokens.push({ type: "Number", value });
            else if ((0, utils_1.isBooleanTrue)(value))
                tokens.push({ type: "True", value });
            else if ((0, utils_1.isBooleanFalse)(value))
                tokens.push({ type: "False", value });
            else if ((0, utils_1.isNull)(value))
                tokens.push({ type: "Null", value });
            else
                throw new Error("Unexpected value: " + value);
            continue;
        }
        if (/\s/.test(char)) {
            current++;
            continue;
        }
        throw new Error("Unexpected character: " + char);
    }
    if (deepnest > 20)
        throw new Error("Too deep");
    return tokens;
};
exports.tokenizer = tokenizer;
//# sourceMappingURL=tokenizer.js.map