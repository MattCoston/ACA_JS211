'use strict'

const assert = require('assert');

// Vehicles and Crew

let mapping = {
    "Plane": "Pilot",
    "Boat": "Captain",
    "Bus": "Bus Driver",
    "Train": "Conductor"
}

class Vehicle {
    // type;
    // startDate;
    // id;
    // capacity;
    // crew;

    constructor(id, type, startDate, capacity){
        this.id = id;
        this.type = type;
        this.startDate = startDate;
        this.capacity = capacity;
        this.crew = []
    }

    status(){

        let requiredJob = mapping[this.type];
        console.log("The require job is ", requiredJob);

        for(let i = 0; i < this.crew.length; i++){
            let member = this.crew[i]
            if(member.job == requiredJob){
                return "Good to go!";
            }
        }
        return "Not ready yet!";
    }
}

class Employee {
    // job;
    // name;
    // id;
    // vehicle;

    constructor(id, name, job){
        this.id = id;
        this.name = name;
        this.job = job;
        this.vehicle = null;
    }

    assignTo(theVehicle){

        // we never told it to remove the crew member from the previous vehicle once they were reassigned

        if(this.vehicle == null ){
            //not assigned
        }
            else {
                let lookingFor = this;
                let index = this.vehicle.crew.findIndex(function(member){
                    if (lookingFor == member){
                        return true
                    }
                    return false
                })
                if(index >= 0 ){
                    this.vehicle.crew.splice(index, 1);
                }
            }
        
        this.vehicle = theVehicle;
        theVehicle.crew.push(this)
    }
}

if (typeof describe == 'function'){
    const assert = require('assert')

    describe("Set #1", function(){
        it("should correctly create vehicles", function(){
            let titanic = new Vehicle("doomed", "Boat", "1812", 2220);
            assert.equal(titanic.id, "doomed")
            assert.equal(titanic.capacity, 2220)
            assert.equal(titanic.type, "Boat")
        });
        it("should create an employee correctly", function(){
            let frank = new Employee(1, "Frank Underwood", "Bus Driver")
            assert.equal(frank.name, "Frank Underwood")
            assert.equal(frank.id, 1)
            assert.equal(frank.job, "Bus Driver")
        })
    })
    describe("Set 2", function(){
        it("should correctly add an assign employee to vehicle", function(){
            let titanic = new Vehicle("doomed", "Boat", "1812", 2220)
            let frank = new Employee(1, "Frank Underwood", "Bus Driver")
            assert.equal(titanic.crew.length, 0)
            assert.equal(frank.vehicle, null)
            frank.assignTo(titanic)
            assert.equal(titanic.crew.length, 1)
            assert.equal(frank.vehicle, titanic)
        })
    })
    describe("Set 3", function(){
        it("should correctly assign employee to vehicle if they get reassigned", function(){
            let titanic = new Vehicle("doomed", "Boat", "1812", 2220)
            let jet1 = new Vehicle("sonic", "Plane", "2020", 5)
            let frank = new Employee(1, "Frank Underwood", "Bus Driver")

            assert.equal(titanic.crew.length, 0)
            assert.equal(jet1.crew.length, 0)
            assert.equal(frank.vehicle, null)

            frank.assignTo(titanic)
            frank.assignTo(jet1)

            assert.equal(titanic.crew.length, 0)
            assert.equal(jet1.crew.length, 1)
        })
    })


}