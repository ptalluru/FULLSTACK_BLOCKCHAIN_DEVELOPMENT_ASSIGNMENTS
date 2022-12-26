/**
 * @PTalluru
 * 1). Create a function that finds the maximum range of a triangle's
    third edge, where the side lengths are all integers.
    Examples
    nextEdge(8, 10) ➞ 17
    nextEdge(5, 7) ➞ 11
    nextEdge(9, 2) ➞ 10
    Notes
    ●(side1 + side2) - 1 = maximum range of third edge.
    ●The side lengths of the triangle are positive integers.
    ●Don't forget to return the result.
 */

let nextEdge = (sideOne, sideTwo) => {
  if (sideOne > 0 && sideTwo > 0) {
    return sideOne + sideTwo - 1;
  } else {
    return "Please check the sides of the triangle passed";
  }
};

console.log("nextEdge(8, 10) -> ", nextEdge(8, 10));
console.log("nextEdge(5, 7) -> ", nextEdge(5, 7));
console.log("nextEdge(9, 2) -> ", nextEdge(9, 2));
console.log("nextEdge(-4, 1) -> ", nextEdge(-4, 1));
