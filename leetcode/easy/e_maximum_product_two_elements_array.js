/**
 * Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).
 

Example 1:

Input: nums = [3,4,5,2]
Output: 12 
Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12. 
Example 2:

Input: nums = [1,5,4,5]
Output: 16
Explanation: Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.
Example 3:

Input: nums = [3,7]
Output: 12
 * 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    // Get the two largest numbers in array
    // sort the numbers by decreasing order
    // take the first two in sorted array
    let max = nums.sort((a, b) => b - a).slice(0, 2);
    // the output should be num[i] - 1 * num[j] - 1
    return (max[0] - 1) * (max[1] - 1);
};

let a = [3, 4, 5, 2];

console.log(maxProduct(a));
