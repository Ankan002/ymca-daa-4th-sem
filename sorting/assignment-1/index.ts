import { bubbleSort } from "./bubble-sort";
import clc from "cli-color";

const arrayOne: Array<number> = [];

for(let i=0; i<100000; i++){
    arrayOne.push(Math.floor(Math.random() * 10000) + 10);
}

console.log(clc.yellowBright("Actual Array:"))
console.log(arrayOne)

const startTimeOne = Date.now();
bubbleSort(arrayOne);
const endTimeOne = Date.now();

console.log(clc.redBright("Bubble Sort:"))
console.log(clc.greenBright(`Time required: ${(endTimeOne - startTimeOne) / 1000} s`));
console.log(arrayOne);

const arrayTwo = JSON.parse(JSON.stringify(arrayOne));

