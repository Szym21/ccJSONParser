import { parser } from "./parser";
import { tokenizer } from "./tokenizer";
import { readFile, preparePath } from "./index.js";
import { Result } from "./types";
import fs from 'fs'


function Test(filePath : string) {
    try{
        const tokens = tokenizer(readFile(filePath))    
        const result = parser(tokens);
        console.log(`${filePath} exit code: ${(result ? Result.SUCCESS_EXIT_CODE : Result.FAILURE_EXIT_CODE)}`);
    }
    catch(Error){
        console.log(`${filePath} exit code: ${Result.FAILURE_EXIT_CODE}`);
    }
}

const tests : string[]  = [
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
]

tests.forEach(test => {
    Test(test);
    });

fs.readdir("./tests/test", (err, files) => {
    //console.log(files);
     files.forEach(file => {
       Test(`./tests/test/${file}`);
     });
  });
