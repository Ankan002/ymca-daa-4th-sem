const findRandomizedPivot = (nums: Array<number>, left: number, right: number): number => {
    const randomPivot = Math.floor(Math.random() * (right - left)) + left;

    [nums[left], nums[randomPivot]] = [nums[randomPivot], nums[left]];

    const pivot = nums[left];

    let i = left;
    let j = i + 1;

    while(j <= right){
        if(nums[j] <= pivot) {
            i++;
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }

        j++;
    }

    [nums[left], nums[i]] = [nums[i], nums[left]];

    return i;
}

const randomizedQuickSortHelper = (nums: Array<number>, left: number, right: number): void => {
    if(left < right){
        const pivot = findRandomizedPivot(nums, left, right);

        randomizedQuickSortHelper(nums, left, pivot - 1);
        randomizedQuickSortHelper(nums, pivot + 1, right);
    }
}

export const randomizedQuickSort = (nums: Array<number>): void => {
    randomizedQuickSortHelper(nums, 0, nums.length - 1);
}
