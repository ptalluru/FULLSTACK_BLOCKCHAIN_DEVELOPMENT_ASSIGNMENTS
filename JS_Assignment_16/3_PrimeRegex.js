/*
3). Write a regular expression that matches only a prime number. Numbers will be presented as strings.
Example
“7” -> true
“134” -> false
*/

/* using regex we cannot compute whether the number is prime or not 
because regex is a pattern matching but it is not for direct computation , so isPrime function will compute the input and 
the result will be sent to validatePrime() function to return true for prime number and false for non prime.
*/

let isPrime = (num) => {
  if (num < 2 || (num > 2 && num % 2 === 0)) {
    return validatePrime(0);
  }
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return validatePrime(0);
    }
  }
  return validatePrime(num);
};

let validatePrime = (num) => {
  const regex = /^(?!0$)\d+$/;
  return regex.test(num);
};

console.log(isPrime("2")); //true
console.log(isPrime("7")); // true
console.log(isPrime("134")); // false
console.log(isPrime("11")); // true
console.log(isPrime("17")); // false
console.log(isPrime("25")); // false
console.log(isPrime("1357")); // true
