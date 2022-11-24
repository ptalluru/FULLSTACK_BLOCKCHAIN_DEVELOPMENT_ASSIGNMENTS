/**
 * 
 * @PTalluru
 * 
 * 3) Write a JavaScript program which accept a number as input in the
    function parameter and insert dashes (-) between each two even
    numbers.
    For example if you accept 025468 as the output should be 0-254-6-8.
    computeDash(025468) -> 0-254-6-8.
 * 
 */


let computeDash = (number) => {
    let prevDigit,currrentDigit;
    let newArr = number.toString().split('');
    let result = '';
    for(let i=0 ; i<newArr.length;i++){
        
        if(i === 0){
            currrentDigit = newArr[i];
            result += currrentDigit;
            prevDigit = newArr[i];
        }else if(i>0){
            currrentDigit = newArr[i];
            if(currrentDigit % 2 === 0 && prevDigit % 2 === 0) {
                result += '-'+currrentDigit;
                
            }else{
                result += currrentDigit;
            }
            prevDigit = newArr[i]
        }
    }
    console.log(result);
}

computeDash('025468')// input will be taken as 25468 instead 025468 so use string to add leading zero
computeDash(25468); 
