/**
 * Given an array of integers and a positive integer , determine the number of  pairs where  and  +  is divisible by .

Example



Three pairs meet the criteria:  and .

Function Description

Complete the divisibleSumPairs function in the editor below.

divisibleSumPairs has the following parameter(s):

int n: the length of array 
int ar[n]: an array of integers
int k: the integer divisor
Returns
- int: the number of pairs

Input Format

The first line contains  2 space-separated integers,  n and k.
The second line contains n space-separated integers, each a value of arr[i] .


 */

function divisibleSumPairs(n, k, ar) {
    // start with output counter
    let count = 0;
    // loop through each element in array
    for (let i = 0; i < n; i++) {
        // loop through next element in array
        for (let j = i + 1; j < n; j++) {
            // if arr[i] + arr[i+1] % k === 0
            // increment count
            if ((ar[i] + ar[j]) % k === 0) count++;
        }
    }
    // return count
    return count;
}

let arr = [1, 3, 2, 6, 1, 2];
let divisor = 3;
let lenArr = 6;

console.log(divisibleSumPairs(lenArr, divisor, arr));
