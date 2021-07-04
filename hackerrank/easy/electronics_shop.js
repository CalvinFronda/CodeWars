/*
A person wants to determine the most expensive computer keyboard and USB drive that can be purchased with a give budget. Given price lists for keyboards and USB drives and a budget, find the cost to buy them. If it is not possible to buy both items, return .

Example



The person can buy a , or a . Choose the latter as the more expensive option and return .

Function Description

Complete the getMoneySpent function in the editor below.

getMoneySpent has the following parameter(s):

int keyboards[n]: the keyboard prices
int drives[m]: the drive prices
int b: the budget
Returns

int: the maximum that can be spent, or  if it is not possible to buy both items
Input Format

The first line contains three space-separated integers , , and , the budget, the number of keyboard models and the number of USB drive models.
The second line contains  space-separated integers , the prices of each keyboard model.
The third line contains  space-separated integers , the prices of the USB drives.
*/

function getMoneySpent(keyboards, drives, b) {
    // use an array to store all values that are less than or equal to b
    let result = [];
    // loop through each keyboard
    for (let i = 0; i < keyboards.length; i++) {
        // loop through each drive
        for (let j = 0; j < drives.length; j++) {
            // store the sum of the current keyboard price & current drive price
            let sum = keyboards[i] + drives[j];
            // check if the sum of each keyboard is equal to b
            if (sum <= b) {
                // if true push sum into results
                result.push(sum);
            }
        }
    }
    // if the results length is 0, return -1
    // else take the maximum value in result array
    return result.length < 1 ? -1 : Math.max(...result);
}

let kb = [5];
let dr = [4];
let t = 5;

console.log(getMoneySpent(kb, dr, t));
