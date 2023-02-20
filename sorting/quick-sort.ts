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

const quickSort = (nums: Array<number>, left: number, right: number): void => {
    if(left < right){
        const pivot = findPivot(nums, left, right);

        quickSort(nums, left, pivot - 1);
        quickSort(nums, pivot + 1, right);
    }
}

const array = [11, 67, 2, 13, 7, 24, 51, 66];
quickSort(array, 0, array.length - 1);
console.log(array);
