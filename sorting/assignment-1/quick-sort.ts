const findPivot = (nums: Array<number>, left: number, right: number): number => {
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

const quickSortHelper = (nums: Array<number>, left: number, right: number): void => {
    if(left < right){
        const pivot = findPivot(nums, left, right);

        quickSortHelper(nums, left, pivot - 1);
        quickSortHelper(nums, pivot + 1, right);
    }
}

export const quickSort = (nums: Array<number>): void => {
    quickSortHelper(nums, 0, nums.length - 1);
}
