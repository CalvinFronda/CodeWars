/**
 * Remember the triangle of balls in billiards? To build a classic triangle (5 levels) you need 15 balls. With 3 balls you can build a 2-level triangle, etc.

For more examples,

pyramid(1) == 1

pyramid(3) == 2

pyramid(6) == 3

pyramid(10) == 4

 * 
 */

function triangle (ball) {
    return Math.floor((Math.sqrt(ball * 8 + 1 ) - 1 ) / 2 );
}