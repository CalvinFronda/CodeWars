/**
 * How many ways can you make the sum of a number?
From wikipedia: https://en.wikipedia.org/wiki/Partition_(number_theory)#

In number theory and combinatorics, a partition of a positive integer n, also called an integer partition, is a way of writing n as a sum of positive integers. Two sums that differ only in the order of their summands are considered the same partition. If order matters, the sum becomes a composition. For example, 4 can be partitioned in five distinct ways:

4
3 + 1
2 + 2
2 + 1 + 1
1 + 1 + 1 + 1
Examples
Basic
sum(1) // 1
sum(2) // 2  -> 1+1 , 2
sum(3) // 3 -> 1+1+1, 1+2, 3
sum(4) // 5 -> 1+1+1+1, 1+1+2, 1+3, 2+2, 4
sum(5) // 7 -> 1+1+1+1+1, 1+1+1+2, 1+1+3, 1+2+2, 1+4, 5, 2+3

sum(10) // 42
Explosive
sum(50) // 204226
sum(80) // 15796476
sum(100) // 190569292
 */

const sum = (num ) => {
    const arr = Array(num + 1).fill(null).map(() => {
       return Array(num + 1).fill(null);
    });
    for (let j = 1; j <= num; j += 1) {
       arr[0][j] = 0;
    }
    for (let i = 0; i <= num; i += 1) {
       arr[i][0] = 1;
    }
    for (let i = 1; i <= num; i += 1) {
       for (let j = 1; j <= num; j += 1) {
          if (i > j) {
             arr[i][j] = arr[i - 1][j];
          }
          else {
             const exclusive = arr[i - 1][j];
             const inclusive = arr[i][j - i];
             arr[i][j] = exclusive + inclusive;
          }
       }
    }
    return arr[num][num];
 };
 