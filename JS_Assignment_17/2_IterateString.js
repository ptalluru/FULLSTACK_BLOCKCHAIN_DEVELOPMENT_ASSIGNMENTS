/**
 * 2. Iterate over all the characters of the word “iNeuron”.
 */

let stringToIterate = "iNeuron";
let iterateString = (string) => {
  let iterator = string[Symbol.iterator]();
  let result = iterator.next();
  while (!result.done) {
    console.log(result.value);
    result = iterator.next();
  }
};

iterateString(stringToIterate);
