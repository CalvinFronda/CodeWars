/*
 * Complete the 'countApplesAndOranges' function below.
 * The function accepts following parameters:
 *  1. INTEGER s = starting house point
 *  2. INTEGER t = ending house point
 *  3. INTEGER a = location of apple
 *  4. INTEGER b = location of orange
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here

    const getDistance = (start, arr) => {
        let count = 0;
        let d = arr.map((el) => start + el);
        d.forEach((n) => {
            if (n >= s && n <= t) {
                count++;
            }
        });
        return count;
    };
    let applesDistance = getDistance(a, apples);
    let orangeDistance = getDistance(b, oranges);
    console.log(applesDistance + '\n' + orangeDistance);
}

let start = 7,
    end = 11,
    a = 5,
    o = 15,
    apples = [-2, 2, 1],
    oranges = [5, -6];

console.log(countApplesAndOranges(start, end, a, o, apples, oranges));
