'use strict'

// let friends = ["Amy", "Jamie", "Matt", "Athena"]

// friends.forEach(friend => {
//     console.log(friend)
// });

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

// people.forEach((element, index)=>{
//     console.log(element.name)
//     console.log(element.address)
// })

let debtors = people.filter((element, index) =>{
    return element.amtDue >= 75
})

// console.log(debtors)

let debtCollectSentence = debtors.map(function (element, index) {
    console.log(`Hi ${element.name} please submit your payment of ${element.amtDue} as soon as possible.  Thank you.`)
})

debtCollectSentence.forEach(function (element) {
    console.log+(element)
})

//console.log(debtCollectSentence)
// hi XXX please submit your payment of XXX amount as soon as possible.  Thank you.

console.log(debtCollectSentence)