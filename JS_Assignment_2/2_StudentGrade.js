/**
 * @PTalluru
 *2. Write a function using switch case to find the grade of a student based on marks obtained
 * 
 * “S grade” if the marks are between 90 and 100.
 * “A grade” if the marks are between 80 and 90.
 * “B grade” if the marks are between 70 and 80.
 * “C grade” if the marks are between 60 and 70.
 * “D grade” if the marks are between 50 and 60.
 * “E grade” if the marks are between 40 and 50.
 * “Student has failed”  if the marks are between 0 and 40.
 * Else output “Invalid marks”.
 * 
 */

class Student{
    constructor(name , marks){
        this.name = name;
        this.marks = marks;
    }
}

let grade = (student) => {
    let sum = 0;
    for(let mark of student.marks){
        if(mark>=0 && mark<=100){
            sum += mark;
        }else {
            sum=-1;
            break;
        }
    }

    let avg = average(sum,student.marks.length);

    let assignGrade ;
    switch (true) {
        case (avg>90 && avg<=100):
            assignGrade = 'S grade'
            break;
    
        case (avg>80 && avg<=90):
            assignGrade = 'A grade'
            break;

        case (avg>70 && avg<=80):
            assignGrade = 'B grade'
            break;

        case (avg>60 && avg<=70):
            assignGrade = 'C grade'
            break;

        case (avg>50 && avg<=60):
            assignGrade = 'D grade'
            break;

        case (avg>40 && avg<=50):
            assignGrade = 'E grade'
            break;
        
        case (avg>=0 && avg<=40):
            assignGrade = 'Student has failed'
            break;

        default:
            assignGrade = 'Invalid marks'
            break;
    }
    return assignGrade;
}

let average = (sum,totalSubjects)=>{
    let avg =-1
    if(sum>=0)
        avg = sum/totalSubjects;
    return avg;
} 

let student1 = grade(new Student('One',[97,95,99]));
console.log('student1',student1);

let student2 = grade(new Student('Two',[85,84,82]));
console.log('student2',student2);

let student3 = grade(new Student('Three',[75,78,71]));
console.log('student3',student3);

let student4 = grade(new Student('Four',[67,66,62]));
console.log('student4',student4);

let student5 = grade(new Student('Five',[57,59,52]));
console.log('student5',student5);

let student6 = grade(new Student('Six',[45,44,42]));
console.log('student6',student6);

let student7 = grade(new Student('Seven',[50,20,27]));
console.log('student7',student7);

let student8 = grade(new Student('Eight',[-20,90,96]));
console.log('student8',student8);

let student9 = grade(new Student('Nine',[107,108,107]));
console.log('student9',student9);

let student10 = grade(new Student('Ten',[0,0,0]));
console.log('student10',student10);

