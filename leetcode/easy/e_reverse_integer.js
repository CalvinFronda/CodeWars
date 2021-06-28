/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    if (x < Math.pow(-2, 31) || x > Math.pow(2, 31)) {
        return 0;
    }
    x = x.toString().split('').reverse();

    if (x.includes('-')) {
        x = parseInt('-' + x.join(''));
        if (x < Math.pow(-2, 31) || x > Math.pow(2, 31)) {
            return 0;
        }
        return x;
    }
    x = parseInt(x.join(''));
    if (x < Math.pow(-2, 31) || x > Math.pow(2, 31)) {
        return 0;
    }
    return x;
};

console.log(reverse(-1534236469));
