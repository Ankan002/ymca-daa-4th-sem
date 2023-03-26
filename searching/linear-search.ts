const linearSearchHelper = (nums: Array<number>, target: number, currentPos: number): number => {
    if(currentPos >= nums.length) return -1;

    if(nums[currentPos] === target) return currentPos;

    return linearSearchHelper(nums, target, currentPos + 1);
};

export const linearSearch = (nums: Array<number>, target: number) => {
    return linearSearchHelper(nums, target, 0);
}
