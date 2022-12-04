/**
 * @PTalluru
 * 
 * 2. Write a program in JavaScript to map the student ids, names and scores.
    a) Add data for 3 students (use map functions)
    b) Get Student Names using map functions
    c) Delete Student Scores using map functions
    d) Display 1 parameter (only value), 2 parameters (value + key), and 3
    parameters (value + key + map) for the student
    Sample Input:
    "id": [ 1, 2, 3 ]
    "name": [ 'Hitanshu', 'Ninad', 'Amandeep' ]
    "scores": [ 90, 88, 92 ]
    Output:
    [ 'Hitanshu', 'Ninad', 'Amandeep' ]
    -----one parameter-----
    [ 1, 2, 3 ]
    [ 'Hitanshu', 'Ninad', 'Amandeep' ]
    [ 90, 88, 92 ]
    -----two parameter-----
    id 1, 2, 3
    name Hitanshu,Ninad,Amandeep
    scores 90,88,92
    -----three parameter-----
    id 1, 2, 3
    Map(3) {
    'id' => [ 67, 48, 29 ],
    'name' => [ 'Hitanshu', 'Ninad', 'Amandeep' ],
    'scores' => [ 90, 88, 92 ]
    }
    name Hitanshu,Ninad,Amandeep
    Map(3) {
    'id' => [ 1, 2, 3 ],
    'name' => [ 'Hitanshu', 'Ninad', 'Amandeep' ],
    'scores' => [ 90, 88, 92 ]
    }
    scores 90,88,92
    Map(3) {
    'id' => [ 1, 2, 3 ],
    'name' => [ 'Hitanshu', 'Ninad', 'Amandeep' ],
    'scores' => [ 90, 88, 92 ]
    }
 */


class Student {
   constructor(id,name,score){
      this.id = id;
      this.name = name;
      this.score = score;
   }
}

let studentList = [];

let addStudents = (studentDetails) => {
   studentDetails.id.map( (value,index) => {
      studentList.push(new Student(value,studentDetails.name[index],studentDetails.scores[index]));
   })
}

let input = {
   "id": [ 1, 2, 3 ],
   "name": [ 'Hitanshu', 'Ninad', 'Amandeep' ],
   "scores": [ 90, 88, 92 ]
}

//a) Add data for 3 students (use map functions)
addStudents(input);
console.log('-----added students list-----');
console.log(studentList);

//b) Get Student Names using map functions
let names = [];
names = studentList.map( (student)=> student.name)
console.log('-----names of students-----');
console.log(names)

//c) Delete Student Scores using map functions
let deleteScores = studentList.map( (student)=> {
   if(student){
      delete student.score
      return student
   }
})
console.log('-----students list after deleting scores property-----');
console.log(deleteScores);

//d) Display 1 parameter (only value), 2 parameters (value + key), and 3 parameters (value + key + map) for the student

/* ***one parameter*** */
console.log('-----one parameter-----');
Object.entries(input).map( (array)=> array[1]).forEach((item)=> console.log(item));

/* ***two parameters*** */
console.log('-----two parameter-----');
Object.entries(input).forEach((item)=> {
   console.log(item.toString().replace(',',' '))
});

/* ***three parameters*** */
console.log('-----three parameter-----');
var studentsMap=new Map();
Object.entries(input).forEach( (item)=> studentsMap.set(item[0],item[1]));
Object.entries(input).forEach((item)=> {
   console.log(item.toString().replace(',',' '))
   console.log(studentsMap)
});


