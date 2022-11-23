/**
 * @PTalluru
 * 
 * 2. Write a program to find whether a given number is armstrong number or not-
    The Armstrong number is a number that is equal to the sum of cubes of
    its digits. For example 0, 1, 153, 370, 371 and 407 are the Armstrong
    numbers. Let's try to understand why 153 is an Armstrong number.
    153 = (1*1*1)+(5*5*5)+(3*3*3)  where:
    (1*1*1)=1
    (5*5*5)=125
    (3*3*3)=27
    So:
    1+125+27=153
 * 
 */

let checkArmstrongOrNot = (number) => {
    let sum =0;
    let temp = number;
    let remainder;

    while(temp>0){
        remainder = temp%10;
        sum += remainder * remainder * remainder;
        temp = parseInt(temp/10); 
    }
    if(sum===number){
        console.log(number+' is an Armstrong Number');
    }else{
        console.log(number+' is NOT an Armstrong number');
    }

}

checkArmstrongOrNot(153);

/**
Armstrong numbers to check (0-999)-->0,1,153,370,371,407
 */