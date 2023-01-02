/**
 * 4. Create a generator to get output as shown in the image?
 >2*2=?
 >4
 >3+3=?
 >6
 >true
 */

function* generatorFunction() {
  yield "2*2=?";
  yield 2 * 2;
  yield "3+3=?";
  yield 3 + 3;
}

let result = generatorFunction();
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().done);
