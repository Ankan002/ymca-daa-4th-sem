import { linearSearch } from "./linear-search";
import clc from "cli-color";

const arrayOne: Array<number> = [];

for(let i=0; i<6871; i++){
    arrayOne.push(Math.floor(Math.random() * 10000) + 10);
}

const startTimeOne = Date.now();
const searchResOne = linearSearch(arrayOne, 203);
const endTimeOne = Date.now();

console.log(clc.greenBright(`Linear Search (Recursive): 203 is found at ${searchResOne} index.`));
console.log(clc.yellow(`Time required: ${(endTimeOne - startTimeOne)} ms`));
