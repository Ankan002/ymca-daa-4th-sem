import { bubbleSort } from "./bubble-sort";
import { selectionSort } from "./selection-sort";
import { mergeSort } from "./merge-sort";
import { quickSort } from "./quick-sort";
import { randomizedQuickSort } from "./randomized-quick-sort";
import { heapSort } from "./heap-sort";
import { insertionSort } from "./insertion-sort";
import clc from "cli-color";

const arrayOne: Array<number> = [];

for(let i=0; i<100000; i++){
    arrayOne.push(Math.floor(Math.random() * 10000) + 10);
}

const arrayTwo = JSON.parse(JSON.stringify(arrayOne));
const arrayThree = JSON.parse(JSON.stringify(arrayOne));
const arrayFour = JSON.parse(JSON.stringify(arrayOne));
const arrayFive = JSON.parse(JSON.stringify(arrayOne));
const arraySix = JSON.parse(JSON.stringify(arrayOne));
const arraySeven = JSON.parse(JSON.stringify(arrayOne));

console.log(clc.yellowBright("Actual Array:"))
console.log(arrayOne)

const startTimeOne = Date.now();
bubbleSort(arrayOne);
const endTimeOne = Date.now();

console.log(clc.redBright("Bubble Sort:"))
console.log(clc.greenBright(`Time required: ${(endTimeOne - startTimeOne) / 1000} s`));
console.log(arrayOne);

const startTimeTwo = Date.now();
selectionSort(arrayTwo);
const endTimeTwo = Date.now();

console.log(clc.redBright("Selection Sort:"))
console.log(clc.greenBright(`Time required: ${(endTimeTwo - startTimeTwo) / 1000} s`));
console.log(arrayTwo);

const startTimeThree = Date.now();
insertionSort(arrayThree);
const endTimeThree = Date.now();

console.log(clc.redBright("Insertion Sort:"))
console.log(clc.greenBright(`Time required: ${(endTimeThree - startTimeThree) / 1000} s`));
console.log(arrayThree);

const startTimeFour = Date.now();
mergeSort(arrayFour)
const endTimeFour = Date.now();

console.log(clc.redBright("Merge Sort:"))
console.log(clc.greenBright(`Time required: ${(endTimeFour - startTimeFour) / 1000} s`));
console.log(arrayFour);

const startTimeFive = Date.now();
quickSort(arrayFive)
const endTimeFive = Date.now();

console.log(clc.redBright("Quick Sort:"))
console.log(clc.greenBright(`Time required: ${(endTimeFive - startTimeFive) / 1000} s`));
console.log(arrayFive);

const startTimeSix = Date.now();
randomizedQuickSort(arraySix);
const endTimeSix = Date.now();

console.log(clc.redBright("Randomized Quick Sort:"))
console.log(clc.greenBright(`Time required: ${(endTimeSix - startTimeSix) / 1000} s`));
console.log(arraySix);

const startTimeSeven = Date.now();
heapSort(arraySeven);
const endTimeSeven = Date.now();

console.log(clc.redBright("Heap Sort:"))
console.log(clc.greenBright(`Time required: ${(endTimeSeven - startTimeSeven) / 1000} s`));
console.log(arraySeven);
