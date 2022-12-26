/**
 * @PTalluru
 * 
 * 2). The right shiftoperation is similar to floordivision by powers of
    two. Write a function that mimics(without the use of >>) the right
    shift operator and returns the result from the two given integers. Try
    to solve this challenge by recursion.
 */

let rightshift = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  } else {
    return rightshift(Math.floor(num1 / 2), num2 - 1);
  }
};

console.log(rightshift(23, 2));
console.log(rightshift(80, 3));
console.log(rightshift(-24, 2));
console.log(rightshift(-5, 1));

