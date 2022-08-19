/**
 * @ptalluru
 * 3. Write a program to find the factorial of a number.
 * 
 */

let factorial = (number) => {
    if(number===0){
        return 1;
    }else {
        return number * factorial(number-1);
    }
}

console.log(factorial(6));