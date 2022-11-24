/**
 * 
 * @PTalluru
 * 3. Input a String S with two words, and replace first word with second word
    and display the result -
    Input: “Hii Boy”             Output: “Boy Hii”
 */

let replaceWords = (string) => {
   let newArr =[];
   string.split(' ').forEach((str)=>{
      newArr.unshift(str);
   });
   return newArr.toString().replaceAll(',',' ');
}

console.log(replaceWords('Hii Boy'));

