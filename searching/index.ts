import { linearSearch } from "./linear-search";
import { binarySearch } from "./binary-search";
import clc from "cli-color";

const arrayOne: Array<number> = [];

for (let i = 0; i < 6871; i++) {
    arrayOne.push(Math.floor(Math.random() * 10000) + 10);
}

const arrayTwo: Array<number> = JSON.parse(JSON.stringify(arrayOne));

const startTimeOne = Date.now();
const searchResOne = linearSearch(arrayOne, 203);
const endTimeOne = Date.now();

console.log(
    clc.greenBright(
        `Linear Search (Recursive): 203 is found at ${searchResOne} index.`
    )
);
console.log(clc.yellow(`Time required: ${endTimeOne - startTimeOne} ms`));

arrayTwo.sort((a, b) => a - b);

const startTimeTwo = Date.now();
const searchResTwo = binarySearch(arrayTwo, 203);
const endTimeTwo = Date.now();

console.log(
    clc.greenBright(
        `Binary Search (Recursive): 203 is found at ${searchResTwo} index.`
    )
);
console.log(clc.yellow(`Time required: ${endTimeTwo - startTimeTwo} ms`));
