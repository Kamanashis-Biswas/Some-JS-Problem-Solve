function twoSumSortedArray(nums, target) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left < right) {
      const currentSum = nums[left] + nums[right];
  
      if (currentSum === target) {
        return [left, right];
      } else if (currentSum < target) {
        left++;
      } else {
        right--;
      }
    }
  
    return [];
  }
  
  const nums = [1, 3, 6, 8, 11, 15];
  const target = 9;
  const outputIndices = twoSumSortedArray(nums, target);
  console.log(outputIndices);
  