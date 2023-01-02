/**
 * 3. Create a functional iterator, with a next function.
 */

function functionalIterator(arr) {
  let count = 0;

  function next() {
    return arr[count++];
  }
  return { next };
}

let array = ["John", "Rohn", "Danny", "James"];
let iteratorWithNext = functionalIterator(array);

console.log(iteratorWithNext.next());
console.log(iteratorWithNext.next());
console.log(iteratorWithNext.next());
console.log(iteratorWithNext.next());
