/**
 * 
 * @PTalluru
 * 2. Input a String S with multiple words, and remove whitespaces and
    output the result -
    Input: “Hii Boy”             Output: “HiiBoy”
 */


let removeWhiteSpaces = (string) => {
   return string.replaceAll(' ','');
}

console.log(removeWhiteSpaces('Input a String S with multiple words, and remove whitespaces and'));
console.log(removeWhiteSpaces('Hii Boy'));
