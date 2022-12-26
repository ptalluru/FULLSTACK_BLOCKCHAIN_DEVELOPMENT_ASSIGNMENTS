/**
 * @PTalluru
 * 4). This Triangular Number Sequence is generated from a pattern of
    dots that form a triangle. The first 5 numbers of the sequence, or
    dots, are:
    1, 3, 6, 10, 15
    This means that the first triangle has just one dot, the second one
    has three dots, the third one has 6 dots and so on.
    Write a function that returns the cumulative sum of the number of
    all the previous (including current) dots when given its
    corresponding triangle number of the sequence.
    Figure: Triangular Number Sequence
    Examples
    triangle(1) ➞ 1
    triangle(6) ➞ 56 (1+3+6+10+15+21)
 */

let triangle = (dots) => {
  let sum = 0;
  let numGap = 0;
  if (dots >= 1) {
    for (let i = 1; i <= dots; i++) {
      numGap = numGap + i;
      sum = sum + numGap;
    }
  }
  return sum;
};

console.log(triangle(6));
