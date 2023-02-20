import { bubbleSort } from "./bubble-sort";

const arrayOne: Array<number> = [];

for(let i=0; i<100000; i++){
    arrayOne.push(Math.floor(Math.random() * 10000) + 10);
}

const startTimeOne = Date.now();
bubbleSort(arrayOne);
const endTimeOne = Date.now();

console.log("Bubble Sort:")
console.log(`Time required: ${endTimeOne - startTimeOne}`);
console.log(arrayOne);

