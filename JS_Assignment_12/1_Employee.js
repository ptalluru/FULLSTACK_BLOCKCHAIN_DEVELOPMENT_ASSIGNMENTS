/**
 * @PTalluru
 * 
 * 1. Write a JavaScript program to map Employee Records according to Employee IDs.
    Employee: { id, name, salary }
    a) Print an array of all employee ids
    b) Print count of employees
    c) Print the name of the employee according to their id { key: value }
    d) Store the salaries of all employees in an array
    e) Calculate the average salary the company is paying to its employees
    Sample Input:
    "id": [ 67, 48, 29 ]
    "name": [ "Hitanshu", “Ninad”, “Amandeep” ]
    "salary": [ 75000, 82000, 98000 ]
    Output:
    [ 67, 48, 29 ]
    3
    67: Hitanshu
    48: Ninad
    29: Amandeep
    [ 75000, 82000, 98000 ]
    85000
 * 
 */

class Employee {
    constructor(id,name,salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
}

let employeeList = [];

let employees = (employeeDetails) => {
    employeeDetails.id.map( (value,index)=> {
        employeeList.push(new Employee(value,employeeDetails.name[index],employeeDetails.salary[index]))
    })
}


let createStudents = (studentDetails) => {
    studentDetails.id.map( (value,index) => {
       studentList.push(new Student(value,studentDetails.name[index],studentDetails.scores[index]));
    })
 }

let input = {
    "id": [ 67, 48, 29 ],
    "name": [ "Hitanshu", "Ninad", "Amandeep" ],
    "salary": [ 75000, 82000, 98000 ]
}

employees(input);

//a) Print an array of all employee ids
console.log(employeeList.map( (emp)=>emp.id ));

//b) Print count of employees
console.log(employeeList.length);

//c) Print the name of the employee according to their id { key: value }
employeeList.forEach((emp)=>{
    console.log(emp.id+': '+emp.name);
})

//d) Store the salaries of all employees in an array
let salaries = [];
employeeList.forEach((emp)=> {
    salaries.push(emp.salary);
});
console.log(salaries)

//e) Calculate the average salary the company is paying to its employees
let averageSalary = employeeList.reduce((total, emp) => total + emp.salary, 0) / employeeList.length
console.log(averageSalary);

