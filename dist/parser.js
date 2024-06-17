"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parser = void 0;
const parser = (tokens) => {
    if (!tokens.length) {
        throw new Error("Nothing to parse. Exiting!");
    }
    let current = 0;
    function consume() {
        return tokens[++current];
    }
    function parseValue() {
        const token = tokens[current];
        switch (token.type) {
            case "String":
                return { type: "String", value: token.value };
            case "Number":
                return { type: "Number", value: Number(token.value) };
            case "True":
                return { type: "Boolean", value: true };
            case "False":
                return { type: "Boolean", value: false };
            case "Null":
                return { type: "Null" };
            case "BraceOpen":
                return parseObject();
            case "BracketOpen":
                return parseArray();
            default:
                throw new Error(`Unexpected token type: ${token.type}`);
        }
    }
    function parseObject() {
        const node = { type: "Object", value: {} };
        let token = consume();
        while (token.type !== "BraceClose") {
            if (token.type === "String") {
                const key = token.value;
                token = consume();
                if (token.type !== "Colon")
                    throw new Error("Expected : in key-value pair");
                token = consume();
                const value = parseValue();
                node.value[key] = value;
            }
            else {
                throw new Error(`Expected String key in object. Token type: ${token.type}`);
            }
            token = consume();
            if (token.type === "Comma")
                token = consume();
        }
        return node;
    }
    function parseArray() {
        const node = { type: "Array", value: [] };
        let token = consume();
        while (token.type !== "BracketClose") {
            const value = parseValue();
            node.value.push(value);
            token = consume();
            if (token.type === "Comma")
                token = consume();
        }
        return node;
    }
    try {
        const node = parseValue();
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.parser = parser;
//# sourceMappingURL=parser.js.map