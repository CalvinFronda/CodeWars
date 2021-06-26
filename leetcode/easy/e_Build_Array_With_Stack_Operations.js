/**
 * Given an array target and an integer n. In each iteration, you will read a number from  list = {1,2,3..., n}.

Build the target array using the following operations:

Push: Read a new element from the beginning list, and push it in the array.
Pop: delete the last element of the array.
If the target array is already built, stop reading more elements.
Return the operations to build the target array. You are guaranteed that the answer is unique.

 

Example 1:

Input: target = [1,3], n = 3
Output: ["Push","Push","Pop","Push"]
Explanation: 
Read number 1 and automatically push in the array -> [1]
Read number 2 and automatically push in the array then Pop it -> [1]
Read number 3 and automatically push in the array -> [1,3]
Example 2:

Input: target = [1,2,3], n = 3
Output: ["Push","Push","Push"]
Example 3:

Input: target = [1,2], n = 4
Output: ["Push","Push"]
Explanation: You only need to read the first 2 numbers and stop.
Example 4:

Input: target = [2,3,4], n = 4
Output: ["Push","Pop","Push","Push","Push"]
 */

/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
    // because the array should be 1-n
    // we get the last number in array an make that the new n
    // we can use this n as the length of the array and loop through
    n = target.slice(-1)[0];
    // storing the results
    const result = [];
    // begin the loop
    //we start at 1 becasue we are creating an array from 1 - n
    for (let i = 1; i <= n; i++) {
        // we check if the target array includes i
        // if it does, push "Push" to results array
        if (target.includes(i)) result.push('Push');
        // if it doesn't push "Push", "Pop"
        else result.push('Push', 'Pop');
        // if the target is [1,3]
        // we start the loop at i = 1, target includes 1 so we push "Push"
        // go to the next number 3, is target include i = 2
        // no so we Push Pop, n = 3, i = 3, does target include i, yes so we "Push"
    }

    // return the results
    return result;
};
