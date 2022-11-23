/**
 * @PTalluru
 * 3.Write a JavaScript program to find the sum of the multiples of 3 and 5 under 1000
 */

let range = 1000;
let multiples = [];
for(let index = 1;index<range;index++){
    multiples.push(index);
}
let total = multiples
    .filter( num => num % 3 === 0 || num % 5 ===0 )
    .reduce((sum,num)=>sum + num ,0)

console.log('Sum of the multiples of 3 and 5 under 1000 :- ',total)