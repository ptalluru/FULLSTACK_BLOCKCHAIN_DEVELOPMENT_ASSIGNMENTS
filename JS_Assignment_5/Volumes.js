/**
 * @PTalluru
 * 
 * 1) Write a JavaScript program to get the volume of a Cylinder, Sphere and
    Cone with four decimal places using objects and classes.
    Create classes for volumes for each geometric shape which returns the
    output using the getVolume() method.
    eg- to get volume of cylinder-
    let obj= new Cylinder(radius,height);
    obj.getVolume();
    Formulas for volumes of the shapes-
    1) Cylinder- Volume = πr2h
    where r is the radius and h is the height of the cylinder.
    2)Sphere- Volume= 4/3π𝑟3
    where r is the radius
    3) Cone- Volume= πr2h/3
    where r is the radius and h is the height of the cone.
 * 
 */

class Cylinder {
    constructor(radius,height){
        if(radius>0 && height>0){
            this.radius = radius;
            this.height = height;
        }
    }

    getVolume() {
        let volume = Math.PI * (this.radius * this.radius) * this.height;
        volume = parseFloat(volume.toFixed(4));
        return volume;
    }

}

class Sphere {
    constructor(radius){
        if(radius>0){
            this.radius = radius;
        }
    }
    getVolume() {
        let volume = (4/3)* Math.PI * (this.radius * this.radius * this.radius);
        volume = parseFloat(volume.toFixed(4));
        return volume;
    }
}

class Cone {
    constructor(radius,height){
        if(radius>0 && height>0){
            this.radius = radius;
            this.height = height;
        }
    }
    getVolume() {
        let volume = (Math.PI * (this.radius * this.radius) * this.height) / 3;
        volume = parseFloat(volume.toFixed(4));
        return volume;
    }
}

let cylinder = new Cylinder(5,10);
console.log(cylinder.getVolume())

let sphere = new Sphere(5);
console.log(sphere.getVolume())

let cone = new Cone(5,10);
console.log(cone.getVolume())
