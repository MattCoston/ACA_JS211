"use strict";

// let i = 0
// let count = 0
// do {
//     count = i += 1

// }  while(i < 1000)
// console.log(count)

// let person = {
//     firstName: "Jane",
//     lastName: "Doe",
//     birthDate: "Jan 5, 1925",
//     gender: "female"
// }

// let keyFinder = (obj) =>{
//     console.log(Object.keys(obj))
// }

// keyFinder(person)

// let objValueFinder = (obj) => {
//     console.log(Object.entries(obj))
// }

// objValueFinder(person)

let arrayOfPersons = [
  {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: 1926,
    gender: "female",
  },

  {
    firstName: "John",
    lastName: "Smith",
    birthDate: 1925,
    gender: "male",
  },
  {
    firstName: "Gomer",
    lastName: "Pyle",
    birthDate: 1946,
    gender: "male",
  },
];

// console.log(arrayOfPersons);


// Create a function that uses a for...of loop and an if statement to console.log the value associated with the key birthDate of each object if the birth year is an odd number.


// for (let  element of arrayOfPersons){
//   if (element.birthDate % 2 == 0) {
//     console.log(element)
//   }
  
// }



// Use .map() to map over the arrayOfPersons and console.log() their information.
// let printFullDetails = (array) => {
//    return `First Name is ${array.firstName} ${array.lastName} ${array.birthDate} ${array.gender}`
// }

// let mappedPersonsArray = arrayOfPersons.map(printFullDetails)
// console.log(mappedPersonsArray)

// Use .filter() to filter the persons array and console.log only males in the array.

// let filteredMalesOnly = (array) => {
//   if (array.gender === "male"){
//     console.log(array)
//   }
// }

// arrayOfPersons.filter(filteredMalesOnly)

// Create a function that returns true if the value of birthDate is before Jan 1, 1990.
let preDOB = (array) => {
  if(array.birthDate < 1990) {
    return true
  } else {
    return false
  }
}

console.log(arrayOfPersons.every(preDOB))

// Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

console.log(arrayOfPersons.filter(preDOB))