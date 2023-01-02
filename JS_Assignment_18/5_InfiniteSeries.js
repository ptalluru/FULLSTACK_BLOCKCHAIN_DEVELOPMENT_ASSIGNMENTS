/**
 * 5. Print an infinite series of natural numbers using a generator.
 */

function* naturalNumbers() {
  let num = 1;
  while (true) {
    yield num++;
  }
}

let naturalNumberIterator = naturalNumbers();

//prints 1-100
for (let i = 1; i <= 100; i++) {
  console.log(naturalNumberIterator.next().value);
}
