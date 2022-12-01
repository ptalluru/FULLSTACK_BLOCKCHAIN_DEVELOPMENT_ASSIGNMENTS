/**
 * @PTalluru
 * 
 * 1. Write a JavaScript program to take an array as input from the user and calculate
    the sum of numbers in odd places and the sum of numbers at even places.
    a) Print the difference between the two sums
    b) Print the number of elements in odd places
    c) Print the number of elements in even places
    d) Print the average of all elements in the array
    e) Print GCD of Sum of Numbers at Odd Places and Sum of Numbers at Even
    Places
    Sample Input:
        [ 1, 2, 3, 4, 5 ]
    Explanation:
        Sum of Numbers at Odd Places = 1 + 3 + 5 = 9
        Sum of Numbers at Even Places = 2 + 4 = 6
        Difference = 9 - 6 = 3
    Sample Output:
        Difference = 3
        Odd Elements = 3
        Even Elements = 2
        Average = 3
        GCD = 3
 */



let inputArray = [1,2,3,4,5];
let evenPlaceArray = [];
let oddPlaceArray = [];

let sumsAtPlaces = (inputArray) => {

    for(let i=0;i<inputArray.length;i++){
        if(i%2===0){
            oddPlaceArray.push(inputArray[i])
            //sumOdd += inputArray[i]; //here i am adding to sumOdd because making the starting index number to 1 than 0
        } else {
            evenPlaceArray.push(inputArray[i])
            //sumEven += inputArray[i];
        }
    }

}

let GCD = (num1,num2) => { 
    for (let i = 2; i <= num1 && i <= num2; i++) {
        // check if is factor of both integers
        if( num1 % i == 0 && num2 % i == 0) {
            return i;
        } else if(i == num1 || i == num2){
            return 1;
        }
    }
}

sumsAtPlaces(inputArray);
let sumOdd = oddPlaceArray.reduce((previousValue, element) => previousValue + element, 0);
let sumEven = evenPlaceArray.reduce((previousValue, element) => previousValue + element, 0);

console.log('Sum of Numbers at Odd Places :- '+sumOdd);
console.log('Sum of Numbers at Even Places :- '+sumEven);
console.log('Difference :- '+ (sumOdd-sumEven));
console.log('Odd Elements :- '+ oddPlaceArray.length);
console.log('Even Elements :- '+ evenPlaceArray.length);
console.log('Average :- '+ ((sumOdd+sumEven)/ (oddPlaceArray.length+evenPlaceArray.length)));
console.log('GCD :- '+ GCD(sumOdd,sumEven));