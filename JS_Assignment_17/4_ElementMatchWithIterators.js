/**
 * 4. In the following two arrays find which two elements match using iterators.
        Array 1 - [“a”, “b”, “c”, “d”]
        Array 2 - [“e”, “f”, “g”, “h”, “a”, “i”, “j”]
 */

let elementsMatched = (arr1, arr2) => {
  let result = [];
  let itr1 = arr1[Symbol.iterator]();
  let result1 = itr1.next();

  while (!result1.done) {
    let itr2 = arr2[Symbol.iterator]();
    let result2 = itr2.next();
    while (!result2.done) {
      if (result1.value === result2.value) {
        result.push(result2.value);
      }
      result2 = itr2.next();
    }
    result1 = itr1.next();
  }
  return result;
};

let array1 = ["a", "b", "c", "d"];
let array2 = ["e", "f", "g", "h", "a", "i", "j"];
console.log(elementsMatched(array1, array2));
