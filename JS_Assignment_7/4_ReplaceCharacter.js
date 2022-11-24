/**
 * @PTalluru
 * 4. Input a String S with a word, and replace character “a” with “x” and
    display the result -
    Input: “apple”             Output: “xpple”
 */


let replaceCharacters = (string) => {

   return string.replaceAll('a','x');
}

console.log(replaceCharacters('apple'));
