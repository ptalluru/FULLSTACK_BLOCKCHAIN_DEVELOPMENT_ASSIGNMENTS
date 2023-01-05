/*
4). Create a function that will return an integer number
corresponding to the amount of digits in the given integer num
Examples
num_of_digits(1000) ➞ 4
num_of_digits(12) ➞ 2
num_of_digits(1305981031) ➞ 10
*/

let numOfDigits = (num) => {
  // Convert the integer to a string
  let str = num.toString();

  // Use regex to get all the digits in the string
  let digits = str.match(/\d/g);

  // If there are no digits, return 0
  if (digits == null) {
    return 0;
  }

  // Return the length of the array of digits
  return digits.length;
};

console.log(numOfDigits(1000)); // 4
console.log(numOfDigits(12)); // 2
console.log(numOfDigits(1305981031)); // 10
console.log(numOfDigits(0)); // 1
console.log(numOfDigits(-123)); // 3
