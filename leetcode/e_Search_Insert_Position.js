/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
Example 4:

Input: nums = [1,3,5,6], target = 0
Output: 0
Example 5:

Input: nums = [1], target = 0
Output: 0
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    // checks if the number has the index of target
    if (nums.indexOf(target) === -1) {
        // if it doesnt, push the target into nums
        nums.push(target);
        // sort the nums array
        nums.sort((a, b) => a - b);
        // return the index of target
        return nums.indexOf(target);
    } else {
        // return the next of target
        return nums.indexOf(target);
    }
};
