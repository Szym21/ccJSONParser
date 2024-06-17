#! /usr/bin/env node

import { parser } from "./parser";
import { tokenizer } from "./tokenizer";
import path from 'path';
import fs from 'fs';

const FAILURE_EXIT_CODE = 1;
const SUCCESS_EXIT_CODE = 0;

function preparePath(fileName: string) : string {
    return path.resolve(fileName);
}

function readFile(filepath: string) : string {
    return fs.readFileSync(filepath, 'utf8').toString()
}

const result = parser(tokenizer(readFile(preparePath(process.argv[2]))))

console.log(result? SUCCESS_EXIT_CODE : FAILURE_EXIT_CODE);
