#! /usr/bin/env node

import path from 'path';
import fs from 'fs';
import { Tokens } from './tokens';
import { JSONArray, JSONObject, JSONValue } from './types';

const FAILURE_EXIT_CODE = 1;
const SUCCESS_EXIT_CODE = 0;

function preparePath(fileName: string) : string {
    return path.resolve(fileName);
}

function readFile(filepath: string) : string {
    return fs.readFileSync(filepath, 'utf8').toString()
}

function ParseText(text : string) : number{
    let correctJSON = true;
    
    if (text[0] !== Tokens.BEGIN_OBJECT) correctJSON = false;
    if (text[text.length - 1] !== Tokens.END_OBJECT) correctJSON = false;

    return correctJSON ? SUCCESS_EXIT_CODE : FAILURE_EXIT_CODE;
}

console.log(ParseText(readFile(preparePath(process.argv[2]))));
