export const countingSort = (nums: Array<number>): void => {
    let maxNumber: number = Number.MIN_SAFE_INTEGER;

    nums.forEach((num) => {
        if (num > maxNumber) maxNumber = num;
    });

    const refArray = new Array(maxNumber + 1).fill(0);

    nums.forEach((num) => (refArray[num] += 1));

    let currentPosition = 0;
    let mainArrayPos = 0;

    while (currentPosition < refArray.length) {
        if (refArray[currentPosition] <= 0) {
            currentPosition++;
        } else {
            nums[mainArrayPos] = currentPosition;
            refArray[currentPosition] -= 1;
            mainArrayPos++;
        }
    }
};

// const arr = [
//     76, 36, 55, 100, 29, 80, 3, 6, 82, 52, 3, 39, 19, 10, 60, 61, 99, 23, 98,
//     10, 95, 32, 75, 24, 57, 89, 69, 68, 12, 74, 87, 100, 61, 28, 24, 34, 85, 52,
//     33, 46, 99, 55, 70, 7, 86, 60, 0, 73, 30, 60, 4, 75, 15, 55, 58, 94, 4, 5,
//     75, 66, 56, 42, 60, 34, 25, 14, 27, 30, 30, 92, 69, 31, 54, 57, 69, 78, 64,
//     38, 59, 86, 92, 98, 35, 33, 32, 15, 3, 86, 69, 37, 93, 30, 37, 53, 44, 95,
//     85, 25, 67, 44, 11, 32, 87, 80, 52, 76, 5, 27, 95, 64, 68, 46, 14, 89, 72,
//     2, 10, 0, 2, 12, 96, 43, 2, 46, 31, 91, 29, 23, 95, 59, 37, 28, 86, 54, 14,
//     24, 61, 90, 81, 9, 25, 96, 100, 69, 81, 63, 53, 51, 10, 5, 92, 58, 87, 56,
//     90, 33, 94, 48, 7, 62, 27, 69, 6, 59, 39, 22, 66, 34, 36, 68, 20, 42, 45,
//     43, 35, 86, 38, 38, 58, 85, 80, 8, 87, 29, 54, 18, 69, 26, 78, 82, 51, 42,
//     100, 63, 94, 18, 77, 16, 70, 50,
// ];
// countingSort(arr);
// console.log(arr);
