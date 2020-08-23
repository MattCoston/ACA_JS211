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
    birthDate: 1945,
    gender: "male",
  },
];

// console.log(arrayOfPersons);


// Create a function that uses a for...of loop and an if statement to console.log the value associated with the key birthDate of each object if the birth year is an odd number.


for (let  element of arrayOfPersons){
  if (element.gender  === 'female') {
    console.log(arrayOfPersons)
  }
  
}



// Use .map() to map over the arrayOfPersons and console.log() their information.


// Use .filter() to filter the persons array and console.log only males in the array.


// Create a function that returns true if the value of birthDate is before Jan 1, 1990.


// Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.