/**
 * @PTalluru
 * 3. Write a program to find whether a given number is special number or not-
    If the sum of the factorial of digits of a number (N) is equal to the
    number itself, the number (N) is called a special number.
    eg- 145 is a special number
    Logic- 1! + 4! + 5!= 1+24+120 i.e 145
 * 
 */

let factorial = (num) => {
    if(num === 0){
        return 1;
    }else {
        return num * factorial(num-1);
    }
}

let specialNumber = (number)=>{
    let sum = 0;
    let temp = number;
    let remainder;
    
    while(temp>0){
        remainder = temp%10;
        sum += factorial(remainder);
        temp = parseInt(temp/10); 
    }
    if(sum===number){
        console.log(number+' is a Special Number');
    }else{
        console.log(number+' is NOT a Special number');
    }
}

specialNumber(40585);

/* Special number ex :- 145,40585........ */