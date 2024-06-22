import { Token } from './types';
import { JsonNode } from './types';

export const parser = (tokens: Token[]): boolean => {
    if (!tokens.length) {
      throw new Error("Nothing to parse. Exiting!");
    }
    let current = 0;
  
    function consume() {
      return tokens[++current];
    }

    function parseValue(): JsonNode {
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
        const node: JsonNode = { type: "Object", value: {} };
        let token = consume(); 
        while (token.type !== "BraceClose") {
            if (token.type === "String" || token.type === "Comma") {
                if (token.type === "Comma") token = consume();
                const key = token.value;
                token = consume();
                if (token.type !== "Colon") throw new Error("Expected : in key-value pair");
                token = consume();
                const value = parseValue();
                node.value[key] = value;
            } else {
                throw new Error(`Expected String key in object. Token type: ${token.type}`);
            }
            token = consume(); 
        }
        if(current < tokens.length-1)   throw new Error(); 
        return node;
    }

    function parseArray() {
        const node: JsonNode = { type: "Array", value: [] };
        let token = consume();
    
        while (token.type !== "BracketClose") {
            const value = parseValue();
            node.value.push(value);
        
            token = consume();
            if (token.type === "Comma") token = consume();
        }    
        return node;
    }    
    
    try{
        const node = parseObject();
        return true;
    }
    catch(Error)
    {
        return false;
    }
};
  