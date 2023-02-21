export const selectionSort = (nums: Array<number>): void => {
    for (let i = 0; i < nums.length - 1; i++) {
        let smallestIndex = i;

        for (let j = i; j < nums.length; j++) {
            if (nums[j] < nums[smallestIndex]) smallestIndex = j;
        }

        [nums[smallestIndex], nums[i]] = [nums[i], nums[smallestIndex]];
    }
};
