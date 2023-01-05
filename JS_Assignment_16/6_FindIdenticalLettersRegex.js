/*
6). Create a function that takes a word and returns true if the word
has two consecutive identical letters.
Examples
doubleLetters("loop") ➞ true
doubleLetters("yummy") ➞ true
 */
let doubleLetters = (word) => {
  return /(.)(?=\1)/.test(word);
};

console.log(doubleLetters("loop")); // true
console.log(doubleLetters("yummy")); // true
console.log(doubleLetters("hello")); // true
console.log(doubleLetters("helol")); // false
