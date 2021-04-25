/*
Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

If the sequence is empty, you should return 0.
*/

function evenLast(numbers) {
    if (numbers.length === 0) return 0
    let num = 0
    for (let i = 0; i < numbers.length; i++) {
        if (i % 2 === 0) {
            num = num + numbers[i];
        }
    }
    return numbers[numbers.length - 1] * num
}

