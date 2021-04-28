/**
 * Yor task is to write function factorial

    https://en.wikipedia.org/wiki/Factorial
 * 
 */

function factorial(num) {
    if (num < 0) {
        return -1
    } else if (num == 0) {
        return 1
    } else {
        return (num * factorial(num - 1));
    }
}

