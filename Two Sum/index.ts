
/**
 *  AKA LeetCode 1. Two Sum
 *  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 */
// solution: O(n) time with O(n) space
function twoSum(nums: number[], target: number): number[] {
  const complementToIndex: {[key: number]: number} = {};
  const indices: number[] = [];
  for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      if (num in complementToIndex) {
          indices.push(complementToIndex[num], i);
          return indices;
      }
      const complementNum = target - num
      complementToIndex[complementNum] = i;
  }
  return []; // only needed to satisfy TS
};

// Test Case 1
const nums1 = [2, 7, 11, 15];
const target1 = 9;
console.log(twoSum(nums1, target1)); // Output: [0, 1]

// Test Case 2
const nums2 = [3, 2, 4];
const target2 = 6;
console.log(twoSum(nums2, target2)); // Output: [1, 2]

// Test Case 3
const nums3 = [3, 3];
const target3 = 6;
console.log(twoSum(nums3, target3)); // Output: [0, 1]
