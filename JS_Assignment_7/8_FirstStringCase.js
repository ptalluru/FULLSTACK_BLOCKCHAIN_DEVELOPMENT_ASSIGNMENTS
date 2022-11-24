/**
 * @PTalluru
 * 
 * 8. Write a Javascript function to test whether the first character of a string
    is lowercase.
 */

/*
Using Regex
   let regex = /^[a-z]/
   return regex.test(string)
*/
let isFirstCharLower = (string) => {
   if(string.charCodeAt(0) >= 97 && string.charCodeAt(0) <= 122){
      return true
   }else{
      return false;
   }
   
}
console.log(isFirstCharLower('string'));
console.log(isFirstCharLower('String'));
console.log(isFirstCharLower('@tring'));
