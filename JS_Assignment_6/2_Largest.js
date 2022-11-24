/**
 * 
 * @PTalluru
 * 
 * 2) Write a javascript function find_largest to return the nth largest number
    in an array-
    eg- given an array of integers- [3,45,6,7,23,5,7,8]
    find_largest(3) will return third largest number from the above array -
    which is 8.
 * 
 * 
 */


let fromArray = [3,45,6,7,23,5,7,8];
let findLargest = (position) => {
    if(position<=fromArray.length-1) {
        let uniqueArray = (array) => {
            return [...new Set(array)];
        }
        let newArr = uniqueArray(fromArray).sort((a,b)=>b-a);
        // newArr=fromArray.sort((a,b)=>b-a).filter((item, pos, arr) => {
        //     return !pos || item != arr[pos - 1];
        // });
        return newArr[position-1];
    }
}

let position = 3
console.log(position+' largest number in the ['+fromArray+'] is :- '+findLargest(position));