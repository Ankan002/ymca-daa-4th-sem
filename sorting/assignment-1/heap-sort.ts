const convertToMaxHeap = (nums: Array<number>): void => {
    let currentPos = Math.floor((nums.length - 1) / 2);

    while(currentPos >= 0){
        maxHeapify(nums, currentPos, nums.length - 1);
        currentPos--;
    }
}

const heapPopToSort = (nums: Array<number>): void => {
    let currentPos = nums.length - 1;

    while(currentPos >= 0){
        [nums[0], nums[currentPos]] = [nums[currentPos], nums[0]];
        maxHeapify(nums, 0, currentPos - 1);
        currentPos--;
    }
}

const maxHeapify = (nums: Array<number>, parentIndex: number, maxLength: number): void => {
    if(parentIndex > maxLength) return;

    let currentMaxIndex = parentIndex;
    const leftChildIndex = (currentMaxIndex * 2) + 1;
    const rightChildIndex = (currentMaxIndex * 2) + 2;

    if(leftChildIndex <= maxLength && nums[leftChildIndex] >= nums[currentMaxIndex]) currentMaxIndex = leftChildIndex;

    if(rightChildIndex <= maxLength && nums[rightChildIndex] >= nums[currentMaxIndex]) currentMaxIndex = rightChildIndex;

    if(parentIndex !== currentMaxIndex) {
        [nums[parentIndex], nums[currentMaxIndex]] = [nums[currentMaxIndex], nums[parentIndex]];

        maxHeapify(nums, currentMaxIndex, maxLength);
    }
}

export const heapSort = (nums: Array<number>): void => {
    convertToMaxHeap(nums);
    heapPopToSort(nums);
}

const nums = [5, 7, 8, 6, 3, 2, 4, 1, 9];
heapSort(nums);
console.log(nums);
