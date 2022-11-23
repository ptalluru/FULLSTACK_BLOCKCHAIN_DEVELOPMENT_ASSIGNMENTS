/**
 * @PTalluru
 * 1. Using for loops, write a Javascript program to output the following
   pattern -
    1
    2  3
    4  5  6
    7  8  9  10
 * 
 */

let length = 4;
let result = '';
let counter = 1;
let pattern = ()=> {
    for(let rows=1;rows<=length;rows++){
        for(let columns=1;columns<=rows;columns++){
            result += counter+' ';
            counter++;
        }
        result+='\n'
    }
    console.log(result);
}

pattern();
