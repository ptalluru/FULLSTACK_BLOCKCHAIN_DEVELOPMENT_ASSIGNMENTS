/**
 * @PTalluru
 * 
 * 3. Write a JavaScript program to iterate over an array inputted by the user using
    mapping. Perform the square of all elements in the original array, store the
    squares in a new array and make a mapping for the squares and display it.
    Sample Input:
    [ 1, 2, 3, 4, 5 ]
    Explanation:
    Original Array = [ 1, 2, 3, 4, 5 ]
    New Array = [ 1, 4, 9, 16, 25 ]
    Mapping = squares => [ 1, 4, 9, 16, 25 ]
    Output:
    [ 1, 4, 9, 16, 25 ]
 */


let originalArray = [1,2,3,4,5,6]
let newArray = [];

let squares = (arr) => {
   newArray = arr.map((num)=>num*num)
}

squares(originalArray);
console.log(newArray);

let squaresMap = new Map();
squaresMap.set('squares',newArray)
let array = squaresMap.entries().next();
console.log('Mapping = '+array.value[0]+' => ',array.value[1])