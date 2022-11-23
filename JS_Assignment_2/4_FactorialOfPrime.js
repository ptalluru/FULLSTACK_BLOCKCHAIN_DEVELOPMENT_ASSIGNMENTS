/**
 * @PTalluru
 * 4. Write a program to find the factorial of all prime numbers between a
given range . Range will be passed as 2 values in the function
parameters. eg- if it is needed to find the values for numbers 1-100, then
function declaration can look like - function prime(1,100).
 * 
 */
let isPrime = (num) => {
    let prime = true;
    if(num === 0 || num === 1){
        prime = false;
    }else if(num>1){
        for (let i=2;i<=num/2;i++){
            if(num%i === 0){
                prime = false;
                break;
            }
        }
    }
    return prime;
}

let factorial = (num) => {
    if(num === 1){
        return 1;
    }else {
        return num * factorial(num-1);
    }
}

let findFactorial = (minRange,maxRange) => {
    let numbers = [];
    for(let i=minRange;i<=maxRange;i++){
        numbers.push(i)
    }
    numbers.filter(isPrime)
           .forEach( (num) => console.log('Factorial of '+num+' is '+factorial(num)) );
}

let minRange=1;
let maxRange=100;

findFactorial(minRange,maxRange);