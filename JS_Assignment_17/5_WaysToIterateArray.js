/**
 * 5. What are the different ways of iterating through an array?
demonstrate them.
*/

//using iterator
console.log("---Using Iterator---");
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

// using index
let array = [1, 2, 3, 4, 5, 6]; // Accessing array elements one by one
console.log("---Using Index---");
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);

// using for loop and different ways of for loop like for in , for of
console.log("---Using normal for---");
array = [1, 2, 3, 4, 5, 6];
for (let index = 0; index < array.length; index++) {
  console.log(array[index]);
}

console.log("---Using for in---");
for (let index in array) {
  console.log(array[index]);
}

console.log("---Using for of---");
for (let i of array) {
  console.log(i);
}

//forEach
console.log("---Using for each---");
array.forEach((item) => {
  console.log(item);
});

//while loop / do while
console.log("---Using while/do while---");
let index = 0;
while (index < array.length) {
  console.log(array[index]);
  index++;
}

//map
console.log("---Using map---");
index = 0;
let squares = array.map((x) => Math.pow(x, 2));
console.log(squares);

//filter
console.log("---Using filter---");
evens = array.filter((x) => x % 2 === 0);
console.log(evens);

//reduce
console.log("---Using reduce---");
sum = array.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
