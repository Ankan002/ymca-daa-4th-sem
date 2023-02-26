const merge = (nums: Array<number>, left: number, mid: number, right: number): void => {
    let leftArrayPointer = left
    let rightArrayPointer = mid + 1;

    const tempArray: Array<number> = []; 

    while(leftArrayPointer <= mid && rightArrayPointer <= right){
        if(nums[leftArrayPointer] <= nums[rightArrayPointer]){
            tempArray.push(nums[leftArrayPointer]);
            leftArrayPointer++;
        } else {
            tempArray.push(nums[rightArrayPointer]);
            rightArrayPointer++;
        }
    }

    while(leftArrayPointer <= mid){
        tempArray.push(nums[leftArrayPointer]);
        leftArrayPointer++;
    }

    while(rightArrayPointer <= right) {
        tempArray.push(nums[rightArrayPointer]);
        rightArrayPointer++;
    }

    let tempArrayPointer = 0;

    for(let i=left; i<=right; i++){
        nums[i] = tempArray[tempArrayPointer];
        tempArrayPointer++;
    }
}

const divide = (nums: Array<number>, left: number, right: number): void => {
    if(left < right) {
        const mid = left + (Math.floor((right - left) / 2));

        divide(nums, left, mid);
        divide(nums, mid + 1, right);
        merge(nums, left, mid, right);
    }
}

export const mergeSort = (nums: Array<number>): void => {
    divide(nums, 0, nums.length - 1);
};
