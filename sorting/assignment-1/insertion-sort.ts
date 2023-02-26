export const insertionSort = (nums: Array<number>): void => {
    for (let i = 0; i < nums.length - 1; i++) {
        const comparingNumber = nums[i + 1];
        let currentComparingIndex = i;

        while (
            currentComparingIndex >= 0 &&
            comparingNumber < nums[currentComparingIndex]
        ) {
            nums[currentComparingIndex + 1] = nums[currentComparingIndex];
            currentComparingIndex--;
        }

        nums[currentComparingIndex + 1] = comparingNumber;
    }
};
