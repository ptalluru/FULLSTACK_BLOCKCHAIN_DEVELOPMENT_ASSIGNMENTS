/**
 * @PTalluru
 * 
 * 1. Write a JavaScript program to:
    a) filter employees according to department = IT
    b) filter employees who earn a salary < 65000
    Sample Input:
    let employees = [
    {
    "id": 1,
    "name":"Abhinav",
    "department":"IT",
    "Salary":75000
    },
    {
    "id": 2,
    "name":"Gaurav",
    "department":"Sales",
    "Salary":52000
    },
    {
    "id": 3,
    "name":"Raj",
    "department":"IT",
    "Salary":64000
    }]
    Output:
    [
    {
    "id": 1,
    "name":"Abhinav",
    "department":"IT",
    "Salary":75000
    },
    {
    "id": 3,
    "name":"Raj",
    "department":"IT",
    "Salary":64000
    }
    ]
    [
    {
    "id": 2,
    "name":"Gaurav",
    "department":"Sales",
    "Salary":52000
    },
    {
    "id": 3,
    "name":"Raj",
    "department":"IT",
    "Salary":64000
    }
    ]
 */

let employees = [
  {
    id: 1,
    name: "Abhinav",
    department: "IT",
    Salary: 75000,
  },
  {
    id: 2,
    name: "Gaurav",
    department: "Sales",
    Salary: 52000,
  },
  {
    id: 3,
    name: "Raj",
    department: "IT",
    Salary: 64000,
  },
];

//a) filter employees according to department = IT
let departmentToFilter = "IT";
let filterOnDepartment = (employeesList) => {
  return employeesList.filter(
    (employee) =>
      employee.department.toUpperCase() === departmentToFilter.toUpperCase()
  );
};
let itDepartment = filterOnDepartment(employees);
console.log(itDepartment);

//b) filter employees who earn a salary < 65000
let salaryToFilter = 65000;
let filterOnSalary = (employeesList) => {
  return employeesList.filter((employee) => employee.Salary < salaryToFilter);
};

let salaryBasedFilter = filterOnSalary(employees);
console.log(salaryBasedFilter);
