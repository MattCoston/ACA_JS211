'use strict'

let people = [
    {
        name: "Tom",
        address: "123 fake street",
        hobby: "Golf",
        amtDue: 4
    },{
        name: "Kate",
        address: "124 fake street",
        hobby: "Hiking" ,
        amtDue: 75
    },{
        name: "Frank",
        address: "125 fake street",
        hobby: "Cycling",
        amtDue: 100
    },{
        name: "Susan",
        address: "126 fake street",
        hobby: "Aviation",
        amtDue: 2
    }]

let numbers = [10,5,2,6,8,2,7,90]

let reduced = numbers.reduce((prevValue, element, index)=>{
    let next = prevValue + element
    return next
}, 0)

let minNumber = numbers.reduce((prevValue, element, index) =>{
    if(prevValue < element){
        return prevValue
    } else {
        return element
    }
}, numbers[0] )

let maxNumber = numbers.reduce((prevValue, element, index) => {
    if(prevValue > element){
        return prevValue
    } else {
        return element
    }
}, numbers[0])

// console.log(reduced)
// console.log(minNumber)
// console.log(maxNumber)


let totalOwed = people.reduce((prevValue, element, index) => {
    let owed = prevValue + element.amtDue
    return owed
}, 0)

console.log(totalOwed)