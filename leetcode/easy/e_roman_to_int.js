/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let key = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    let r = 0;

    for (let i = 0; i < s.length; i++) {
        if (key[s[i]] < key[s[i + 1]]) {
            r = r + key[s[i + 1]] - key[s[i]];
            i++;
        } else {
            r = r + key[s[i]];
        }
    }
    return r;
};

let s = 'IV';
console.log(romanToInt(s));
