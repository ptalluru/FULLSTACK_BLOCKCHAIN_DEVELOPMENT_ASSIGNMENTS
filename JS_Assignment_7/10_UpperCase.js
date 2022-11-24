/**
 * @PTalluru
 * 
 * 10. Given a String S, achieve following tasks
    a) Convert the String into upper case.
    b) Convert only the first character to uppercase.
    c) Convert the String into lower case.
    d) Break the string into two halves and swap them.
    e) Count the repeating characters.
    f) Reverse the string
 */

//a) Convert the String into upper case.
let stringToUpperCase = (string) => {
  
   let upperCase = string.toUpperCase()
   console.log('To upper case ('+string+') :- '+ upperCase)
}

//b) Convert only the first character to uppercase.
let firstCharToUpperCase = (string) => {
   
   let replaceFirst = string.toLowerCase().replace(string.split('')[0],string.split('')[0].toUpperCase());
   console.log('First character to uppercase ('+string+') :- '+ replaceFirst)
}

//c) Convert the String into lower case.
let stringToLowerCase = (string) => {
   let lowerCase = string.toLowerCase()
   console.log('To lower case ('+string+') :- '+ lowerCase)
}

//d) Break the string into two halves and swap them.
let stringToHalfAndSwap = (string) => {
   let partOne = string.slice(0,string.length/2);
   let partTwo = string.slice(string.length/2,string.length);
   
   let result = partTwo+' '+partOne; //another way ==> let result = [partTwo,partOne].toString().replace(',',' ')
   console.log('String into two halves and swapped them ('+string+') :- '+ result)
}

//e) Count the repeating characters.
let countRepeatedCharacters = (string) => {
   if( string.length === 0 ) {
      console.log(" empty string ");
      return ;
   }
   else {
      let repeatedCharsMap = new Map();
      for( let i = 0 ;i < string.length;i++) {
         if(string[i]!==' '){
            repeatedCharsMap.set(string[i], 0);
         }
      }
      
      for( let i = 0 ;i < string.length ;i++) {
         let k = repeatedCharsMap.get(string[i]);
         repeatedCharsMap.set(string[i], k+1) ;
      }
      console.log('Count the repeating characters')
      for( let [ key ,value] of repeatedCharsMap){
         if(value>1){
            console.log(`  ${key}  occurs  ${value} times` );  
         }      
      }
   }

}

//f) Reverse the string
let stringReverse = (string) => {
   let newArr =[];
   string.split('').forEach((str)=>{
      newArr.unshift(str);
   });
   newArr = newArr.toString().replaceAll(',','')
   console.log('Reverse the string ('+string+') :- '+ newArr)
}


stringToUpperCase('reverse , ThE String');
firstCharToUpperCase('reverse , ThE String');
stringToLowerCase('reverse , ThE String');
stringToHalfAndSwap('reverse , ThE String');
countRepeatedCharacters('reverse , ThE String');
stringReverse('reverse , ThE String');

