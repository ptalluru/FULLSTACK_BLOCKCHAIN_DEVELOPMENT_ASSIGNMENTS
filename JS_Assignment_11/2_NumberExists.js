/**
 * @PTalluru
 * 
 * 2. Write a JavaScript program to take 2 arrays from the user and check if the
    number 4 exists in any of the arrays, or both of the arrays.
    Sample Input 1:
    [ 1, 2, 3, 4, 5 ]
    [ 4, 6, 1, 8, 2 ]
    Output:
    4 in both arrays
    Sample Input 2:
    [ 1, 2, 3, 6, 5 ]
    [ 4, 6, 1, 8, 2 ]
    Output:
    4 in array 2
    Sample Input 3:
    [ 1, 2, 3, 4, 5 ]
    [ 5, 6, 1, 8, 2 ]
    Output:
    4 in array 1
 */

let arr1 = [ 1, 2, 3, 4, 5 ]
let arr2 = [ 4, 6, 1, 8, 2 ]

let arr3 = [ 1, 2, 3, 6, 5 ]
let arr4 = [ 4, 6, 1, 8, 2 ]

let arr5 = [ 1, 2, 3, 4, 5 ]
let arr6 = [ 5, 6, 1, 8, 2 ]

let numberToCheck = 4;

let checkNumber = (arr1,arr2) => {
    if(arr1.includes(numberToCheck) && arr2.includes(numberToCheck)){
        console.log(numberToCheck+' in both arrays')
    }else if(arr1.includes(numberToCheck)){
        console.log(numberToCheck+' in array 1')
    }else if(arr2.includes(numberToCheck)){
        console.log(numberToCheck+' in array 2')
    }
}

checkNumber(arr1,arr2);

checkNumber(arr3,arr4);

checkNumber(arr5,arr6);
