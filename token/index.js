import { Tiktoken } from "js-tiktoken/lite";
import o200k_base from "js-tiktoken/ranks/o200k_base";

const enc = new Tiktoken(o200k_base);

const userQuery = "Hey buddy, I am Samarth Vohra";

const tokens = enc.encode(userQuery);
console.log(tokens);

const realQueryBack = enc.decode(tokens);
console.log(realQueryBack);