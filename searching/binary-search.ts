const binarySearchHelper = (
    nums: Array<number>,
    leftIndex: number,
    rightIndex: number,
    target: number
): number => {
    if (leftIndex > rightIndex) return -1;
    if (leftIndex === rightIndex)
        return nums[leftIndex] === target ? leftIndex : -1;

    const mid = leftIndex + Math.floor((rightIndex - leftIndex) / 2);

    if (nums[mid] === target) return mid;
    if (nums[mid] < target)
        return binarySearchHelper(nums, mid + 1, rightIndex, target);
    return binarySearchHelper(nums, leftIndex, mid - 1, target);
};

export const binarySearch = (nums: Array<number>, target: number): number => {
    return binarySearchHelper(nums, 0, nums.length - 1, target);
};
