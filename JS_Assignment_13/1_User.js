/**
 * @PTalluru
 * 1. Write a JavaScript program to get an array from the user and return the:
    a) Sum of all elements in the array using reduce()
    b) Average of all elements in the array using reduce()
    Sample Input:
    [ 1, 2, 3, 4, 5 ]
    Output:
    15
    3
 * 
 */

let input = [1, 2, 3, 4, 5];

let sum = (inputArray) => {
  return inputArray.reduce((preValue, curValue) => preValue + curValue, 0);
};
console.log(sum(input));

let average = (inputArray) => {
  return inputArray.reduce((preValue, curValue) => preValue + curValue/inputArray.length, 0) 
};
console.log(average(input));
