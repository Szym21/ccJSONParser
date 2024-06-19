import { parser } from "./parser";
import { tokenizer } from "./tokenizer";
import { readFile } from "./index.js";
import { Result } from "./types";


function Test(filePath : string) {
    try{
        const tokens = tokenizer(readFile(filePath))    
        const result = parser(tokens);
        console.log(tokens);
        console.log(filePath);
        console.log(result ? Result.SUCCESS_EXIT_CODE : Result.FAILURE_EXIT_CODE);
    }
    catch(Error){
        console.log(Error);
        console.log(Result.FAILURE_EXIT_CODE);
    }
}
Test("./tests/step1/valid.json");
Test("./tests/step1/invalid.json");
Test("./tests/step2/valid.json");
Test("./tests/step2/valid2.json");
Test("./tests/step2/invalid.json")
Test("./tests/step2/invalid2.json")