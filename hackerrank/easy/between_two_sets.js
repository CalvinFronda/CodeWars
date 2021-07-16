/**
 * There will be two arrays of integers. Determine all integers that satisfy the following two conditions:

The elements of the first array are all factors of the integer being considered
The integer being considered is a factor of all elements of the second array
These numbers are referred to as being between the two arrays. Determine how many such numbers exist.

Example


There are two numbers between the arrays:  and .
, ,  and  for the first value.
,  and ,  for the second value. Return .

Function Description

Complete the getTotalX function in the editor below. It should return the number of integers that are betwen the sets.

getTotalX has the following parameter(s):

int a[n]: an array of integers
int b[m]: an array of integers
Returns

int: the number of integers that are between the sets

 */

function getTotalX(a, b) {
    // init a counter to return after calculationns
    let count = 0;
    // loop 1 - 100 from constraints
    for (let i = 1; i <= 100; i++) {
        // check all the numbers from 1 - 100 and see if they
        // are factors of the numbers
        if (a.every((int) => i % int == 0)) {
            // if they are check if it is a factor of array b
            if (b.every((int) => int % i == 0)) {
                // increment coutner
                count++;
            }
        }
    }
    // return couter
    return count;
}
let a1 = [2, 4];
let a2 = [16, 32, 96];

console.log(getTotalX(a1, a2));
