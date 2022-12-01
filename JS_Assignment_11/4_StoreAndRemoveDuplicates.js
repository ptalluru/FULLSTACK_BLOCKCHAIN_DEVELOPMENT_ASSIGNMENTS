/**
 * 
 * @PTalluru
 * 
 * 4. Write a JavaScript program to take an array as input from the user and:
    a) Store all duplicate elements in a separate array
    b) Remove the duplicate elements from the original array
    Sample Input:
    [ 1, 2, 3, 2, 3, 4, 5 ]
    Output:
    Duplicate Elements = [ 2, 3 ]
    Array without duplicate elements = [ 1, 2, 3, 4, 5 ]
 */


let originalArray = [ 1, 2, 3, 2, 3, 4, 5 ];
let duplicateElements = [];
let modifiedArray = [];
let storeAndRemoveduplicates = (array) => {
    array.forEach( (element) => {
        if(!modifiedArray.includes(element)){
            modifiedArray.push(element);
        }else if(modifiedArray.includes(element)){
            duplicateElements.push(element);
        }
    })
}

storeAndRemoveduplicates(originalArray);
console.log('Duplicate Elements = ', duplicateElements);
console.log('Array without duplicate elements = ', modifiedArray)