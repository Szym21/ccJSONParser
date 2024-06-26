import { Token } from "./types";
import { isNumber, isBooleanTrue, isBooleanFalse, isNull } from "./utils";

export const tokenizer = (input: string): Token[] => {
    let current = 0;
    let deepnest = 1;
    const tokens: Token[] = []; 
    while (current < input.length) {
        let char = input[current];
    
        switch (char){
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
                    if (char === '\\') throw new Error('Illegal backslash escape');
                    if (char === '&#9' || char === '\t') throw new Error('Tab character');
                    if (char === '\n') throw new Error('Break line');
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
        
            if (isNumber(value)) tokens.push({ type: "Number", value });
            else if (isBooleanTrue(value)) tokens.push({ type: "True", value });
            else if (isBooleanFalse(value)) tokens.push({ type: "False", value });
            else if (isNull(value)) tokens.push({ type: "Null", value });
            else throw new Error("Unexpected value: " + value);
        
            continue;
        }

        if (/\s/.test(char)) {
            current++;
            continue;
        }
      
        throw new Error("Unexpected character: " + char);
    }
    if(deepnest > 20) throw new Error("Too deep");
    return tokens;
};
