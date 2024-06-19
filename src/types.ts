export enum Result {
  SUCCESS_EXIT_CODE = 0,
  FAILURE_EXIT_CODE = 1
}

export type TokenType =
  | "BraceOpen"
  | "BraceClose"
  | "BracketOpen"
  | "BracketClose"
  | "String"
  | "Number"
  | "Comma"
  | "Colon"
  | "True"
  | "False"
  | "Null";

export interface Token {
  type: TokenType;
  value: string;
}

export type JsonNode =
  | { type: "Object"; value: { [key: string]: JsonNode } }
  | { type: "Array"; value: JsonNode[] }
  | { type: "String"; value: string }
  | { type: "Number"; value: number }
  | { type: "Boolean"; value: boolean }
  | { type: "Null" };
