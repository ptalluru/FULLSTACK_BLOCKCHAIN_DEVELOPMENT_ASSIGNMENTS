/*
9). Create a function that takes an array of numbers and returns
"Boom!" if the digit 7 appears in the array. Otherwise, return "there is
no 7 in the array".
Examples
sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// 7 contains the number seven.
sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// None of the items contain 7 within them.
*/

let sevenBoom = (arr) => {
  let regex = /^7$/g;
  // Use the test() method on a regex that matches the entire element 7
  const hasSeven = arr.some((element) => regex.test(element));

  // Return "Boom!" if the array has a 7, else return "there is no 7 in the array"
  return hasSeven ? "Boom!" : "there is no 7 in the array";
};

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7])); //"Boom!"
console.log(sevenBoom([8, 6, 33, 100, 37])); //"there is no 7 in the array"
console.log(sevenBoom([7, 8, 9, 10])); //"Boom!"
console.log(sevenBoom([1, 2, 3, 4, 5, 6])); //"there is no 7 in the array"
