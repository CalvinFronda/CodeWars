/*
Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.

Example

There are two each of types  and , and one sighting of type . Pick the lower of the two types seen twice: type .

Function Description

Complete the migratoryBirds function in the editor below.

migratoryBirds has the following parameter(s):

int arr[n]: the types of birds sighted
Returns

int: the lowest type id of the most frequently sighted birds
Input Format

The first line contains an integer, , the size of .
The second line describes  as  space-separated integers, each a type number of the bird sighted.

Constraints

It is guaranteed that each type is , , , , or .
Sample Input 0

6
1 4 4 4 5 3
Sample Output 0

4

*/

function migratoryBirds(arr) {
    // create a hash map to store
    // number of times each type is shown
    let hash = {};
    // loop through array of types
    for (let i = 0; i < arr.length; i++) {
        // if type doesn't exisit in hash
        if (!hash[arr[i]]) {
            // set the value to type and
            // set value to 1
            hash[arr[i]] = 1;
        } else {
            // increment if already exist in hash
            hash[arr[i]]++;
        }
    }
    // gets the keys of the hash
    // checks if the current value is greater than
    // or equal to the current value
    // returns the lowest type id
    return Object.keys(hash).reduce((a, b) => (hash[a] >= hash[b] ? a : b));
}
let b = [1, 4, 4, 4, 5, 3];
let a = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];

console.log(migratoryBirds(a));
