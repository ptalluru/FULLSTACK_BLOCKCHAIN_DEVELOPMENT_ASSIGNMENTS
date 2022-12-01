/**
 * 
 * @PTalluru
 * 
 * 3. Write a JavaScript program to flatten the array, ie, turns a deep array into a plain
    array.
    Note: Do not use array.flat();
    Sample Input:
    [ 1, 2, [ 3, 4, [ 5 ] ] ]
    Output:
    [ 1, 2, 3, 4, 5 ]
 */

let sampleArray = [ 1, 2, [ 3, 4, [ 5 ,6,7,[8,9]] ] ]
let sampleArray2 = [ 1, 2, [ 3, 4, [ 5 ] ] ]
let flatArray = (sampleArray) => {
    return sampleArray.toString().split(',').map(Number);
}

console.log(flatArray(sampleArray));
console.log(flatArray(sampleArray2));