#! /usr/bin/env node

import { parser } from "./parser";
import { tokenizer } from "./tokenizer";
import { Result } from "./types";
import path from 'path';
import fs from 'fs';

export function preparePath(fileName: string) : string {
    return path.resolve(fileName);
}

export function readFile(filepath: string) : string {
    return fs.readFileSync(filepath, 'utf8').toString()
}

try{
    const tokens = tokenizer(readFile(preparePath(process.argv[2])))    
    const result = parser(tokens);
    console.log(tokens);
    console.log(result ? Result.SUCCESS_EXIT_CODE : Result.FAILURE_EXIT_CODE);
}
catch(Error){
    console.log(Error);
    console.log(Result.FAILURE_EXIT_CODE);
}

