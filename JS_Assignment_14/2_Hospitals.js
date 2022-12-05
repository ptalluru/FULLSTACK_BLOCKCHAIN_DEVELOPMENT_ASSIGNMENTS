/**
 * @PTalluru
 * 
 * 2. Write a JavaScript program to filter the hospitals according to:
    a) Number of Beds > 200
    b) Availability of Beds = Yes
    c) Location = Pune
    Sample Input:
    let hospitals = [
    {
    "id": 1,
    "name":"Hospital A",
    "location":"Delhi",
    "noOfBeds":450,
    “availability”:”Yes”
    },
    {
    "id": 2,
    "name":"Hospital B",
    "location":"Pune",
    "noOfBeds":150,
    “availability”:”No”
    },
    {
    "id": 3,
    "name":"Hospital
    C",
    "location":"Pune",
    "noOfBeds":350.
    “availability”:”Yes”
    }]
    Output:
    [
    {
    "id": 1,
    "name":"Hospital
    A",
    "location":"Delhi",
    "noOfBeds":450,
    “availability”:”Yes”
    },
    {
    "id": 3,
    "name":"Hospital
    C",
    "location":"Pune",
    "noOfBeds":350,
    “availability”:”Yes”
    }
    ]
    [
    {
    "id": 1,
    "name":"Hospital
    A",
    "location":"Delhi",
    "noOfBeds":450,
    “availability”:”Yes”
    },
    {
    "id": 3,
    "name":"Hospital
    C",
    "location":"Pune",
    "noOfBeds":350,
    “availability”:”Yes”
    }
    ]
    [
    {
    "id": 2,
    "name":"Hospital B",
    "location":"Pune",
    "noOfBeds":150,
    “availability”:”No”
    },
    {
    "id": 3,
    "name":"Hospital
    C",
    "location":"Pune",
    "noOfBeds":350,
    “availability”:”Yes”
    }
    ]
 * 
 */

let hospitals = [
  {
    id: 1,
    name: "Hospital A",
    location: "Delhi",
    noOfBeds: 450,
    availability: "Yes",
  },
  {
    id: 2,
    name: "Hospital B",
    location: "Pune",
    noOfBeds: 150,
    availability: "No",
  },
  {
    id: 3,
    name: "Hospital C",
    location: "Pune",
    noOfBeds: 350,
    availability: "Yes",
  },
];

//a) Number of Beds > 200
let bedsToFilter = 200;
let filterOnBeds = (hospitalsList) => {
  return hospitalsList.filter((hospital) => hospital.noOfBeds > bedsToFilter);
};

let basedOnBeds = filterOnBeds(hospitals);
console.log(basedOnBeds);

//b) Availability of Beds = Yes
let availabilityToFilter = "Yes";
let filterOnBedsAvailability = (hospitalsList) => {
  return hospitalsList.filter(
    (hospital) =>
      hospital.availability.toUpperCase() === availabilityToFilter.toUpperCase()
  );
};

let basedOnBedsAvailability = filterOnBedsAvailability(hospitals);
console.log(basedOnBedsAvailability);

//c) Location = Pune
let locationToFilter = "Pune";
let filterOnLocation = (hospitalsList) => {
  return hospitalsList.filter(
    (hospital) =>
      hospital.location.toUpperCase() === locationToFilter.toUpperCase()
  );
};

let basedOnLocation = filterOnLocation(hospitals);
console.log(basedOnLocation);
