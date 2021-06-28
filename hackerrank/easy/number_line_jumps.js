/**
 * You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

The first kangaroo starts at location  and moves at a rate of  meters per jump.
The second kangaroo starts at location  and moves at a rate of  meters per jump.
You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.

Example




After one jump, they are both at , (, ), so the answer is YES.

Function Description

Complete the function kangaroo in the editor below.

kangaroo has the following parameter(s):

int x1, int v1: starting position and jump distance for kangaroo 1
int x2, int v2: starting position and jump distance for kangaroo 2
Returns

string: either YES or NO
Input Format

A single line of four space-separated integers denoting the respective values of , , , and .

Constraints

Sample Input 0

0 3 4 2
Sample Output 0

YES
Explanation 0

The two kangaroos jump through the following sequence of locations:
 * 
 * 
 */

function kangaroo(x1, v1, x2, v2) {
    // set the inital result to NO
    let result = 'NO';
    // loop through 10,000 steps to check if they are ever equal
    for (let i = 0; i < 10000 && result == 'NO'; i++) {
        // if the start and distance * the step for each kangaroo is the same
        // set result to YES and step out of loop.
        if (x1 + v1 * i === x2 + v2 * i) {
            result = 'YES';
        }
    }

    // return result
    return result;
}
