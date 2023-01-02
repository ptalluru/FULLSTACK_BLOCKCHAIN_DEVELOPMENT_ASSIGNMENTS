/**
 *6. Create a generator that can throw an exception.
 */

function* genFunc() {
  while (true) {
    try {
      yield new Error("Gen Func throws exception example");
    } catch (e) {
      console.log({ catch_exception: e });
    }
  }
}
let g = genFunc();
console.log(g.next());
g.throw(new Error("Throw an exception..."));
console.log(g.next());
