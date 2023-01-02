/**
 *
 * 1. Create a function to iterate over the following list [“John”,“Rohn”, “Danny”, “James”]
 */

let list = ["John", "Rohn", "Danny", "James"];

let iterateList = (names) => {
  let it = names[Symbol.iterator]();
  let result = it.next();
  while (!result.done) {
    console.log(result.value);
    result = it.next();
  }
};

iterateList(list);
