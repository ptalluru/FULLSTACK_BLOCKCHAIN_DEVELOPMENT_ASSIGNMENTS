/**
 * 
 * @PTalluru
 * 
 * 1) Perform the following operations to provide the implementation for a
    Rectangle class. The operations are:
    1. Add an area() method to the Rectangle class.
    2. Create a Square class that satisfies the following conditions:
    ○It is a subclass of Rectangle.
    ○It contains a constructor and no other methods.
    ○It can use the Rectangle class' area method to print the area
    of a Square object.
 * 
 */

class Rectangle {
    constructor(length,breadth){
        this.length = length;
        this.breadth = breadth;
    }
    area(){
        let area = this.length * this.breadth
        return area; 
    }
}

class Square extends Rectangle{
    constructor(side){
        super(side,side);
    }
}

let rectangle = new Rectangle(5,6);
console.log(rectangle.area());

let square = new Square(4,4);
console.log(square.area());
