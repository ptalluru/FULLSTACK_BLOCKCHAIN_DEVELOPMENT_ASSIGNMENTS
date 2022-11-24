/**
 * 
 * @PTalluru
 * 1. Input a String S, and check its length and if the length is greater than 4,
    truncate the input String and output the result -
    Input: Ice              Output: Ice
    Input:Icecream    Output:Icec...
 */

let stringTruncate = (string) => {
   if(string.length>4){
      return string.slice(0,4)+'...'
   }else{
      return string
   }
}

console.log(stringTruncate('Ice'));
console.log(stringTruncate('Icecream'));