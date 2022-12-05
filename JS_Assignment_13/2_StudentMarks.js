/**
 * @PTalluru
 * 
 * 2. Write a JavaScript program to
    a) Calculate grades on basis of marks
    >90 = A
    >80 = B
    >70 = C
    >60 = D
    >50 = E
    else = F
    b) Map the grades of each student
    c) Group students according to the grades they have received and display.
    Sample Input:
    let students = [
    { name: "John", marks: “92” },
    { name: "Oliver", marks: “85” },
    { name: "Michael", marks: “79” },
    { name: "Dwight", marks: “95”},
    { name: "Oscar", marks: “64” },
    { name: "Kevin", marks: “48” },
    ];
    Output:
    {
    'A': [ { name: "John", grade: “A” },
    { name: "Dwight", grade: “A” } ],
    'B': [ { name: "Oliver", grade: “B” } ],
    'C': [ { name: "Michael", grade: “C” } ],
    'D': [ { name: "Oscar", grade: “D” } ],
    'E': [ ],
    'F': [ { name: "Kevin", grade: “F” } ],
    }
 */

let students = [
  { name: "John", marks: 92 },
  { name: "Oliver", marks: 85 },
  { name: "Michael", marks: 79 },
  { name: "Dwight", marks: 95 },
  { name: "Oscar", marks: 64 },
  { name: "Kevin", marks: 48 },
];

//a) Calculate grades on basis of marks
//b) Map the grades of each student
let addGrades = (studentsList) => {
  studentsList.forEach((student) => {
    if (student.marks > 90 && student.marks <= 100) {
      student.grade = "A";
    } else if (student.marks > 80 && student.marks <= 90) {
      student.grade = "B";
    } else if (student.marks > 70 && student.marks <= 80) {
      student.grade = "C";
    } else if (student.marks > 60 && student.marks <= 70) {
      student.grade = "D";
    } else if (student.marks > 50 && student.marks <= 60) {
      student.grade = "E";
    } else {
      student.grade = "F";
    }
  });
};

addGrades(students);
console.log(students);

//c) Group students according to the grades they have received and display.
let grades = ["A", "B", "C", "D", "E", "F"];
let studentsWithGrades = (students) => {
  let gradeWise = {};
  grades.map((grade) => {
    gradeWise[grade] = [];
  });
  students.forEach((student) => {
    delete student.marks;
    if (grades.includes(student.grade)) {
      gradeWise[student.grade].push(student);
    }
  });
  return gradeWise;
};

console.log(studentsWithGrades(students));
