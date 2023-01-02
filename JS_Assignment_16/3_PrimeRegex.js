/*
3). Write a regular expression that matches only a primenumber.
Numbers will be presented as strings.
Example
“7” ➞ true
“134” ➞ false
*/

let isPrime = (string) => {
  let regex = /^1?$|^(11+?)\1+$/u;
  console.log(regex.test(string));
};

isPrime("7");
isPrime("134");
