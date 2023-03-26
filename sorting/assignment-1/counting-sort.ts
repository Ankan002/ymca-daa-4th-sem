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

