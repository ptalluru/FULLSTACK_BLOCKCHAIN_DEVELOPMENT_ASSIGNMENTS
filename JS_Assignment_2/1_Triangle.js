/**
 * @PTalluru
 * 1. Write a Javascript function to check whether a triangle is equilateral,isosceles or scalene
 * 
 */
class Triangle {
    constructor(sideA,sideB,sideC){
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
}

let typeOfTriangle = (triangle) => {
    if(triangle.sideA===triangle.sideB && triangle.sideB===triangle.sideC){
        return 'Equilateral Triangle';
    }else if(triangle.sideA===triangle.sideB || triangle.sideB===triangle.sideC || triangle.sideA===triangle.sideC){
        return 'Isosceles Triangle';
    }else{
        return 'Scalene Triangle';
    }
}

let triangleOne = typeOfTriangle(new Triangle(10,10,10));
let triangleTwo = typeOfTriangle(new Triangle(10,9,9));
let triangleThree = typeOfTriangle( new Triangle(10,9,8));

console.log('triangleOne is :- ',triangleOne);
console.log('triangleTwo is :- ',triangleTwo);
console.log('triangleThree is :- ',triangleThree);